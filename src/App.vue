<template>
  <div id="app">
    <nav id="header">
      <div>
        <a href="/" class="home">
          <img src="/favicon.ico">
          <span>アジ鯖公式ホームページ</span>
        </a>
      </div>
    </nav>

    <p>準備中です...</p>
    <p>Discord: <a href="https://discord.gg/seheC2W">https://discord.gg/seheC2W</a></p>
  </div>
</template>

<script>
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

#header {
  padding: 1.2em;
  display: flex;

  background-color: #15a1bd;

  .home {
    padding: 0.8rem;
    display: flex;

    align-items: center;
    font-size: 1.5rem;
    text-decoration: none;
    color: white;

    img {
      height: 48px;
      width: 48px;
    }

    span {
      margin-left: 0.5em;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
}
</style>
