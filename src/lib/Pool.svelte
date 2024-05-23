<script lang="ts">
	import type { Ball } from '../lib/pool';
	import { TABLE } from '../lib/pool';
	import Circle from './Circle.svelte';

	export let curBalls: Ball[];
	export let oldBalls: Ball[];
	export let time: number;
</script>

<svg viewBox={`0 0 ${TABLE.width} ${TABLE.height}`}>
	{#each oldBalls as ball, index (index)}
		<Circle
			initialX={ball.position.x}
			initialY={ball.position.y}
			finalX={curBalls[index].position.x}
			finalY={curBalls[index].position.y}
			radius={ball.radius}
			hue={(index / oldBalls.length) * 360}
			label={'' + ball.mass}
			{time}
		/>
		<p>{JSON.stringify(ball)}</p>
	{/each}
</svg>
<p>{JSON.stringify(curBalls)}</p>

<style>
	svg {
		border: 3px solid red;
	}
</style>
