<script>
    import { Button } from "carbon-components-svelte";

    import Renew20 from "carbon-icons-svelte/lib/Renew20";
    import CenterToFit20 from "carbon-icons-svelte/lib/CenterToFit20";

    const backgrounds = [
        "https://i.azisaba.net/albums/2020-11-01_06.01.22.png",
        "https://i.azisaba.net/albums/2020-08-14_01.06.04.png",
        "https://i.azisaba.net/albums/2020-08-30_21.41.00.png",
        "https://i.azisaba.net/albums/2019-07-04_19.43.33.png",
        "https://i.azisaba.net/albums/2019-04-01_14.13.09.png",
        "https://i.azisaba.net/albums/2020-06-13_00.17.20.png",
    ];
    function randomBackground() {
        return backgrounds[Math.floor(Math.random() * backgrounds.length)];
    }
    let bg = randomBackground();
</script>

<style>
    section {
        height: 35rem;
        position: relative;
    }

    .bg {
        width: 100%;
        height: 100%;

        position: absolute;
        z-index: -2;

        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .bg--filter {
        width: 100%;
        height: 100%;

        position: absolute;
        z-index: -1;

        animation-name: bg--filter--blur;
        animation-duration: 16s;
    }

    @keyframes bg--filter--blur {
        20% {
            backdrop-filter: blur(0.3rem);
        }
    }

    .tool {
        margin: 1rem;

        position: absolute;
        right: 0;
        bottom: 0;
    }

    .title {
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .title > * {
        color: white;
        text-shadow: 0.05em 0.05em 0.2rem black;
        opacity: 0;

        animation-name: title--show;
        animation-duration: 2s;
        animation-fill-mode: forwards;
    }

    .title > span {
        margin-top: 3rem;
        animation-delay: 0.6s;
    }

    @keyframes title--show {
        from {
            transform: translateY(1em);
        }
        to {
            opacity: 1;
        }
    }
</style>

<section>
    <div
        class="bg"
        style="background-image: url(https://images.weserv.nl/?url={bg}&w=768&output=webp);" />
    <div class="bg--filter" />

    <div class="tool">
        <Button
            hasIconOnly
            icon={Renew20}
            iconDescription="別の画像"
            tooltipPosition="bottom"
            tooltipAlignment="center"
            kind="secondary"
            on:click={() => {
                bg = randomBackground();
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

    <div class="title">
        <h1>ようこそ</h1>
        <span>アジ鯖、たのしい。</span>
    </div>
</section>
