export const TABLE = { width: 50, height: 25 }

export type Coords = { x: number, y: number };

export type Ball = { position: Coords, velocity: Coords, radius: number, mass: number };

export type Wall = "top" | "bottom" | "left" | "right"

export type Time = number;

export function getRadiusSquared(a: Ball, b: Ball): number {
	return (a.radius + b.radius) ** 2;
}

export function getColision(a: Ball, b: Ball): Time | void {
	const time = solveCollisionTime(a, b)

	if (time > 0) {
		return time;
	}

	return
}

export function getWallCollision(b: Ball): { wall: Wall, time: Time } | void {
	const hitsTop = b.velocity.y < 0
	const hitsLeft = b.velocity.x < 0

	let yTime: number | null = null;
	let xTime: number | null = null;

	const wy = hitsTop ? b.radius : TABLE.height - b.radius
	const wx = hitsLeft ? b.radius : TABLE.width - b.radius

	const { y: py, x: px } = b.position
	const { y: vy, x: vx } = b.velocity

	xTime = (wx - px) / vx
	yTime = (wy - py) / vy


	if (yTime < 0 || isNaN(yTime)) yTime = null;
	if (xTime < 0 || isNaN(xTime)) xTime = null;

	if (xTime !== null) {
		if (yTime === null || (xTime) < (yTime)) {
			return {
				wall: hitsLeft ? "left" : "right",
				time: xTime
			}
		}
	}

	if (yTime !== null) {
		if (xTime === null || (yTime) < (xTime)) {
			return {
				wall: hitsTop ? "top" : "bottom",
				time: yTime
			}
		}
	}
}

/**
 * j is -1 for a y wall collision, -2 for x wall
 */
export function getNextCollision(balls: Ball[]): { time: Time, i: number, j: number } | void {
	let soonestCollision: { time: Time, i: number, j: number } | undefined = undefined;

	for (let i = 0; i < balls.length; i++) {
		for (let j = i + 1; j < balls.length; j++) {
			const time = getColision(balls[i], balls[j])
			if (time !== undefined) {
				if (soonestCollision === undefined || (soonestCollision.time) > (time)) {
					soonestCollision = { time, i, j }
				}
			}
		}

		const wallBounce = getWallCollision(balls[i])

		if (wallBounce !== undefined) {
			if (soonestCollision === undefined || (wallBounce.time) < (soonestCollision.time)) {
				soonestCollision = {
					time: wallBounce.time,
					i, j: wallBounce.wall === "top" || wallBounce.wall === "bottom" ? -1 : - 2
				}

			}

		}
	}

	return soonestCollision;
}

function translateBalls(balls: Ball[], time: Time): Ball[] {
	const newBalls: Ball[] = []
	for (const ball of balls) {
		const newBall = cloneBall(ball)
		newBall.position = {
			x: ball.position.x + ball.velocity.x * time,
			y: ball.position.y + ball.velocity.y * time,
		};
		newBalls.push(newBall)
	}

	return newBalls;
}

export function processCollision(balls: Ball[]): [Ball[], Time] | void {
	const nextCollision = getNextCollision(balls);
	if (nextCollision === undefined) {
		return
	}


	const newBalls = translateBalls(balls, nextCollision.time)

	if (nextCollision.j >= 0) {
		handleCollision(newBalls[nextCollision.i], newBalls[nextCollision.j])
	} else {
		if (nextCollision.j === -1) {
			newBalls[nextCollision.i].velocity.y = (newBalls[nextCollision.i].velocity.y) * -1;
		} else if (nextCollision.j === -2) {
			newBalls[nextCollision.i].velocity.x = (newBalls[nextCollision.i].velocity.x) * -1;
		}
	}

	return [newBalls, nextCollision.time];
}

function rotate(coords: Coords, theta: number): [number, number] {
	let cosA = Math.cos(theta);
	let sinA = Math.sin(theta);
	return [
		(coords.x) * cosA + (coords.y) * sinA,
		-(coords.x) * sinA + (coords.y) * cosA
	];
}

function getCollisionAngle(a: Ball, b: Ball): number {
	return Math.atan2(
		(b.position.y) - (a.position.y),
		(b.position.x) - (a.position.x),
	);
}

/**
* the balls are expected to have positions of where they collide
*/
function handleCollision(a: Ball, b: Ball): void {
	const theta = getCollisionAngle(a, b);
	const [uaInline, vaPerp] = rotate(a.velocity, theta);
	const [ubInline, vbPerp] = rotate(b.velocity, theta);

	const M = a.mass + b.mass;

	const vaInline = (a.mass - b.mass) / M * uaInline + 2 * b.mass / M * ubInline;
	const vbInline = 2 * a.mass / M * uaInline + (b.mass - a.mass) / M * ubInline;

	const [vax, vay] = rotate({ x: vaInline, y: vaPerp }, -theta)
	const [vbx, vby] = rotate({ x: vbInline, y: vbPerp }, -theta)

	a.velocity = { x: vax, y: vay };
	b.velocity = { x: vbx, y: vby };
}


function cloneBall(ball: Ball): Ball {
	return JSON.parse(JSON.stringify(ball));
}

function solveCollisionTime(b1: Ball, b2: Ball): number {
	const { x: p1x, y: p1y } = b1.position;
	const { x: v1x, y: v1y } = b1.velocity;

	const { x: p2x, y: p2y } = b2.position;
	const { x: v2x, y: v2y } = b2.velocity;

	const r = b1.radius + b2.radius;

	const px = p2x - p1x
	const py = p2y - p1y
	const vx = v2x - v1x
	const vy = v2y - v1y

	const a = vx ** 2 + vy ** 2;
	const b = 2 * (px * vx + py * vy)
	const c = px ** 2 + py ** 2 - r ** 2

	return (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
}


