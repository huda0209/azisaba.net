<script>
    import {
        SkipToContent,
        Header,
        HeaderUtilities,
        HeaderAction,
        HeaderActionLink,
        HeaderPanelLinks,
        HeaderPanelDivider,
        HeaderPanelLink,
    } from "carbon-components-svelte";

    import LogoYoutube20 from "carbon-icons-svelte/lib/LogoYoutube20";
    import LogoTwitter20 from "carbon-icons-svelte/lib/LogoTwitter20";
    import Chat20 from "carbon-icons-svelte/lib/Chat20";
    import LogoGithub20 from "carbon-icons-svelte/lib/LogoGithub20";

    const socials = [
        {
            name: "YouTube",
            icon: LogoYoutube20,
            url: "https://www.youtube.com/channel/UCHkH9_MKql1MFi0MZ_tqQbg",
        },
        {
            name: "Twitter",
            icon: LogoTwitter20,
            url: "https://twitter.com/AzisabaNetwork",
        },
        {
            name: "Discord",
            icon: Chat20,
            url: "https://discord.gg/azisaba",
        },
        {
            name: "GitHub",
            icon: LogoGithub20,
            url: "https://github.com/azisaba",
        },
    ];

    const items = [
        "Wiki",
        {
            name: "公式Wiki",
            url: "https://azisabaofficial.playing.wiki",
        },
        "投票する！",
        {
            name: "Japan Minecraft Servers",
            url: "https://minecraft.jp/servers/azisaba.net",
        },
        {
            name: "monocraft",
            url: "https://monocraft.net/servers/xWBVrf1nqB2P0LxlMm2v",
        },
        "その他サービス",
        {
            name: "リソースパックのダウンロード",
            url: "https://packs.azisaba.net",
        },
        {
            name: "稼働状況の確認",
            url: "https://status.azisaba.net",
        },
        "気に入っていただけましたか？",
        {
            name: "寄付する！",
            url: "https://store.azisaba.net",
        },
        {
            name: "PayPal™で寄付する！ (特典なし)",
            url: "https://www.paypal.me/AzisabaNetwork",
        },
    ];

    let isOpen = false;
</script>

<Header company="アジ鯖" platformName="公式ホームページ" href="/">
    <div slot="skip-to-content">
        <SkipToContent />
    </div>

    <HeaderUtilities>
        {#each socials as social}
            <HeaderActionLink
                title={social.name}
                icon={{ render: social.icon }}
                href={social.url}
                target="_blank" />
        {/each}

        <HeaderAction bind:isOpen>
            <HeaderPanelLinks>
                {#each items as item}
                    {#if typeof item === 'string'}
                        <HeaderPanelDivider>{item}</HeaderPanelDivider>
                    {:else}
                        <HeaderPanelLink
                            title={item.name}
                            href={item.url}
                            target="_blank">
                            {item.name}
                        </HeaderPanelLink>
                    {/if}
                {/each}
            </HeaderPanelLinks>
        </HeaderAction>
    </HeaderUtilities>
</Header>
