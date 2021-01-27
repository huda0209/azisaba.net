<script>
	import Header from "../components/Header.svelte";
	import { onMount } from "svelte";
	import { Content } from "carbon-components-svelte";

	export let segment;

	let visible;
	onMount(() => {
		visible = true;
	});
</script>

<Header {segment} />

{#if visible}
	<Content>
		<slot />
	</Content>
{/if}
