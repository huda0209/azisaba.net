<script>
    import { onMount } from "svelte";

    const bgArray = [
        "https://i.azisaba.net/albums/2020-11-01_06.01.22.png",
        "https://i.azisaba.net/albums/2020-08-14_01.06.04.png",
        "https://i.azisaba.net/albums/2020-08-30_21.41.00.png",
        "https://i.azisaba.net/albums/2019-07-04_19.43.33.png",
        "https://i.azisaba.net/albums/2019-04-01_14.13.09.png",
        "https://i.azisaba.net/albums/2020-06-13_00.17.20.png",
    ];

    onMount(async () => {
        const bg =
            "url(https://images.weserv.nl/?url=" +
            bgArray[Math.floor(Math.random() * bgArray.length)] +
            "&w=1280&h=720&output=webp";
        document.getElementsByClassName("cover")[0].style.backgroundImage = bg;
    });
</script>

<style>
    section {
        height: 80%;

        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    section > div {
        height: 100%;

        animation-name: blur;
        animation-duration: 3s;
        animation-fill-mode: forwards;
    }

    @keyframes blur {
        from {
            backdrop-filter: blur(1px);
        }
        to {
            backdrop-filter: blur(6px);
        }
    }

    .title {
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .title > * {
        color: white;
        text-shadow: 2px 2px 3px black;

        opacity: 0;
        animation-name: show;
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }

    .title > h1 {
        font-size: 45px;
    }

    .title > p {
        animation-delay: 0.6s;
    }

    @keyframes show {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>

<section class="cover">
    <div>
        <div class="title">
            <h1>ようこそ</h1>
            <p>アジ鯖、たのしい。</p>
        </div>
    </div>
</section>
