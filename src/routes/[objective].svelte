<!-- <script context="module">
	export async function load({ params, fetch, session, stuff }) {
		const [title, object] = Object.entries(JSON.parse(localStorage.getItem('roadmap')));
		console.log(title, 'title', object);
		return JSON.parse(localStorage.getItem('roadmap'));
	}
</script> -->
<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	const { objective: pageName } = $page.params;
	let loading = true;
	let titleTwo = '';
	let objectTwo = '';
	let milestoneMapped = '';
	onMount(() => {
		const [[title, object]] = Object.entries(JSON.parse(localStorage.getItem('roadmap')));
		titleTwo = title;
		objectTwo = object;
		if (!title || title !== pageName || !object) {
			window.location.href = '/';
		}
		milestoneMapped = Object.keys(object.milestones).map((element, i) => {
			return { name: element, index: i, ...object.milestones[element] };
		});
		loading = false;
		console.log(milestoneMapped, titleTwo, objectTwo);
	});
</script>

<div
	class="max-w-[85ch] w-full mx-auto py-4 sm:py-14 flex-1 relative flex flex-col gap-4 sm:gap-14 "
>
	{#if loading}
		<div class="absolute w-10 h-10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
			<div class="absolute rounded-full inset-0 animate-spin blur-sm">
				<div
					class="top-0 left-0 translate-y-full translate-x-full rounded-full absolute h-2 w-2 bg-lime-300"
				/>
				<div
					class="bottom-0 left-0 -translate-y-full translate-x-full rounded-full absolute h-2 w-2 bg-white"
				/>
				<div
					class="top-0 right-0 translate-y-full -translate-x-full rounded-full absolute h-2 w-2 bg-white"
				/>
				<div
					class="bottom-0 right-0 -translate-y-full -translate-x-full rounded-full absolute h-2 w-2 bg-lime-300"
				/>
			</div>
		</div>
	{:else}
		<h2
			class="text-center font-extralight uppercase sm:text-base bg-lime-400 text-black font-semibold px-4 py-1 sm:py-2 sm:px-8 mx-auto w-fit uppercase "
		>
			 Current Objective: {pageName}
		</h2>
		<div class={'flex flex-col gap-1 duration-300'}>
			<!-- do it so that the initial height is 0 and then it changes to fit -->
			{#each milestoneMapped as { name, description, url, imgUrl, i }}
				<a href={url} class="relative p-[1px] flex flex-col group" target="_blank">
					<div class="inset-0 bg-slate-500 absolute  group-hover:bg-lime-300 duration-300" />
					<img src={imgUrl} alt={name} class="relative " />
					<div
						class="absolute bottom-[1px] left-0 left-[1px] right-[1px] p-3 sm:p-4 pt-14 bg-gradient-to-t from-slate-900 to-transparent"
					>
						<h2 class="uppercase text-base sm:text-lg">{name}</h2>
						<p class="">{description}</p>
					</div>
				</a>
				<!-- <div class="flex flex-col overflow-hidden">
					<h2
						class="relative after:absolute after:w-screen after:right-full after:-translate-y-1/2 after:top-1/2 after:bg-lime-300 after:h-[1px] p-2 bg-inherit w-fit mx-auto before:absolute before:w-screen before:left-full before:-translate-y-1/2 before:top-1/2 before:bg-lime-300 before:h-[1px] font-bold uppercase"
					>
						put icons here
					</h2>
					<p>
						{description}
					</p>
					<div class="group relative p-4">
						<a href={url} target="_blank" class="relative ">
							<img src={imgUrl} alt={name} class="relative z-30" />
							<div class="-inset-[1px] bg-lime-300 absolute z-10 opacity-50 group-hover:opacity-100 duration-300" />
						</a>
					</div>
				</div> -->
			{/each}
		</div>
	{/if}
	<a href='/'
		class=" text-slate-300 hover:text-lime-300 px-8 py-2 sm:px-10 sm:py-4 text-xl mt-4 sm:text-3xl duration-300 cursor-pointer w-fit mx-auto relative group relative"
	>
		<div
			class="inset-0 border-slate-300 opacity-40 group-hover:opacity-0 duration-300 border border-solid absolute"
		/>
		<p>COMPLETE</p>
		<div
			class=" absolute origin-left bg-lime-300 duration-300 top-0 w-full h-[1px] scale-x-0 left-0 group-hover:scale-x-100 "
		/>
		<div
			class="absolute origin-right bg-lime-300 duration-300 bottom-0 w-full h-[1px] scale-x-0 left-0 group-hover:scale-x-100"
		/>
		<div
			class=" absolute origin-top bg-lime-300 duration-300 left-0 h-full w-[1px] scale-y-0 top-0 group-hover:scale-y-100"
		/>
		<div
			class=" absolute origin-bottom bg-lime-300 duration-300 right-0 h-full w-[1px] scale-y-0 top-0 group-hover:scale-y-100"
		/>
	</a>
</div>

<style>
	.outlined {
		-webkit-text-fill-color: transparent;
		-webkit-text-stroke: 1px greenyellow;
	}
</style>
