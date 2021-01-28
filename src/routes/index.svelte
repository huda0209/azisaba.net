<script>
	import bg1 from "images/2019-04-01_14.13.09.png";
	import bg2 from "images/2019-07-04_19.43.33.png";
	import bg3 from "images/2020-06-13_00.17.20.png";
	import bg4 from "images/2020-08-14_01.06.04.png";
	import bg5 from "images/2020-08-30_21.41.00.png";
	import bg6 from "images/2020-11-01_06.01.22.png";
	import { fade, blur, fly } from "svelte/transition";

	const bgAll = [bg1, bg2, bg3, bg4, bg5, bg6];
	$: bg = bgAll[Math.floor(Math.random() * bgAll.length)];
</script>

<style>
	section {
		height: calc(100vh - var(--cds-layout-04));
	}

	.abs {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.bg {
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.title {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.title-inner {
		text-align: center;
		text-shadow: 2px 2px 8px black;
		color: rgba(255, 255, 255, 0.9);
	}
</style>

<svelte:head>
	<title>アジ鯖公式ホームページ</title>
</svelte:head>

<section class="abs" in:fade>
	<div
		class="abs bg"
		style="background-image: url({bg})"
		in:blur={{ duration: 5000, opacity: 1 }}
	/>
	<div class="abs title">
		<div class="title-inner">
			<h1 in:fly={{ delay: 400, y: 20 }}>ようこそ</h1>
			<p in:fly={{ delay: 800, y: 20 }}>アジ鯖、たのしい。</p>
		</div>
	</div>
</section>
