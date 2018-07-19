module.exports = {
  path: '/Musician',
  component: (resolve) => import('@/view/CommPage').then(module => resolve(module)),
  children: [
    {
      path: '',
      component: (resolve) => import('@/view/Musician/Musician').then(module => resolve(module))
    }
  ]
}
