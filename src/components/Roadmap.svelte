<script>
	import userName from '../store';
	import ObjectCard from './ObjectCard.svelte';
	import ProgressBar from './ProgressBar.svelte';

	const objectives = {
		'html | CSS | GIT': {
			description:
				"HTML, CSS & GIT are at the foundation of most web development projects - so it's the perfect place to start.",
			milestones: {
				'HTML Crash Course': {
					url: 'https://www.youtube.com/watch?v=-RLKMY-cLYg&t=168s',
					imgUrl: 'https://i.imgur.com/9RDSnax.jpg',
					imgIcon: 'https://i.imgur.com/9RDSnax.jpg',
					description:
						'what a cool way to learn javascript. it teaches you everything that you need to know'
				},
				'CSS Crash Course': {
					url: 'https://www.youtube.com/watch?v=GSOVTLajpac',
					imgUrl: 'https://i3.ytimg.com/vi/GSOVTLajpac/maxresdefault.jpg',
					imgIcon: 'https://i3.ytimg.com/vi/GSOVTLajpac/maxresdefault.jpg',
					description:
						'what a cool way to learn javascript. it teaches you everything that you need to know'
				},
				'The Odin Project': {
					url: 'https://www.theodinproject.com/paths/foundations/courses/foundations',
					imgUrl:
						'https://www.theodinproject.com/assets/og-logo-022832d4cefeec1d5266237be260192f5980f9bcbf1c9ca151b358f0ce1fd2df.png',
					imgIcon:
						'data:image/jpeg;base64,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',
					description:
						'HTML - A glorified word document with extra steps so that people all around the globe can see your internet creations.'
				},
				'the internet is hard': {
					url: 'https://www.internetingishard.com/html-and-css/',
					imgUrl: 'https://i.imgur.com/Rqqdjlf.png',
					imgIcon: 'https://www.internetingishard.com/img/interneting-is-hard-logo-97b225.svg',
					description:
						'Friendly and concise explanations for all the foundational interweb material you may desire.'
				}
			}
		},
		javascript: {
			description: 'The #1 most popular coding language and the backbone of the interwebs.',
			milestones: {
				FreeCodeCamp: {
					url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
					imgUrl: 'https://i.imgur.com/jQgRQIC.png',
					imgIcon:
						'data:image/png;base64,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',
					description:
						'Complete a thorough and interactive course that provides you with a certificate at the end!'
				},
				'JavaScript Crash Course': {
					url: 'https://www.youtube.com/watch?v=PkZNo7MFNFg',
					imgUrl: 'https://img.youtube.com/vi/PkZNo7MFNFg/maxresdefault.jpg',
					imgIcon: 'data:image/png;base64,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',
					description:
						'Consolidate your skills by following along with a youtube tutorial.'
				}
			}
		},
		'React & Next.js': {
			description: 'Frontend frameworks are essential to optimizing your developer experience & capabilities - Next.js & React are two of the most popular current web frameworks in 2022.',
			milestones: {
				'React Crash Course': {
					url: 'https://youtu.be/tYcjZomsFkY',
					imgUrl: 'https://i3.ytimg.com/vi/tYcjZomsFkY/maxresdefault.jpg',
					imgIcon: 'https://avatars.githubusercontent.com/u/6412038?s=280&v=4',

					description:
						'A full introductory crash course on React - finishing off by building a React project with an API.'
				},
				'Full Stack Open': {
					url: 'https://fullstackopen.com/en/about',
					imgUrl: 'https://i.imgur.com/kDm2nw4.png',
					imgIcon: 'https://i.imgur.com/kDm2nw4.png',
					description:
						'Consolidate your React skills by completing this comprehesive curriculum.'
				},
				'React Developer Portfolio': {
					url: 'https://youtu.be/Zf_cxEV2vNc',
					imgUrl: 'https://i.imgur.com/MsFlD2I.png',
					imgIcon: 'https://i.imgur.com/MsFlD2I.png',
					description:
						'Build this developer portfolio in React to display all of your amazing projects, and host it live to show prospective employers.'
				},
				'Next.js Crash Course': {
					url: 'https://youtu.be/UzMr7-0FgA0',
					imgUrl: 'https://i3.ytimg.com/vi/UzMr7-0FgA0/maxresdefault.jpg',
					imgIcon: 'data:image/png;base64,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',
					description:
						'Build this developer portfolio in React to display all of your amazing projects, and host it live to show prospective employers.'
				},
				'Next.js Ecommerce Store': {
					url: 'https://youtu.be/rbMvm-CrkOA',
					imgUrl: 'https://i3.ytimg.com/vi/rbMvm-CrkOA/maxresdefault.jpg',
					imgIcon: 'https://media-exp1.licdn.com/dms/image/C560BAQF1NNJs-2xA5g/company-logo_200_200/0/1594068219050?e=2147483647&v=beta&t=v7T4H7LBiBKWV0QHIS-NKzpg3PCAp2HU4ohKSG5uCNI',
					description:
						'Build this E-commerce store with Stripe.js to sell products & subscriptions and handle payment transactions.'
				},
			}
		},
		"Node.js": {
			description: 'The favorite JavaScript backend framework - complimented with Express.js to allow you to build any backend infrastucture of your wildest dreams.',
			milestones: {
				'Node.js Crash Course': {
					url: 'https://youtu.be/tPavCLJp0Cc',
					imgUrl: 'https://i3.ytimg.com/vi/tPavCLJp0Cc/maxresdefault.jpg',
					imgIcon: 'https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png',
					description:
						'Learn the essentials of backend development with Node.js.'
				},
				'Full Stack Open': {
					url: 'https://fullstackopen.com/en/about',
					imgUrl: 'https://i.imgur.com/kDm2nw4.png',
					imgIcon: 'https://i.imgur.com/kDm2nw4.png',
					description:
						'Dive deeper into backend development with Node.js and incorporating it with frontend and database systems.'
				},
				'Stock API Project': {
					url: 'https://youtu.be/37LJxWzjy6g',
					imgUrl: 'https://i3.ytimg.com/vi/37LJxWzjy6g/maxresdefault.jpg',
					imgIcon: 'https://i3.ytimg.com/vi/37LJxWzjy6g/maxresdefault.jpg',
					description:
						'Build and deploy and API endpoint that serves JSON stock data information.'
				},
				'Full Stack Project': {
					url: 'https://youtu.be/qLUTHVf2mF4',
					imgUrl: 'https://i3.ytimg.com/vi/qLUTHVf2mF4/maxresdefault.jpg',
					imgIcon: 'https://i3.ytimg.com/vi/qLUTHVf2mF4/maxresdefault.jpg',
					description:
						'Build a full stack web app with Node.js Firebase HTML & CSS.'
				},
			
			}
		},
		"NoSQL DBs": {
			description: 'Why not learn how to store your data in a glorified JSON database.',
			milestones: {
				'FreeCodeCamp - MongoDB & Mongoose': {
					url: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/mongodb-and-mongoose/install-and-set-up-mongoose',
					imgUrl: 'https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png',
					imgIcon: 'data:image/png;base64,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',

					description:
						'One of the most common NoSQL databases in production environment'
				},
				"Firebase Firestore": {
					url: 'https://youtu.be/QoGl2o9elrc',
					imgUrl: 'https://i3.ytimg.com/vi/QoGl2o9elrc/maxresdefault.jpg',
					imgIcon: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png',
					description:
						'Google\'s Firestore is an amazingly quick and cost effective way to get a live NoSQL database running today.'
				}
			}
		},
		"Relational DBs": {
			description: 'Learning how to maintain a relational database is essential for managing big data applications & much more!',
			milestones: {
				'FreeCodeCamp - Relational Databases': {
					url: 'https://www.freecodecamp.org/learn/relational-database/',
					imgUrl: 'https://i.imgur.com/0AmFayz.png',
					imgIcon: 'data:image/png;base64,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',
					description:
						'From writing bash scripts to coding and populating databases with celestial bodies - there\'s plently to learn.'
				},
				'SQL Crash Course': {
					url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY',
					imgUrl: 'https://i3.ytimg.com/vi/HXV3zeQKqGY/maxresdefault.jpg',
					imgIcon: 'https://user-images.githubusercontent.com/24623425/36042969-f87531d4-0d8a-11e8-9dee-e87ab8c6a9e3.png',
					description:
						'Lean all the basic SQL commands for managing big data fast and efficiently.'
				}
			}
		},
	};
</script>

<ProgressBar numObjectives={Object.keys(objectives).length} numCompleted={0} />

<div class="flex flex-col gap-4">

	{#each Object.keys(objectives) as objectKey}
	<ObjectCard object={objectives[objectKey]} title={objectKey} complete={true} />
	<!-- <div class="h-5 sm:h-10 w-1 bg-slate-300"></div> -->
	{/each}
</div>
