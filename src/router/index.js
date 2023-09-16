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
      path: accounts + "/profile",
      name: "profile",
      component: () => import("../views/ProfileView.vue"),
    },

    {
      path: accounts + "/settings",
      name: "settings",
      component: () => import("../views/SettingsView.vue"),
    },

    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },

    {
      path: "/help",
      name: "help",
      component: () => import("../views/HelpView.vue"),
    },

    {
      path: "/support",
      name: "support",
      component: () => import("../views/SupportView.vue"),
    },

    {
      path: accounts + "/sign-up",
      name: "sign-up",
      component: () => import("../views/SignupView.vue"),
    },

    {
      path: accounts + "/sign-in",
      name: "sign-in",
      // meta: { authUserNotAllowed: true },
      component: () => import("../views/SigninView.vue"),
    },
  ],
});

export default router;
