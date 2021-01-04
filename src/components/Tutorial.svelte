<script>
    import Dialog, { Content, Actions, Title } from "@smui/dialog";
    import Button, { Label } from "@smui/button";
    import DataTable, { Head, Body, Row, Cell } from "@smui/data-table";

    let loadWidget = false;
    let reasonDialog = false;
    let ruleDialog = false;
</script>

<style>
    section {
        margin: auto;
        padding: 10px;
        max-width: 1100px;
    }
</style>

<section>
    <h2>アジ鯖って何？</h2>
    <p>
        アジ鯖とは、鯖主の<a
            href="https://twitter.com/azi_blueline"
            target="_blank">アジ氏</a>とネットで集まった有志による数名のチームで立ち上げられた、Java版のマイクラサーバーの一つである。
    </p>
    <p>
        サーバーを立ち上げた理由を、後に鯖主自ら<u
            on:click={() => {
                reasonDialog.open();
                loadWidget = true;
            }}>こう語っている</u>。
    </p>
    <Dialog bind:this={reasonDialog} aria-describedby="slider-content">
        <Title id="event-title">なぜ新しくサーバーを立ち上げた？</Title>
        <Content id="slider-content">
            <blockquote class="twitter-tweet">
                <p lang="ja" dir="ltr">
                    俺はアジ鯖を立ち上げる前、某鯖で新参をいじめて楽しむ古参を見てきて、このままではいけないと思って声を上げた。<br />だがそのサーバーの風土では何一つ変えられなくて古参の声で消された。<br />俺はそのサーバーに見切りをつけてアジ鯖を立ち上げた。<br />このサーバーでは誰もが安心して遊べるようにしたい。
                </p>&mdash; アジ (@azi_blueline)
                <a
                    href="https://twitter.com/azi_blueline/status/1305147053152985090?ref_src=twsrc%5Etfw">September
                    13, 2020</a>
            </blockquote>
            {#if loadWidget}
                <script
                    async
                    src="https://platform.twitter.com/widgets.js"
                    charset="utf-8">
                </script>
            {/if}
        </Content>
        <Actions>
            <Button>
                <Label>GOD</Label>
            </Button>
        </Actions>
    </Dialog>
    <p>
        ちなみに、数年前に存在した同じ名前である「鯵鯖」というサーバーとは全くの別物である。
    </p>
    <h2>アジ鯖、たのしい。</h2>
    <p>アジ鯖の中には、様々なジャンルのサーバーがあります。</p>
    <p>
        各サーバーごとに管理が別れているため、多種多様な世界観のサーバーが揃っています。
    </p>
    <h2>ルールを守る</h2>
    <p>
        みんなが快適に遊べるように、<u
            on:click={() => ruleDialog.open()}>ルール</u>をご用意しました。
    </p>
    <Dialog bind:this={ruleDialog} aria-describedby="slider-content">
        <Title id="event-title">ルール</Title>
        <Content id="slider-content">
            <DataTable table$aria-label="ルール">
                <Head>
                    <Row>
                        <Cell>守るべき項目</Cell>
                        <Cell>例</Cell>
                        <Cell>違反した場合の対応</Cell>
                        <Cell>期間</Cell>
                    </Row>
                </Head>
                <Body>
                    <Row>
                        <Cell>チートを使用しない</Cell>
                        <Cell />
                        <Cell>BAN</Cell>
                        <Cell>永久</Cell>
                    </Row>
                    <Row>
                        <Cell>運営のモチベを奪わない</Cell>
                        <Cell />
                        <Cell>BAN</Cell>
                        <Cell>永久</Cell>
                    </Row>
                    <Row>
                        <Cell>不法行為をしない</Cell>
                        <Cell>寄付特典の売買やリソースパックの再配布</Cell>
                        <Cell>BAN</Cell>
                        <Cell>3ヶ月以内</Cell>
                    </Row>
                    <Row>
                        <Cell>バグの利用や拡散をしない</Cell>
                        <Cell />
                        <Cell>BAN</Cell>
                        <Cell>3ヶ月以内</Cell>
                    </Row>
                    <Row>
                        <Cell>他サーバーへの勧誘をしない</Cell>
                        <Cell />
                        <Cell>BAN</Cell>
                        <Cell>3ヶ月以内</Cell>
                    </Row>
                    <Row>
                        <Cell>秩序を乱さない</Cell>
                        <Cell>不適切な名前やスキン</Cell>
                        <Cell>BAN</Cell>
                        <Cell>2週間以内</Cell>
                    </Row>
                    <Row>
                        <Cell>発言に気をつける</Cell>
                        <Cell>攻撃的、差別的、不適切な発言やスパム</Cell>
                        <Cell>ミュート</Cell>
                        <Cell>1ヶ月以内</Cell>
                    </Row>
                </Body>
            </DataTable>
        </Content>
        <Actions>
            <Button>
                <Label>理解</Label>
            </Button>
        </Actions>
    </Dialog>
</section>
