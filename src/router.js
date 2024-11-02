import { createMemoryHistory, createRouter } from 'vue-router';

import Main from './pages/main.vue';

const routes = [
  { path: '/', component: Main },
//   { path: '/catalogue', componnent: C}
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
