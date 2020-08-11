<template>
  <v-container id="root" fluid>
    <v-container class="py-0">
      <v-row id="view" align="center">
        <v-col cols="12" md="4">
          <h1 class="mb-5">アジ鯖、たのしい。</h1>
          <p class="mb-4">アジ鯖は過去サーバーのリニューアルから独自に開発したサーバーまで様々なジャンルを取り揃えているJava版のMinecraftサーバーです。アジ鯖に参加すると人生が変わります。</p>
          <div class="d-flex flex-wrap">
            <v-btn class="ma-2 elevation-7 grow" x-large>
              <v-icon left>mdi-play</v-icon>
              今すぐ参加
            </v-btn>
            <v-btn class="ma-2 grow" outlined x-large>
              <v-icon left>mdi-information-outline</v-icon>
              ルールを確認
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="8">
          <div class="d-flex justify-center align-center">
            <span>準備中です...</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style lang="scss" scoped>
  #root {
    background: linear-gradient(to bottom right, palegreen, lightgreen);
  }

  #view {
    min-height: 70vh;
  }

  h1 {
    font-size: 2.5em;
  }
</style>
