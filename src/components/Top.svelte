<script>
    import { onMount } from "svelte";
    import { blur, fly } from "svelte/transition";

    import { Button } from "carbon-components-svelte";

    import Renew20 from "carbon-icons-svelte/lib/Renew20";
    import CenterToFit20 from "carbon-icons-svelte/lib/CenterToFit20";

    const photos = [
        "https://i.azisaba.net/albums/2020-11-01_06.01.22.png",
        "https://i.azisaba.net/albums/2020-08-14_01.06.04.png",
        "https://i.azisaba.net/albums/2020-08-30_21.41.00.png",
        "https://i.azisaba.net/albums/2019-07-04_19.43.33.png",
        "https://i.azisaba.net/albums/2019-04-01_14.13.09.png",
        "https://i.azisaba.net/albums/2020-06-13_00.17.20.png",
    ];

    function randomPhoto() {
        return photos[Math.floor(Math.random() * photos.length)];
    }

    let bg = randomPhoto();
    $: bgCover = `https://images.weserv.nl/?url=${bg}&w=768&output=webp`;

    let visible;
    onMount(() => {
        visible = true;
    });
</script>

<style>
    section {
        height: 35rem;
        position: relative;
    }

    .bg,
    .title {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .bg {
        z-index: -1;

        background-size: cover;
        background-position: center;
    }

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        color: white;
        text-shadow: 0.1rem 0.1rem 0.2rem black;
    }

    .title > h1 {
        margin-bottom: 2rem;
    }

    .tool {
        position: absolute;
        bottom: 0;
        right: 0;
    }
</style>

{#if visible}
    <section>
        <div
            class="bg"
            style="background-image: url({bgCover})"
            in:blur={{ duration: 5000, opacity: 1 }} />

        <div class="title">
            <h1 in:fly={{ delay: 200, y: 20 }}>ようこそ</h1>
            <span in:fly={{ delay: 600, y: 20 }}>アジ鯖、たのしい。</span>
        </div>

        <div class="tool">
            <Button
                hasIconOnly
                icon={Renew20}
                iconDescription="別の画像"
                tooltipPosition="bottom"
                tooltipAlignment="center"
                kind="secondary"
                on:click={() => {
                    bg = randomPhoto();
                }} />
            <Button
                hasIconOnly
                icon={CenterToFit20}
                iconDescription="全画面"
                tooltipPosition="bottom"
                tooltipAlignment="center"
                on:click={() => {
                    window.open(bg, '_blank');
                }} />
        </div>
    </section>
{/if}
