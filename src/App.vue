<template>
  <v-app>
    <v-app-bar app dark color="#144552">
      <v-img alt="logo" class="shrink" contain src="/favicon.ico" transition="scale-transition" width="48" />
      <v-toolbar-title class="ml-3">アジ鯖</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn href="https://azisaba.buycraft.net" target="_blank" text>
        <v-icon>mdi-heart</v-icon>
        <span class="ml-2">寄付</span>
      </v-btn>

      <v-menu transition="slide-y-transition" :close-on-content-click="false" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-on="on" v-bind="attrs" icon>
            <v-icon>mdi-open-in-app</v-icon>
          </v-btn>
        </template>

        <v-list class="pa-2">
          <v-subheader>開く</v-subheader>
          <v-list-item v-for="(item, i) in appItems" :key="`app-${i}`" :href="item.url" target="_blank">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu transition="slide-y-transition" :close-on-content-click="false" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-on="on" v-bind="attrs" icon>
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
        </template>

        <v-list class="pa-2">
          <v-subheader>ソーシャル</v-subheader>
          <v-list-item v-for="(item, i) in socialItems" :key="`social-${i}`" :href="item.url" target="_blank">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>

          <v-subheader>サーバーリスト</v-subheader>
          <v-list-item v-for="(item, i) in serverListItems" :key="`server-list-${i}`" :href="item.url" target="_blank">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <p>準備中です...</p>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'App',

    components: {
      //
    },

    data: () => ({
      appItems: [
        { title: "リソースパック", icon: "mdi-zip-box", url: "https://packs.azisaba.net" },
        { title: "ステータス", icon: "mdi-pulse", url: "https://status.azisaba.net" },
      ],
      socialItems: [
        { title: "Discord", icon: "mdi-discord", url: "https://discord.gg/seheC2W" },
        { title: "Twitter", icon: "mdi-twitter", url: "https://twitter.com/AzisabaNetwork" },
        { title: "GitHub", icon: "mdi-github", url: "https://github.com/AzisabaNetwork" },
        { title: "YouTube", icon: "mdi-youtube", url: "https://www.youtube.com/channel/UCHkH9_MKql1MFi0MZ_tqQbg" },
      ],
      serverListItems: [
        { title: "Japan Minecraft Servers", icon: "mdi-diamond", url: "https://minecraft.jp/servers/59b7c551a9b0bd23dc00834d" },
        { title: "monocraft", icon: "mdi-checkbox-blank", url: "https://monocraft.net/servers/xWBVrf1nqB2P0LxlMm2v" },
        { title: "NameMC", icon: "mdi-alpha-n-box", url: "https://ja.namemc.com/server/azisaba.net" },
      ],
    }),
  };
</script>
