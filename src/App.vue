<template>
  <v-app>
    <v-app-bar app dark color="#144552">
      <v-img alt="logo" class="shrink mr-3" contain src="/favicon.ico" transition="scale-transition" width="48" />
      <v-toolbar-title>アジ鯖公式ホームページ</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn href="https://azisaba.buycraft.net" target="_blank" text>
        <v-icon>mdi-heart</v-icon>
        <span class="hidden-sm-and-down ml-2">寄付する</span>
      </v-btn>

      <v-menu transition="slide-y-transition" :close-on-content-click="false" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-on="on" v-bind="attrs" icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list class="pa-2">
          <v-subheader>ソーシャル</v-subheader>

          <v-list-item v-for="(item, i) in socialItems" :key="i" :href="item.url" target="_blank">
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
      socialItems: [
        { title: "Discord", icon: "mdi-discord", url: "https://discord.gg/seheC2W" },
        { title: "Twitter", icon: "mdi-twitter", url: "https://twitter.com/AzisabaNetwork" },
        { title: "GitHub", icon: "mdi-github", url: "https://github.com/AzisabaNetwork" },
        { title: "YouTube", icon: "mdi-twitter", url: "https://www.youtube.com/channel/UCHkH9_MKql1MFi0MZ_tqQbg" },
      ],
    }),
  };
</script>
