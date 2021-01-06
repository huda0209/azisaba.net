<script>
    import { onMount } from "svelte";

    import {
        ProgressIndicator,
        ProgressStep,
        Button,
        Grid,
        Row,
        Column,
        Tile,
        AspectRatio,
    } from "carbon-components-svelte";

    let steps = [];
    onMount(async () => {
        const res = await fetch("/data/joinstep.json");
        steps = await res.json();
    });

    let currentIndex = 0;
    let completed = [];

    function next() {
        if (!completed[currentIndex]) {
            completed[currentIndex] = true;
        }
        currentIndex = (currentIndex + 1) % steps.length;
    }

    $: step = steps[currentIndex];
</script>

<style>
    p {
        font-size: 1.3rem;
    }

    img {
        max-width: 100%;
        max-height: 100%;
    }

    .image {
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

<Tile>
    <ProgressIndicator spaceEqually bind:currentIndex style="flex-wrap: wrap;">
        {#each steps as step, i}
            <ProgressStep
                label="{i + 1}. {step.title}"
                bind:complete={completed[i]} />
        {/each}
    </ProgressIndicator>
    {#if step}
        <Grid padding>
            <Row>
                <Column md={3}>
                    <p><u>{step.title}</u></p>
                    {#each step.texts as text}
                        <p>{text}</p>
                    {/each}
                </Column>
                <Column md={5}>
                    <AspectRatio>
                        <div class="image">
                            <img src={step.image} alt={step.title} />
                        </div>
                    </AspectRatio>
                </Column>
            </Row>
        </Grid>
    {/if}
    <Button on:click={() => next()}>次へ</Button>
</Tile>
