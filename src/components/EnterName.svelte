<script>
	let inputValue = '';
</script>

<div class="flex-1 grid place-items-center p-4">
	<div class="mx-auto w-full max-w-[65ch] flex items-stretch uppercase relative overflow-hidden">
		<div class="h-[1px] bg-lime-300 w-full absolute bottom-0 right-full duration-300 loadBar" />
		<div class="h-[1px] bg-lime-300 w-full absolute top-0 right-full duration-300 loadBarAcross" />
		<div class="h-full bg-lime-300 w-[1px] absolute bottom-full left-0 duration-300 loadBarDown" />
		<input
			type="text"
			class="flex-1 outline-none bg-transparent p-4 text-base sm:text-2xl"
			bind:value={inputValue}
			placeholder="Enter Name"
		/>
		<div
			class="grid place-items-center p-4 text-lime-300 border border-solid border-lime-300 font-semibold cursor-pointer relative after:absolute after:w-full after:h-full after:top-0 after:right-full after:bg-lime-300 after:duration-300 hover:after:translate-x-full overflow-hidden hover:text-slate-900 duration-300 sm:text-base fullLoad"
		>
			<p class="z-10">BEGIN</p>
		</div>
	</div>
</div>

<style>
    .fullLoad {
        animation: fullyloaded 2.5s ease-out forwards;
    }
    @keyframes fullyloaded {
        0% {
            opacity: 0;
        }
        60% {
            opacity: 0;
        }
        100% {
            opacity: 100;
        }
    }

	.loadBar {
		animation: loaded 1.5s ease-in forwards;
	}
	@keyframes loaded {
        33% {
            transform: translateX(0%);
        }
		100% {
			transform: translateX(100%);
		}
	}
	.loadBarDown {
		animation: loadedDown 0.5s linear forwards;
	}
	@keyframes loadedDown {
		100% {
			transform: translateY(100%);
		}
	}
	.loadBarAcross {
		animation: loadedAcross 1.5s ease-in forwards;
	}
	@keyframes loadedAcross {
		100% {
			transform: translateX(100%);
		}
	}
</style>
