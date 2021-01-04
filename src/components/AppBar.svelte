<script>
    import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
    import IconButton from "@smui/icon-button";
    import Icon from "svelte-awesome";
    import {
        youtubePlay,
        twitter,
        github,
        trello,
        paypal,
    } from "svelte-awesome/icons";
    import { faDiscord } from "@fortawesome/free-brands-svg-icons";

    const allMedia = [
        {
            name: "YouTube",
            icon: youtubePlay,
            url: "https://www.youtube.com/channel/UCHkH9_MKql1MFi0MZ_tqQbg",
            brandColor: "#FF0000",
        },
        {
            name: "Twitter",
            icon: twitter,
            url: "https://twitter.com/AzisabaNetwork",
            brandColor: "#1DA1F2",
        },
        {
            name: "Discord",
            icon: faDiscord,
            url: "https://discord.gg/azisaba",
            brandColor: "#7289DA",
        },
        {
            name: "GitHub",
            icon: github,
            url: "https://github.com/azisaba",
        },
        {
            name: "Trello",
            icon: trello,
            url: "https://trello.com/azisaba",
        },
        {
            name: "PayPal",
            icon: paypal,
            url: "https://www.paypal.me/AzisabaNetwork",
        },
    ];
</script>

<TopAppBar variant="static">
    <Row>
        <Section>
            <img
                src="https://images.weserv.nl/?url=https://i.azisaba.net/branding/1533483330415.jpg&w=48&output=webp"
                alt="ロゴ" />
            <Title>アジ鯖</Title>
        </Section>
        <Section align="end">
            {#each allMedia as media}
                <IconButton title={media.name} href={media.url} target>
                    <Icon
                        data={media.icon}
                        style="color: {media.brandColor};" />
                </IconButton>
            {/each}
        </Section>
    </Row>
</TopAppBar>
