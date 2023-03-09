// import { meta} from "core-js/fn/reflect";
import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("../components/HomePage.vue") },
    {
      path: "/register",
      component: () => import("../components/RegisterPage.vue"),
    },
    {
      path: "/signin",
      component: () => import("../components/SigninPage.vue"),
    },
    {
      path: "/chefs",
      component: () => import("../components/ChefList.vue"),
      meta: { requiresAuth: true },
    },
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (getCurrentUser()) {
      next();
    } else {
      alert("You must be logged in to view this page");
      next("/");
    }
  } else {
    next();
  }
});

export default router;
