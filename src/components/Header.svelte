<script>
    import {
        Header,
        SideNav,
        SideNavItems,
        SideNavMenu,
        SideNavLink,
        SkipToContent,
    } from "carbon-components-svelte";
    import FavoriteFilled32 from "carbon-icons-svelte/lib/FavoriteFilled32";
    import Fish32 from "carbon-icons-svelte/lib/Fish32";
    import Book32 from "carbon-icons-svelte/lib/Book32";
    import PlayOutline32 from "carbon-icons-svelte/lib/PlayOutline32";
    import Locked32 from "carbon-icons-svelte/lib/Locked32";

    export let segment;

    let isSideNavOpen = false;
</script>

<Header
    company="アジ鯖"
    platformName="公式ホームページ"
    href="/"
    bind:isSideNavOpen
>
    <div slot="skip-to-content">
        <SkipToContent />
    </div>
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
    <SideNavItems>
        <SideNavMenu text="はじめに" expanded={true}>
            <SideNavLink
                icon={{ render: FavoriteFilled32 }}
                text="ようこそ"
                href="/"
                isSelected={segment === undefined}
            />
            <SideNavLink
                icon={{ render: Fish32 }}
                text="アジ鯖とは？"
                href="/intro"
                isSelected={segment === "intro"}
            />
            <SideNavLink
                icon={{ render: Book32 }}
                text="ルール"
                href="/terms"
                isSelected={segment === "terms"}
            />
            <SideNavLink
                icon={{ render: PlayOutline32 }}
                text="今すぐ参加"
                href="/join"
                isSelected={segment === "join"}
            />
        </SideNavMenu>
        <SideNavMenu text="もっと詳しく" expanded={true}>
            <SideNavLink icon={{ render: Locked32 }} text="各サーバー紹介" />
            <SideNavLink icon={{ render: Locked32 }} text="アルバム" />
            <SideNavLink icon={{ render: Locked32 }} text="運営一覧" />
            <SideNavLink icon={{ render: Locked32 }} text="スポンサー" />
        </SideNavMenu>
        <SideNavMenu text="その他">
            <SideNavLink
                text="接続チェック"
                href="https://mcsrvstat.us/server/azisaba.net"
                target="_blank"
            />
            <SideNavLink
                text="リソースパックのダウンロード"
                href="https://packs.azisaba.net"
                target="_blank"
            />
        </SideNavMenu>
    </SideNavItems>
</SideNav>
