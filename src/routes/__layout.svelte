<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<svelte:head>
	<script type="text/javascript">
		(function (c, l, a, r, i, t, y) {
			c[a] =
				c[a] ||
				function () {
					(c[a].q = c[a].q || []).push(arguments);
				};
			t = l.createElement(r);
			t.async = 1;
			t.src = 'https://www.clarity.ms/tag/' + i;
			y = l.getElementsByTagName(r)[0];
			y.parentNode.insertBefore(t, y);
		})(window, document, 'clarity', 'script', 'hxtwkqlu8x');
	</script>
	<title>Web Developer Roadmap</title>
	<meta
		name="description"
		content="Learn to Code for free and land a developer job by completing this 2023 Self-Taught Web Developer Roadmap. The Roadmap teaches all the latest and greatest frameworks, languages & technology in a logical and achievable sequence, and then helps you prepare yourself for job interviews, and gives you all the best tips on how to land a Developer role. "
	/>
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
