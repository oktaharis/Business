// import './assets/main.css'
import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";
import App from "./App.vue"
import Home from "@/pages/HomeView.vue";
import About from "@/pages/AboutView.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app')