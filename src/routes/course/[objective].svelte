<!-- <script context="module">
	export async function load({ params, fetch, session, stuff }) {
		const [title, object] = Object.entries(JSON.parse(localStorage.getItem('roadmap')));
		console.log(title, 'title', object);
		return JSON.parse(localStorage.getItem('roadmap'));
	}
</script> -->
<script>
	import userName from '../../store';
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
			return { name: element, index: i, ...object.milestones[element], title };
		});
		loading = false;
	});
</script>

<div
	class="max-w-[85ch] w-full mx-auto py-4 sm:py-10 min-h-fit flex-1 relative flex flex-col gap-4 sm:gap-10 "
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
		<div
			class="text-center flex flex-col sm:gap-1 font-extralight sm:text-2xl text-white font-semibold px-4 sm:px-8 mx-auto w-fit "
		>
			<h2>Current Objective:</h2>
			<h1 class="outlined text-2xl sm:text-4xl">{pageName}</h1>
		</div>
		<div class={'flex flex-col gap-1 duration-300'}>
			<!-- do it so that the initial height is 0 and then it changes to fit -->
			{#each milestoneMapped as { name, description, url, imgUrl, i, title, lowResImg }}
				<a href={url} class="relative p-[1px]  flex flex-col group" target="_blank">
					{#if $userName.progress?.[title] && $userName.progress[title].includes(name)}
						<div class="absolute inset-[1px] z-50 bg-gray-900 opacity-80" />
						<div class="z-[100] absolute inset-0 grid place-items-center">
							<h1 class="uppercase bg-slate-900 text-4xl px-10 py-4">Complete</h1>
						</div>
					{/if}

					<div class="inset-0 bg-slate-500 absolute  group-hover:bg-cyan-300 duration-300" />
					<img src={imgUrl} alt={name} class="relative " />
					<div
						class="sm:absolute relative bottom-0 sm:bottom-[1px] left-0 sm:left-[1px] right-0 sm:right-[1px] p-3 sm:p-4 sm:pt-10 sm:pt-16 bg-gradient-to-t from-slate-900 to-transparent"
					>
						<div
							class="absolute inset-0 bg-gradient-to-t sm:from-slate-900 sm:to-transparent from-gray-900 to-gray-900"
						/>
						<h2 class="uppercase relative text-base sm:text-xl text-shadoww z-20">{name}</h2>
						<p class="text-shadoww z-20 relative">{description}</p>
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
	<a
		href="/"
		class=" text-white hover:text-cyan-300 px-8 py-2 sm:px-10 sm:py-4 text-xl mt-4 sm:text-3xl duration-300 cursor-pointer w-fit mx-auto relative group relative"
	>
		<div
			class="inset-0 border-white group-hover:opacity-0 duration-300 border border-solid absolute"
		/>
		<h1>GRADUATE</h1>
		<div
			class=" absolute origin-left bg-cyan-300 duration-300 top-0 w-full h-[1px] scale-x-0 left-0 group-hover:scale-x-100 "
		/>
		<div
			class="absolute origin-right bg-cyan-300 duration-300 bottom-0 w-full h-[1px] scale-x-0 left-0 group-hover:scale-x-100"
		/>
		<div
			class=" absolute origin-top bg-cyan-300 duration-300 left-0 h-full w-[1px] scale-y-0 top-0 group-hover:scale-y-100"
		/>
		<div
			class=" absolute origin-bottom bg-cyan-300 duration-300 right-0 h-full w-[1px] scale-y-0 top-0 group-hover:scale-y-100"
		/>
	</a>
</div>

<style>
	.outlined {
		-webkit-text-fill-color: transparent;
		-webkit-text-stroke: 0.5px cyan;
	}

	@media (min-width: 640px) {
		.outlined {
			-webkit-text-stroke: 1px cyan;
		}
	}

	.text-shadoww {
		text-shadow: 0 0 1px transparent, 0 1px 2px rgb(0 0 0 / 80%);
	}
</style>
