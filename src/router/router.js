import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage';
import TodoList from '@/pages/TodoList';

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage,
  },
  {
    path: '/todo-list',
    name: 'todo',
    component: TodoList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
