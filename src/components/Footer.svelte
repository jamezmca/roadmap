<script>
	import { createClient } from '@supabase/supabase-js';
	let animation = false;
	function copied() {
		navigator.clipboard.writeText('https://www.roadmap.smoljames.com');
		animation = true;
		// const copyElement = document.getElementById('copy');
		setTimeout(function () {
			animation = false;
		}, 2000);
	}

	//include subscriber email
	let subError = null;
	let subSuccess = null;
	let subscriberEmail = '';
	const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
	const supabaseAPI_KEY = import.meta.env.VITE_SUPABASE_API_KEY;
	async function sub() {
		subError = null;
		if (!subscriberEmail) {
			return (subError = 'Please enter an email');
		}
		const supabase = createClient(supabaseUrl, supabaseAPI_KEY);
		const { error } = await supabase
			.from('Subscribers')
			.insert({ email: subscriberEmail }, { returning: 'minimal' });
		if (error) {
			console.log(error);
			subError = error?.message;
		} else {
			subSuccess = true;
			// localStorage.setItem('')
		}
	}
</script>

<div
	class="flex flex-col gap-3 justify-center relative mt-8 items-center py-8 text-lg sm:text-2xl sm:py-10 px-4 text-white"
>
	<h2 class="text-sm text-center">
		Interested in a WebDev Course & other updates - join the mailing list!
	</h2>
	{#if subError}<p class="text-rose-400 text-xs text-center">{subError} -_-</p> {/if}
	{#if subSuccess}<p class="text-green-400 text-xs text-center">Thanks for subscribing!</p>
	{:else}
		<div
			class="flex w-[400px] max-w-full items-stretch text-xs border-[#003C5B] border border-solid focus-within:border-cyan-300"
		>
			<input
				bind:value={subscriberEmail}
				class=" p-2 flex-1  outline-none bg-transparent"
				type="text"
				placeholder="Email"
			/>
			<button on:click={sub} class="bg-[#003C5B] px-3 text-cyan-300 hover:bg-transparent"
				>Subscribe</button
			>
		</div>
	{/if}

	<!-- <iframe
		src="https://smoljames.substack.com/embed"
		width="100%"
		height='80px'
		style="background:transparent;color:white;transform:scale(0.75);;"
		scrolling="no"
	/> -->
	<h2 class="text-xs underline">Join The Guild</h2>
	<div
		class="absolute top-0 left-1/2 w-[1000px] max-w-[80%] -translate-x-1/2 h-[1px] bg-slate-700"
	/>
	<div class="flex flex-col sm:flex-row sm:gap-x-5 text-2xl sm:text-3xl">
		<div class="flex gap-x-5 items-center justify-center mx-auto">
			<a href="https://www.youtube.com/c/Smoljames" target="_blank" rel="noreferrer"
				><i class="fa-brands fa-youtube duration-300 hover:text-cyan-300 cursor-pointer" /></a
			>
			<a href="https://github.com/jamezmca" target="_blank" rel="noreferrer"
				><i class="fa-brands fa-github duration-300 hover:text-cyan-300 cursor-pointer" /></a
			>
			<a href="https://discord.gg/BYr6gujs4k" target="_blank" rel="noreferrer"
				><i class="fa-brands fa-discord duration-300 hover:text-cyan-300 cursor-pointer" /></a
			>
			<a href="https://twitter.com/_Smoljames" target="_blank" rel="noreferrer"
				><i class="fa-brands fa-twitter duration-300 hover:text-cyan-300 cursor-pointer" /></a
			>
		</div>
		<div class="flex gap-x-5 items-center mx-auto">
			<a href="https://www.reddit.com/user/smoljames" target="_blank" rel="noreferrer"
				><i class="fa-brands fa-reddit duration-300 hover:text-cyan-300 cursor-pointer" /></a
			>
			<a href="https://medium.com/@_Smoljames" target="_blank" rel="noreferrer"
				><i class="fa-brands fa-medium duration-300 hover:text-cyan-300 cursor-pointer" /></a
			>
			<a href="https://www.linkedin.com/in/jamezmcarthur/" target="_blank" rel="noreferrer"
				><i class="fa-brands fa-linkedin duration-300 hover:text-cyan-300 cursor-pointer" /></a
			>
		</div>
	</div>
	<div class="flex flex-col sm:flex-row items-center text-xs gap-4 text-center">
		<div
			on:click={copied}
			on:keydown={() => {}}
			class="flex items-center relative justify-center gap-4 cursor-pointer group  duration-150   text-white group "
		>
			<div
				class={'absolute left-3/4 pointer-events-none bottom-[120%] text-xs text-white select-none whitespace-nowrap ' +
					(animation ? 'animation' : 'opacity-0')}
			>
				Link copied!
			</div>
			<i class="fa-solid fa-share text-sm" />
			<h2 class="group-hover:underline">Share with your friends</h2>
			<!-- <i class="fa-solid fa-share-nodes"></i> -->
		</div>
		<div class="h-[14px] hidden sm:flex w-[1px] bg-white" />
		<a class=" group flex items-center gap-4" href="https://smoljames.com"
			><h2 class="group-hover:underline">Back to smoljames.com</h2>
			<i class="fa-solid fa-house" /></a
		>
	</div>
</div>

<style>
	.animation {
		animation: anima 2s;
	}

	@keyframes anima {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
</style>
