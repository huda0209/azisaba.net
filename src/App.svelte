<script>
	import Header from "./components/Header.svelte";

	import Top from "./components/Top.svelte";
	import About from "./components/About.svelte";
	import Join from "./components/Join.svelte";

	import { onMount } from "svelte";
	import { scale, blur, fly } from "svelte/transition";

	import { Content } from "carbon-components-svelte";

	let visible;
	onMount(() => {
		visible = true;
	});
</script>

<style>
	section {
		margin-bottom: 3rem;
	}
</style>

<Header />

<Content>
	{#if visible}
		<section in:scale={{ start: 1.02 }}>
			<Top />
		</section>
		<section in:blur>
			<About />
		</section>
		<section in:fly={{ y: -20 }}>
			<Join />
		</section>
	{/if}
</Content>
