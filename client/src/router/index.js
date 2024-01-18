import { createRouter, createWebHistory } from "vue-router";
import Blog from "../components/Blog.vue";
import Adulte from "../components/genre/Adulte.vue";
import Bebe from "../components/genre/Bebe.vue";
import Enfant from "../components/genre/Enfant.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Blog,
  },

  {
    path: "/Adulte",
    name: "adulte",
    component: Adulte,
  },
  {
    path: "/Enfant",
    name: "enfant",
    component: Enfant,
  },
  {
    path: "/Bebe",
    name: "bebe",
    component: Bebe,
  },

  // Other routes...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
