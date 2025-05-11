import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home.vue"; // Импортируем правильный компонент HomeView

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView, // Используйте правильное имя переменной
    },
    {
      path: "/form",
      name: "form",
      component: () => import("../views/Form.vue"), // Импортируется корректно
    },
    {
      path: "/api-data",
      name: "api-data",
      component: () => import("@/views/ApiData.vue"), // Импортируется корректно
    },
  ],
});

export default router;




