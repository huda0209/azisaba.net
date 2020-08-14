import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/discord',
      beforeEnter: () => {
        window.location = 'https://discord.gg/seheC2W'
      }
    },
    {
      path: '/donate',
      beforeEnter: () => {
        window.location = 'https://azisaba.buycraft.net'
      }
    },
    {
      path: '/vote',
      beforeEnter: () => {
        let voteUrls = [
          'https://minecraft.jp/servers/59b7c551a9b0bd23dc00834d/vote',
          'https://monocraft.net/servers/xWBVrf1nqB2P0LxlMm2v/vote'
        ]
        let voteUrl = voteUrls[Math.floor(Math.random() * voteUrls.length)]
        window.location = voteUrl
      }
    }
  ]
})
