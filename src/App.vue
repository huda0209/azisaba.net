<template>
  <v-app>
    <v-app-bar app dark>

      <v-container class="d-flex align-center">
        <v-img alt="logo" class="shrink" contain src="/favicon.ico" transition="scale-transition" width="48" />
        <v-toolbar-title class="headline ml-3">アジ鯖</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-menu offset-y transition="slide-y-transition" :close-on-content-click="false" v-for="(column, i) in menu" :key="i">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-on="on" v-bind="attrs" class="d-none d-md-flex" :href="column.header.href" target="_blank" text>
              <v-icon left>{{ column.header.icon }}</v-icon>
              {{ column.header.title }}
            </v-btn>
          </template>
          <v-list class="pa-2" v-if="column.items">
            <v-list-item v-for="(item, i) in column.items" :key="i" :href="item.href" target="_blank">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu offset-y transition="slide-y-transition" :close-on-content-click="false">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-on="on" v-bind="attrs" class="d-md-none" @click="mobileMenu = !mobileMenu" icon>
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-expansion-panels>
            <v-expansion-panel v-for="(column, i) in menu" :key="i">
              <v-expansion-panel-header>
                <div>
                  <v-icon left>{{ column.header.icon }}</v-icon>
                  {{ column.header.title }}
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-btn v-if="column.header.href" :href="column.header.href" target="_blank" text>
                  {{ column.header.title }}
                </v-btn>
                <v-list>
                  <v-list-item v-for="(item, j) in column.items" :key="j" :href="item.href" target="_blank">
                    <v-list-item-icon>
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-menu>
      </v-container>

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
      mobileMenu: null,
      menu: [
        {
          header: { title: "寄付する", icon: "mdi-heart", href: "https://azisaba.buycraft.net" },
        },
        {
          header: { title: "開く", icon: "mdi-open-in-app" },
          items: [
            { title: "リソースパック", icon: "mdi-zip-box", href: "https://packs.azisaba.net" },
            { title: "ステータス", icon: "mdi-pulse", href: "https://status.azisaba.net" },
          ],
        },
        {
          header: { title: "ソーシャル", icon: "mdi-account-multiple" },
          items: [
            { title: "Discord", icon: "mdi-discord", href: "https://discord.gg/seheC2W" },
            { title: "Twitter", icon: "mdi-twitter", href: "https://twitter.com/AzisabaNetwork" },
            { title: "GitHub", icon: "mdi-github", href: "https://github.com/AzisabaNetwork" },
           { title: "YouTube", icon: "mdi-youtube", href: "https://www.youtube.com/channel/UCHkH9_MKql1MFi0MZ_tqQbg" },
          ],
        },
        {
          header: { title: "サーバーリスト", icon: "mdi-format-list-bulleted" },
          items: [
            { title: "Japan Minecraft Servers", icon: "mdi-diamond", href: "https://minecraft.jp/servers/59b7c551a9b0bd23dc00834d" },
            { title: "monocraft", icon: "mdi-checkbox-blank", href: "https://monocraft.net/servers/xWBVrf1nqB2P0LxlMm2v" },
            { title: "NameMC", icon: "mdi-alpha-n-box", href: "https://ja.namemc.com/server/azisaba.net" },
          ],
        },
      ],
    }),
  };
</script>
