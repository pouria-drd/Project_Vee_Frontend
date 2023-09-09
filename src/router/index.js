import { createRouter, createWebHistory } from "vue-router";

const accounts = "/accounts";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      name: "sign-in",
      path: accounts + "/sign-in",
      // meta: { authUserNotAllowed: true },
      component: () => import("../views/SigninView.vue"),
    },
    {
      name: "sign-up",
      path: accounts + "/sign-up",
      meta: { authUserNotAllowed: true },
      component: () => import("../views/SignupView.vue"),
    },
  ],
});

export default router;
