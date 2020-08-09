<template>
  <nav>
    <div>
      <a href="/" class="home">
        <img src="/favicon.ico">
        <span>アジ鯖公式ホームページ</span>
      </a>
    </div>
  </nav>
</template>

<script>
</script>

<style scoped lang="scss">
nav {
  padding: 1.2rem;
  display: flex;

  background-color: #15a1bd;
}

.home {
  padding: 0.8rem;
  display: flex;

  align-items: center;
  text-decoration: none;
  color: white;

  img {
    height: 3rem;
  }

  span {
    margin-left: 0.8rem;

    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
}
</style>
