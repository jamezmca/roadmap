<script>
	import userName from '../store';
	let inputValue = '';

	function saveName() {
		if (!inputValue) {
			return;
		}

		$userName = inputValue;
	}
</script>

<div class="flex-1 grid place-items-center p-4">
	<div
		class="mx-auto w-full max-w-[65ch] duration-300 flex-col flex items-stretch uppercase relative overflow-hidden"
	>
		<input
			type="text"
			class="flex-1 outline-none bg-slate-700 text-white text-center p-4 text-base sm:text-2xl"
			bind:value={inputValue}
			placeholder="Enter Name"
		/>
		<div
			on:click={saveName}
			class="grid place-items-center p-4 text-white  cursor-pointer relative overflow-hidden hover:text-cyan-300 duration-300 sm:text-base fullLoad"
		>
			<h1 class="z-10 text-xl">BEGIN</h1>
		</div>
	</div>
</div>

<style>
	.fullLoad {
		animation: fullyloaded 2s ease-out forwards;
	}
	@keyframes fullyloaded {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 100;
		}
	}

</style>
