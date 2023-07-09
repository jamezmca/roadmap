<script>
	import EnterName from '../components/EnterName.svelte';
	import Roadmap from '../components/Roadmap.svelte';
	import userName from '../store';
</script>

{#if $userName.name === ''}
	<EnterName />
{:else}
	<div id="roadmap" class="w-full max-w-[100ch] flex flex-col mx-auto px-4">
		<h2
			class="text-center uppercase text-lg sm:text-2xl mx-auto w-fit py-4 uppercase sm:py-6 "
		>
			Welcome {$userName.name}
		</h2>
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
