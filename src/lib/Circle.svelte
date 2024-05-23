<script lang="ts">
	import { afterUpdate, onMount } from 'svelte';

	export let initialX: number;
	export let initialY: number;
	export let finalX: number;
	export let finalY: number;
	export let radius: number;
	export let time: number;
	export let hue: number;
	export let label: string;

	$: translateX = initialX;
	$: translateY = initialY;

	afterUpdate(() => {
		if (initialX !== finalX || initialY !== finalY) {
			translateX = finalX;
			translateY = finalY;
		}
	});
</script>

<circle
	style={`transition: transform ${time}s cubic-bezier(0, 0, 1, 1); 
		transform: translate(${translateX}px, ${translateY}px)`}
	cx="0"
	cy="0"
	fill={`hsl(${hue},100%,70%)`}
	r={radius}
>
</circle>
<text
	style={`transition: transform ${time}s cubic-bezier(0, 0, 1, 1); 
		transform: translate(${translateX}px, ${translateY}px)`}
	text-anchor="middle"
	dominant-baseline="middle"
>
	{label}
</text>

<style>
	text {
		font-size: 0.5px;
	}
</style>
