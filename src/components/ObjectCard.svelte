<script>
	export let object;
	export let complete;
	export let title;
	// console.log(object, complete);
	let displayContent = false;

	const milestoneMapped = Object.keys(object.milestones).map((element) => {
		return { name: element, ...object.milestones[element] };
	});
	console.log(milestoneMapped);
	//make sure it has a glowing shadow
	console.log(object);
	function updateDisplayContent() {
		console.log('before', displayContent);
		displayContent = !displayContent;
		console.log(displayContent);
	}
</script>

<div
	id={title}
	on:click={updateDisplayContent}
	class={' duration-300 relative mb-4 cursor-pointer p-4 after:inset-0 after:absolute after:duration-300 after:w-2/3 after:h-1/2 after:top-0 after:left-0 after:border-l-[1px] after:border-t-[1px] after:border-slate-700 after:border-solid hover:after:h-full hover:after:w-full hover:after:border-lime-300 before:absolute before:duration-300 before:w-2/3 before:h-1/2 before:bottom-0 before:right-0 before:border-r-[1px] before:border-b-[1px] before:border-slate-700 before:border-solid hover:before:h-full hover:before:w-full hover:before:border-lime-300 group '}
>
	<!-- <span class="absolute w-2/3 h-[1px] bg-lime-300 duration-300 left-0 top-0"></span>
    <span class="absolute w-2/3 h-[1px] bg-lime-300 duration-300 right-0 bottom-0"></span>
    <span class="absolute w-[1px] bg-lime-300 right-0 duration-300 bottom-0 h-1/2"></span>
    <span class="absolute w-[1px] bg-lime-300 left-0 duration-300 top-0 h-1/2"></span> -->
	<h1 class="text-center uppercase font-light text-lg sm:text-3xl ">{title}</h1>
	{#if !displayContent}
		<div class="flex items-center justify-center  relative">THIS HAS ALL THE PROGRESSIONS</div>
	{:else}
		<div class={'flex flex-col opacity-0 duration-300 group-hover:opacity-100 growing'}>
			do it so that the initial height is 0 and then it changes to fit
			{#each milestoneMapped as { name, description, url, imgUrl }}
				<div>
					<h2>
						{name}
					</h2>
					<p>
						{description}
					</p>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.dim-shadow {
		box-shadow: 0 0 4px 1px hsla(83.65, 100%, 59.22%, 0.3);
	}

	.bright-shadow {
		box-shadow: 0 0 4px 1px greenyellow;
	}

	.outlined {
		-webkit-text-fill-color: transparent;
		-webkit-text-stroke: 1px greenyellow;
	}

	.growing {
		animation: growing 1s ease-in-out forwards;
	}

	@keyframes growing {
		0% {
            /* transform: translateY(-100%); */
            opacity: 0;
		}
        100% {
            /* transform: translateY(0); */
            opacity: 1;
        }
	}
</style>
