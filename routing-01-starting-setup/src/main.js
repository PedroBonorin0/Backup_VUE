import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

import TeamsList from './components/teams/TeamsList.vue';
import UserList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/teams',
    },
    {
      name: 'teams',
      path: '/teams',
      component: TeamsList,
      children: [
        {
          name: 'teams-members',
          path: ':teamId',
          component: TeamMembers,
          props: true
        },
      ]
    },
    {
      path: '/users',
      component: UserList,
      beforeEnter(to, from, next) {
        console.log(to, from);
        next();
      }
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ],
  scrollBehavior (_, _2, savedPosition) {
    // console.log(to, from);
    return (savedPosition)? savedPosition : { left: 0, top: 0 };
  }
});

const app = createApp(App);

app.use(router);

app.mount('#app');
