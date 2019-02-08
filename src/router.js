import VueRouter from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import Downloads from '@/components/Downloads';
import Changelog from '@/components/Changelog';
import Documentation from '@/components/Documentation';
import NotFound from '@/components/NotFound';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/downloads', component: Downloads },
    { path: '/changelog', component: Changelog },
    { path: '/docs', component: Documentation },
    { path: '/docs/:id', component: Documentation, children: [
      { path: '', component: Documentation },
    ] },
    { path: '*', component: NotFound }
  ]
})