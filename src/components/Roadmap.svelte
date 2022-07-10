<script>
	import userName from '../store';
	import ObjectCard from './ObjectCard.svelte';
	import ProgressBar from './ProgressBar.svelte';

	const objectives = {
		html: {
			description: '',
			milestones: {
				'the internet is hard': {
					url: 'https://www.internetingishard.com/html-and-css/',
					imgUrl: 'https://www.google.com',
					description:
						'what a cool way to learn javascript. it teaches you everything that you need to know'
				},
				wootube: {
					url: 'https://www.internetingishard.com/html-and-css/',
					imgUrl: 'https://www.google.com',
					description:
						'what a cool way to learn javascript. it teaches you everything that you need to know'
				}
			}
		},
		javascript: {
			description: '',
			milestones: {
				'the internet is hard': {
					url: 'https://www.internetingishard.com/html-and-css/',
					imgUrl: 'https://www.google.com',
					description:
						'what a cool way to learn javascript. it teaches you everything that you need to know'
				},
				wootube: {
					url: 'https://www.internetingishard.com/html-and-css/',
					imgUrl: 'https://www.google.com',
					description:
						'what a cool way to learn javascript. it teaches you everything that you need to know'
				}
			}
		},
		aaaaaaaa: {
			description: '',
			milestones: {
				'the internet is hard': {
					url: 'https://www.internetingishard.com/html-and-css/',
					imgUrl: 'https://www.google.com',
					description:
						'what a cool way to learn javascript. it teaches you everything that you need to know'
				},
				wootube: {
					url: 'https://www.internetingishard.com/html-and-css/',
					imgUrl: 'https://www.google.com',
					description:
						'what a cool way to learn javascript. it teaches you everything that you need to know'
				}
			}
		},
		javssssssascript: {
			description: '',
			milestones: {
				'the internet is hard': {
					url: 'https://www.internetingishard.com/html-and-css/',
					imgUrl: 'https://www.google.com',
					description:
						'what a cool way to learn javascript. it teaches you everything that you need to know'
				},
				wootube: {
					url: 'https://www.internetingishard.com/html-and-css/',
					imgUrl: 'https://www.google.com',
					description:
						'what a cool way to learn javascript. it teaches you everything that you need to know'
				}
			}
		}
	};
</script>

<ProgressBar numObjectives={Object.keys(objectives).length} numCompleted={0} />

{#each Object.keys(objectives) as objectKey}
	<ObjectCard object={objectives[objectKey]} title={objectKey} complete={true} />
	<!-- <div class="h-5 sm:h-10 w-1 bg-slate-300"></div> -->
{/each}
