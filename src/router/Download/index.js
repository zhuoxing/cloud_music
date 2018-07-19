module.exports = {
  path: '/Download',
  component: (resolve) => import('@/view/CommPage').then(module => resolve(module)),
  children: [
    {
      path: '',
      component: (resolve) => import('@/view/Download/Download').then(module => resolve(module)),
      children: [

      ]
    }
  ]
}
