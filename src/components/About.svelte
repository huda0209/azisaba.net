<script>
    import {
        Grid,
        Row,
        Column,
        ContentSwitcher,
        Switch,
    } from "carbon-components-svelte";

    const contents = [
        {
            title: "アジ鯖って何？",
            content:
                "アジ鯖とは、鯖主のアジ氏とネット上で集まった有志による数名のチームで立ち上げられたJava版マイクラサーバーである。ちなみに、数年前に存在した同じ名前である「鯵鯖」というサーバーとは全くの別物である。",
        },
        {
            title: "アジ鯖、たのしい。",
            content:
                "アジ鯖の中には複数のサーバーがあり、各サーバーごとに管理が別れています。そのため、多種多様な世界観のサーバーがすべて揃っています！",
        },
    ];
    let selectedIndex = 0;
</script>

<Grid style="padding-top: 1rem; padding-bottom: 1rem;">
    <Row>
        <Column sm={4}>
            <ContentSwitcher bind:selectedIndex>
                {#each contents as content}
                    <Switch text={content.title} />
                {/each}
            </ContentSwitcher>
        </Column>
    </Row>
</Grid>

<Grid style="padding-top: 3rem; padding-bottom: 3rem;">
    <Row>
        <Column md={{ span: 2, offset: 1 }}>
            <p style="font-size: 1.7rem; margin-bottom: 4rem;">
                {contents[selectedIndex].title}
            </p>
        </Column>
        <Column md={4}>
            <p style="font-size: 1.7rem;">{contents[selectedIndex].content}</p>
        </Column>
    </Row>
</Grid>
