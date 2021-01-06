<script>
    import { onMount } from "svelte";

    import {
        Grid,
        Row,
        Column,
        ContentSwitcher,
        Switch,
        AspectRatio,
    } from "carbon-components-svelte";

    let selectedIndex;

    let contents = [];
    onMount(async () => {
        const res = await fetch("/data/about.json");
        contents = await res.json();
    });

    $: selected = contents[selectedIndex];
</script>

<style>
    p {
        font-size: 1.7rem;
    }
</style>

<ContentSwitcher bind:selectedIndex>
    {#each contents as content}
        <Switch text={content.title} />
    {/each}
</ContentSwitcher>

{#if selected}
    <Grid padding>
        <Row>
            <Column md={8} lg={{ span: 4, offset: 3 }}>
                <AspectRatio ratio="1x1">
                    <p>{selected.title}</p>
                </AspectRatio>
            </Column>
            <Column md={8} lg={8}>
                <p>{selected.lines.join('')}</p>
            </Column>
        </Row>
    </Grid>
{/if}
