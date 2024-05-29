<script lang="ts">
	export let label: string;
	export let validator: (n: number) => boolean = () => true;
	export let value: number;
	export let update: (n: number) => void;

	let currentString = '' + value;
	$: currentString = '' + value;

	function handleInput() {
		const newVal = parseFloat(currentString);

		if (!isNaN(newVal) && validator(newVal)) {
			value = newVal;
			update(value);
		}
	}
</script>

<div class="form-group">
	<label>
		{label}:
		<input
			type="text"
			bind:value={currentString}
			on:input={handleInput}
			placeholder="Enter a number"
		/>
	</label>
</div>

<style>
	.form-group {
		display: flex;
		align-items: center;
		margin: 10px 0;
	}

	.form-group label {
		margin-right: 10px;
		width: 100px;
	}

	.form-group input {
		flex: 1;
		padding: 5px;
		font-size: 16px;
	}
</style>
