<script>
	import EnterName from '../components/EnterName.svelte';
	import Roadmap from '../components/Roadmap.svelte';
    import userName from '../store'
	
</script>

{#if $userName === ''}
	<EnterName />
{:else}
	<Roadmap />
{/if}
