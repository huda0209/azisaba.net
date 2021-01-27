<script>
    import {
        Header,
        SideNav,
        SideNavItems,
        SideNavLink,
        SkipToContent,
    } from "carbon-components-svelte";

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
        <SideNavLink
            text="ようこそ"
            href="/"
            isSelected={segment === undefined}
        />
        <SideNavLink
            text="アジ鯖とは？"
            href="/intro"
            isSelected={segment === "intro"}
        />
        <SideNavLink
            text="ルール"
            href="/terms"
            isSelected={segment === "terms"}
        />
        <SideNavLink
            text="今すぐ参加"
            href="/join"
            isSelected={segment === "join"}
        />
    </SideNavItems>
</SideNav>
