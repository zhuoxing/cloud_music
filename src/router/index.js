import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: '/music/',
  routes: [
    {
      path: '',
      redirect: '/MusicIndex'
    },
    // 仿网易云音乐首页
    {
      path: '/MusicIndex',
      component: (resolve) => import('@/view/CommPage').then(module => resolve(module)),
      children: [
        {
          path: '',
          component: (resolve) => import('@/view/MusicIndex').then(module => resolve(module)),
          children: [
            {
              path: '',
              name: '推荐',
              component: (resolve) => import('@/view/MusicIndex/Recommend').then(module => resolve(module))
            },
            {
              path: 'TopList',
              name: '排行榜',
              component: (resolve) => import('@/view/MusicIndex/TopList').then(module => resolve(module))
            },
            {
              path: 'PlayList',
              name: '歌单',
              component: (resolve) => import('@/view/MusicIndex/PlayList').then(module => resolve(module))
            },
            {
              path: 'AnchorRadio',
              name: '主播电台',
              component: (resolve) => import('@/view/MusicIndex/AnchorRadio').then(module => resolve(module))
            },
            {
              path: 'Singer',
              name: '歌手',
              component: (resolve) => import('@/view/MusicIndex/Singer').then(module => resolve(module))
            },
            {
              path: 'NewDish',
              name: '新碟上架',
              component: (resolve) => import('@/view/MusicIndex/NewDish').then(module => resolve(module))
            }
          ]
        }
      ]
    },
    require('./MyMusic/index'), // 我的音乐
    require('./Friend/index'), // 朋友
    require('./Friend/index'), // 我的音乐
    require('./Shopping/index'), // 音乐商城
    require('./Musician/index'), // 音乐人
    require('./Download/index') // 下载客户端
  ]
})
