<script>
	import { blur } from "svelte/transition";
	import { Link } from "carbon-components-svelte";
	import Archive32 from "carbon-icons-svelte/lib/Archive32";
	import Rocket32 from "carbon-icons-svelte/lib/Rocket32";
	import MagicWandFilled32 from "carbon-icons-svelte/lib/MagicWandFilled32";
</script>

<svelte:head>
	<title>アジ鯖とは？</title>
</svelte:head>

<h1>アジ鯖とは？</h1>

<p>アジ鯖は、Java版のマインクラフトサーバーです。</p>

<section in:blur={{ delay: 400 }}>
	<h2>
		<Archive32
			style="margin-right: var(--cds-spacing-03);"
		/>サーバーについて
	</h2>

	<p>
		<Link href="https://www.minecraft.net/ja-jp/" target="_blank"
			>マインクラフト</Link
		>のゲームにはシングルプレイとマルチプレイの二種類があります。
	</p>
	<p>マルチプレイには参加するためのサーバーが必要です。</p>
	<p>
		そして、サーバーにたくさんのプレイヤーが参加して、同じワールドで遊べます！
	</p>
	<p>ちなみに、サーバーのことを省略して「鯖」と呼びます。</p>
</section>

<section in:blur={{ delay: 800 }}>
	<h2>
		<Rocket32 style="margin-right: var(--cds-spacing-03);" />
		アジ鯖の始まり
	</h2>

	<p>
		アジ鯖は、鯖主の<Link
			href="https://twitter.com/azi_blueline"
			target="_blank">アジ氏</Link
		>とネット上で集まった有志による数名のチームによって2017年に発足されました。
	</p>
	<p>
		数年前に存在した同じ名前である「鯵鯖」というサーバーとは全くの無関係です。
	</p>
</section>

<section in:blur={{ delay: 1200 }}>
	<h2>
		<MagicWandFilled32 style="margin-right: var(--cds-spacing-03);" />
		特徴
	</h2>

	<p>アジ鯖の中には複数の子サーバーがあります。</p>
	<p>
		子サーバーごとに管理が別れているので、様々な世界観のサーバーが<b
			>全て揃っています</b
		>。
	</p>
</section>
