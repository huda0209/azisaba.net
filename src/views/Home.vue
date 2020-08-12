<template>
  <v-main>
    <v-container id="hero" fluid>
      <v-container class="py-0">
        <v-row id="row" align="center">
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
            <v-container class="pa-2 pa-md-12">
              <v-img alt="preview" class="shrink" contain src="https://cdn.discordapp.com/attachments/695921639925219328/721022309799952454/2020-06-13_00.17.20.png" />
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-main>
</template>

<style lang="scss" scoped>
  #hero {
    background: linear-gradient(to bottom right, rgb(0, 255, 255, 0.2), rgb(144, 238, 144, 0.5));
  }

  #row {
    min-height: 75vh;
  }

  h1 {
    font-size: 2.5em;
  }
</style>
