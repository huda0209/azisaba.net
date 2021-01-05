<script>
	import Header from "./components/Header.svelte";
	import Top from "./components/Top.svelte";
	import About from "./components/About.svelte";

	import { Content } from "carbon-components-svelte";
</script>

<Header />
<Content style="padding: 0;">
	<Top />
	<About />
</Content>
