import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const about: AppRouteModule = {
  path: '/about',
  name: 'About',
  component: LAYOUT,
  redirect: '/about/index',
  meta: {
    ignoreAuth: true,
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: 'about',
    orderNo: 100000,
  },
  children: [
    {
      path: 'index',
      name: 'AboutPage',
      component: () => import('/@/views/about/index.vue'),
      meta: {
        title: 'about',
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default about;
