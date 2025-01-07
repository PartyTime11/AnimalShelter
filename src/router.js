import { createWebHistory, createRouter } from 'vue-router';
import Main from './pages/main.vue';
import Catalogue from './pages/Catalogue.vue';
import Form_catalogue from './pages/Form_catalogue.vue';
import Useful_articles from './pages/Useful_articles.vue';
import About_us from './pages/About_us.vue';
import Help from './pages/Help.vue';
import Contacts from './pages/Contacts.vue';
import Registration from './pages/Registration.vue';
import Enter from './pages/Enter.vue';
import LK from './pages/LK.vue';

const routes = [
  { path: '/', component: Main },
  { path: '/registration', component: Registration },
  { path: '/enter', component: Enter },
  { 
    path: '/lk', 
    component: LK, 
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token');
      if (token) {
        next();
      } else {
        next({ path: '/registration' });
      }
  }},
  { path: '/catalogue', component: Catalogue },
  { path: '/form', component: Form_catalogue },
  { path: '/useful_articles', component: Useful_articles },
  { path: '/about_us', component: About_us },
  { path: '/help', component: Help },
  { path: '/contacts', component: Contacts }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  }
});

export default router;
