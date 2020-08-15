import React from "react"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div id="content">
      <h1>外部リンク一覧</h1>
      <p>共有・コミュニティー</p>
      <ul>
        <li><a href="https://discord.gg/seheC2W" target="_blank">Discord</a></li>
        <li><a href="https://twitter.com/AzisabaNetwork" target="_blank">Twitter</a></li>
        <li><a href="https://github.com/AzisabaNetwork" target="_blank">GitHub</a></li>
        <li><a href="https://www.youtube.com/channel/UCHkH9_MKql1MFi0MZ_tqQbg" target="_blank">YouTube</a></li>
      </ul>
      <p>サーバー一覧サイト</p>
      <ul>
        <li><a href="https://minecraft.jp/servers/59b7c551a9b0bd23dc00834d" target="_blank">Japan Minecraft Servers</a></li>
        <li><a href="https://monocraft.net/servers/xWBVrf1nqB2P0LxlMm2v" target="_blank">monocraft</a></li>
        <li><a href="https://ja.namemc.com/server/azisaba.net" target="_blank">NameMC</a></li>
      </ul>
      <p>寄付</p>
      <ul>
        <li><a href="https://azisaba.buycraft.net" target="_blank">Tebex / Buycraft</a></li>
      </ul>
      <p>ツール</p>
      <ul>
        <li><a href="https://packs.azisaba.net" target="_blank">リソースパック / テクスチャ</a></li>
        <li><a href="https://status.azisaba.net" target="_blank">ステータス</a></li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
