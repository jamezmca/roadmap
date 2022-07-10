<script>
	import EnterName from '../components/EnterName.svelte';
	import Roadmap from '../components/Roadmap.svelte';
	import userName from '../store';
</script>

{#if $userName === ''}
	<EnterName />
{:else}
	<div id="roadmap" class="w-full max-w-[85ch] flex flex-col mx-auto px-4">
		<h1 class="text-center outlined uppercase text-lg sm:text-2xl font-medium mx-auto w-fit py-4 uppercase sm:py-6 ">
			Welcome {$userName}
		</h1>
		<Roadmap />
	</div>
{/if}

<style>
	.outlined {
		-webkit-text-fill-color: transparent;
		-webkit-text-stroke: 1px greenyellow;
	}

	.shadowed {
		text-shadow: 2px 2px 0 greenyellow;
	}
</style>