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
			class="flex-1 outline-none bg-slate-700 text-center p-4 text-base sm:text-2xl"
			bind:value={inputValue}
			placeholder="Enter Name"
		/>
		<div
			on:click={saveName}
			class="grid place-items-center p-4 text-lime-300 border-solid border-lime-300  cursor-pointer relative after:absolute after:w-full after:h-full after:top-0 after:right-full after:bg-lime-300 after:duration-300 hover:after:translate-x-full overflow-hidden hover:text-slate-900 hover:font-medium duration-300 sm:text-base fullLoad"
		>
			<p class="z-10">BEGIN</p>
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
