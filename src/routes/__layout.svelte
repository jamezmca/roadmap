<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<svelte:head>
	<title>Webdev Roadmap</title>
	<meta name="description" content="Learn to code for free by completing this 2022 self-taught web developer roadmap.">
</svelte:head>
<div id="doc-body" class="min-h-screen flex flex-col text-xs sm:text-sm">
	<Header />

	<main class="flex-1 flex flex-col">
		<slot />
	</main>

	<Footer />
</div>

<style>
#doc-body {
	background: #00172b;
	color: white;
}
</style>