module.exports = {
  path: '/Shopping',
  component: (resolve) => import('@/view/CommPage').then(module => resolve(module)),
  children: [
    {
      path: '',
      component: (resolve) => import('@/view/Shopping/Shopping').then(module => resolve(module))
    }
  ]
}
