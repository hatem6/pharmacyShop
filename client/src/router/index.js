import { createRouter, createWebHistory } from "vue-router";
import About from "../components/About.vue";
import Blog from "../components/Blog.vue";
import Contact from "../components/Contact.vue";
import Detail from "../components/Detail.vue";
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
  {
    path: "/Contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/About",
    name: "about",
    component: About,
  },
  {
    path: "/Detail/:productName/:productPrice/:productImg/:description/:genre/:type",
    name: "detail",
    component: Detail,
  },

  // Other routes...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
