<template>
  <div>
    <Navbar data-aos="fade-up" class="fixed top-0 w-full"></Navbar>
    <div>
      <br /><br /><br />
      <br />
    </div>
    <Category data-aos="fade-up"></Category>
    <router-view></router-view>
    <Footer data-aos="fade-right"></Footer>
  </div>
</template>

<script>
import "aos/dist/aos.css";
import AOS from "aos";
import Navbar from "./components/Navbar.vue";
import Category from "./components/Category.vue";
import Blog from "./components/Blog.vue";
import Footer from "./components/Footer.vue";

export default {
  created() {
    this.$nextTick(() => {
      AOS.init({
        duration: 2500,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    });
  },

  components: {
    Navbar,
    Category,
    Blog,
    Footer,
  },
  data() {
    return {
      RouteHidden: false,
    };
  },

  mounted() {},
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
