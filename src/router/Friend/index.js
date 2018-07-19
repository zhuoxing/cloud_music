module.exports = {
  path: '/Friend',
  component: (resolve) => import('@/view/CommPage').then(module => resolve(module)),
  children: [
    {
      path: '',
      component: (resolve) => import('@/view/Friend/Friend').then(module => resolve(module))
    }
  ]
}
