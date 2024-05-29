<script lang="ts">
	import BallEditor from '$lib/BallEditor.svelte';
	import Pool from '$lib/Pool.svelte';

	import { processCollision, getWallCollision } from '../lib/pool';
	import { onMount } from 'svelte';

	let editing = false;

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

	let initialBalls = fast;

	let pastBalls = initialBalls;
	let [currentBalls, time] = processCollision(pastBalls) || [pastBalls, '100000'];
	let [futureBalls, nextTime] = processCollision(currentBalls) || [currentBalls, '0'];

	let collisionFunc: Promise<void> | null = null;

	async function runCollision() {
		if (collisionFunc !== null) await collisionFunc;

		if (editing) return;

		pastBalls = currentBalls;
		[currentBalls, time] = [futureBalls, nextTime];

		if (time !== '0') {
			setTimeout(runCollision, time * 1000);
		}

		collisionFunc = (async () => {
			[futureBalls, nextTime] = processCollision(currentBalls) || [currentBalls, '0'];
		})();
	}

	let editingBallIndex: number | null = null;
	function openBallEditor(index: number) {
		editingBallIndex = index;
	}

	function editCallback() {
		editing = !editing;

		if (!editing) {
			startSim();
			editingBallIndex = null;
		} else {
		}
	}

	function startSim() {
		pastBalls = initialBalls;
		[currentBalls, time] = processCollision(pastBalls) || [pastBalls, '100000'];
		[futureBalls, nextTime] = processCollision(currentBalls) || [currentBalls, '0'];
		setTimeout(runCollision, time * 1000);
	}

	onMount(startSim);
</script>

<Pool
	oldBalls={editing ? initialBalls : pastBalls}
	curBalls={editing ? initialBalls : currentBalls}
	time={editing ? 0 : time}
	editCallback={editing ? openBallEditor : () => {}}
/>
<button on:click={editCallback}>{editing ? 'run' : 'edit'}</button>
{#if editing}
	<button
		on:click={() =>
			(initialBalls = [
				...initialBalls,
				{
					position: {
						x: Math.round(Math.random() * 400 + 50) / 10,
						y: Math.round(Math.random() * 100 + 25) / 10
					},
					velocity: { x: 10, y: 10 },
					radius: 0.5,
					mass: 1
				}
			])}>new ball</button
	>
{/if}
{#if editingBallIndex !== null}
	<BallEditor
		update={(ball) => {
			initialBalls[editingBallIndex] = ball;
			initialBalls = initialBalls;
		}}
		remove={() => {
			initialBalls = [
				...initialBalls.slice(0, editingBallIndex),
				...initialBalls.slice(editingBallIndex + 1)
			];
			editingBallIndex = null;
		}}
		ball={initialBalls[editingBallIndex]}
	/>
{:else if editing}
	<p>click on a ball to edit its properties</p>{/if}

<style>
	svg {
		width: 25%;
		height: 25%;
	}
</style>
