<template>
  <div id="app">
    <AppHeader />
    <p>準備中です...</p>
    <p>Discord: <a href="https://discord.gg/seheC2W">https://discord.gg/seheC2W</a></p>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
}

#app {
  height: 100%;
  width: 100%;
}
</style>
