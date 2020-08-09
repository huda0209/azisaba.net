<template>
  <nav>
    <div>
      <a href="/" class="home">
        <img src="/favicon.ico">
        <span>アジ鯖公式ホームページ</span>
      </a>
    </div>
    <ul class="menu">
      <li>
        <a href="https://discord.gg/seheC2W" target="_blank" class="discord">
          <font-awesome-icon :icon="['fab', 'discord']" />
          <span>Discord</span>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/AzisabaNetwork" target="_blank" class="twitter">
          <font-awesome-icon :icon="['fab', 'twitter']" />
          <span>Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCHkH9_MKql1MFi0MZ_tqQbg" target="_blank" class="youtube">
          <font-awesome-icon :icon="['fab', 'youtube']" />
          <span>YouTube</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/AzisabaNetwork" target="_blank" class="github">
          <font-awesome-icon :icon="['fab', 'github']" />
          <span>GitHub</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
</script>

<style scoped lang="scss">
nav {
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
  background-color: #144552;

  a {
    text-decoration: none;
    color: white;
  }
}

.home {
  padding: 0.8rem;
  display: flex;
  align-items: center;

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

.menu {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  list-style: none;

  @media screen and ( max-width: 768px ) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    padding: 1.2rem;
    background-color: rgb(0, 0, 0, 0.5);
  }

  li {
    display: flex;

    @media screen and ( max-width: 768px ) {
      display: block;
      margin: 0.4rem;
    }

    a {
      padding: 1rem;
      display: flex;
      align-items: center;

      @media screen and ( min-width: 768px ) {
        span {
          display: none;
        }
      }

      svg {
        font-size: 2rem;
      }

      span {
        margin-left: 0.6rem;
        font-size: 1.3rem;
      }

      &:hover {
        @keyframes panel {
          to {
            background: rgba(0, 255, 255, 0.1);
            box-shadow: 2px 2px 2px 1px rgba(0, 255, 255, 0.3);
          }
        }

        animation-name: panel;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
      }
    }
  }
}

.discord {
  color: #7289da;
}

.twitter {
  color: #1da1f2;
}

.github {
  color: #fff;
}

.youtube {
  color: #f00;
}
</style>
