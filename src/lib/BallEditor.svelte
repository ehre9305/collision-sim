<script lang="ts">
	import NumberInputs from './NumberInputs.svelte';
	import type { Ball } from './pool';

	export let ball: Ball;
	export let update: (newBall: Ball) => {};
	export let remove: () => void;

	let radius: number;
	let mass: number;
	let vx: number;
	let vy: number;
	let px: number;
	let py: number;

	$: {
		radius = ball.radius;
		mass = ball.mass;
		vx = ball.velocity.x;
		vy = ball.velocity.y;
		px = ball.position.x;
		py = ball.position.y;
	}

	function handleInput() {
		update({
			mass: mass,
			radius: radius,
			position: {
				x: px,
				y: py
			},
			velocity: {
				x: vx,
				y: vy
			}
		});
	}
</script>

<form on:submit|preventDefault={() => {}}>
	<NumberInputs
		label="Mass"
		value={ball.mass}
		update={(n) => {
			mass = n;
			handleInput();
		}}
	/>
	<NumberInputs
		label="Radius"
		value={ball.radius}
		update={(n) => {
			radius = n;
			handleInput();
		}}
	/>
	<NumberInputs
		label="Y position"
		value={ball.position.y}
		update={(n) => {
			py = n;
			handleInput();
		}}
	/>
	<NumberInputs
		label="X position"
		value={ball.position.x}
		update={(n) => {
			px = n;
			handleInput();
		}}
	/>
	<NumberInputs
		label="Y velocity"
		value={ball.velocity.y}
		update={(n) => {
			vy = n;
			handleInput();
		}}
	/>
	<NumberInputs
		label="X velocity"
		value={ball.velocity.x}
		update={(n) => {
			vx = n;
			handleInput();
		}}
	/>
</form>
<button on:click={remove}>delete</button>
