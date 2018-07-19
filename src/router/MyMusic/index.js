module.exports = {
  path: '/MyMusic',
  component: (resolve) => import('@/view/CommPage').then(module => resolve(module)),
  children: [
    {
      path: '',
      component: (resolve) => import('@/view/MyMusic/MyMusic').then(module => resolve(module)),
      children: [

      ]
    }
  ]
}
