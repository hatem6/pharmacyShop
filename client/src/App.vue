<template>
  <div>
    <Navbar data-aos="fade-up" class="fixed top-0 w-full"></Navbar>
    <div><br /><br /><br /></div>
    <Blog data-aos="fade-left"></Blog>
    <Footer data-aos="fade-right"></Footer>
  </div>
</template>

<script>
import "aos/dist/aos.css";
import AOS from "aos";
import Navbar from "./components/Navbar.vue";
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
    Blog,
    Footer,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
