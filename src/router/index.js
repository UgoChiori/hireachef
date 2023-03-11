
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
      meta: { requiresAuth: true, },
    },
    {
      path: "/chefs/:id",
      component: () => import("../components/ChefDetails.vue"),
    },
    {
      path: "/chefs/:id/bookingform",
      component: () => import("../components/BookingForm.vue"),

    }
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
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const currentUser = await getCurrentUser();
  if (requiresAuth && !currentUser) {
    next("/register");
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

export default router;
