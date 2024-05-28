<script lang="ts">
	import { spring } from 'svelte/motion';
	import Pool from '$lib/Pool.svelte';

	import { processCollision, getWallCollision } from '../lib/pool';
	import { onMount } from 'svelte';

	const inline = [
		{ position: { x: 15, y: 10 }, velocity: { x: 5, y: 0 }, radius: 1, mass: 1 },
		{ position: { x: 10, y: 10 }, velocity: { x: 10, y: 0 }, radius: 1, mass: 1 },
		{ position: { x: 13, y: 10 }, velocity: { x: -1, y: 0 }, radius: 1, mass: 1 }
	];
	const fast = [
		{ position: { x: 11, y: 11 }, velocity: { x: 5, y: 1 }, radius: 10, mass: 100 },
		{ position: { x: 6, y: 8 }, velocity: { x: 1000, y: -1 }, radius: 0.3, mass: 1 },
		{ position: { x: 7, y: 5 }, velocity: { x: 0, y: 1 }, radius: 0.3, mass: 1 },
		{ position: { x: 8, y: 4 }, velocity: { x: -2, y: 1 }, radius: 0.3, mass: 1 },
		{ position: { x: 9, y: 3 }, velocity: { x: 0, y: 1 }, radius: 0.3, mass: 1 }
	];
	const old = [
		{ position: { x: 6, y: 5 }, velocity: { x: 10, y: 1 }, radius: 5, mass: 5 },
		{ position: { x: 5, y: 5 }, velocity: { x: 6, y: 1 }, radius: 0.5, mass: 10 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 13, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 16, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 20, y: 10 }, velocity: { x: 0, y: 0 }, radius: 2, mass: 1 },
		{ position: { x: 20, y: 13 }, velocity: { x: 0, y: 0 }, radius: 1, mass: 0.1 },
		{ position: { x: 20, y: 10 }, velocity: { x: 0, y: 0 }, radius: 2, mass: 1 },
		{ position: { x: 20, y: 10 }, velocity: { x: 0, y: 0 }, radius: 2, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 },
		{ position: { x: 10, y: 5 }, velocity: { x: 0, y: 0 }, radius: 0.5, mass: 1 }
	];

	let pastBalls = old;
	let [currentBalls, time] = processCollision(pastBalls) || [pastBalls, '100000'];
	let [futureBalls, nextTime] = processCollision(currentBalls) || [currentBalls, '0'];

	let count = 1;

	const displayed_count = spring();
	$: displayed_count.set(count);
	$: offset = modulo($displayed_count, 1);

	function modulo(n: number, m: number) {
		// handle negative numbers
		return ((n % m) + m) % m;
	}

	let collisionFunc: Promise<void> | null = null;

	async function runCollision() {
		if (collisionFunc !== null) await collisionFunc;

		pastBalls = currentBalls;
		[currentBalls, time] = [futureBalls, nextTime];

		if (time !== '0') {
			setTimeout(runCollision, time * 1000);
		}

		collisionFunc = (async () => {
			[futureBalls, nextTime] = processCollision(currentBalls) || [currentBalls, '0'];
		})();
	}

	onMount(() => setTimeout(runCollision, time * 1000));
</script>

<Pool oldBalls={pastBalls} curBalls={currentBalls} {time} />

<p>{JSON.stringify(currentBalls.map(getWallCollision))}</p>

<div class="counter">
	<button on:click={() => (count -= 1)} aria-label="Decrease the counter by one">
		<svg aria-hidden="true" viewBox="0 0 1 1">
			<path d="M0,0.5 L1,0.5" />
		</svg>
	</button>

	<div class="counter-viewport">
		<div class="counter-digits" style="transform: translate(0, {100 * offset}%)">
			<strong class="hidden" aria-hidden="true">{Math.floor($displayed_count + 1)}</strong>
			<strong>{Math.floor($displayed_count)}</strong>
		</div>
	</div>

	<button on:click={() => (count += 1)} aria-label="Increase the counter by one">
		<svg aria-hidden="true" viewBox="0 0 1 1">
			<path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" />
		</svg>
	</button>
</div>

<style>
	.counter {
		display: flex;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		margin: 1rem 0;
	}

	.counter button {
		width: 2em;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0;
		background-color: transparent;
		touch-action: manipulation;
		font-size: 2rem;
	}

	.counter button:hover {
		background-color: var(--color-bg-1);
	}

	svg {
		width: 25%;
		height: 25%;
	}

	path {
		vector-effect: non-scaling-stroke;
		stroke-width: 2px;
		stroke: #444;
	}

	.counter-viewport {
		width: 8em;
		height: 4em;
		overflow: hidden;
		text-align: center;
		position: relative;
	}

	.counter-viewport strong {
		position: absolute;
		display: flex;
		width: 100%;
		height: 100%;
		font-weight: 400;
		color: var(--color-theme-1);
		font-size: 4rem;
		align-items: center;
		justify-content: center;
	}

	.counter-digits {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.hidden {
		top: -100%;
		user-select: none;
	}
</style>
