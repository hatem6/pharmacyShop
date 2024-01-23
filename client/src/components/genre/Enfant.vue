<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <Categorie></Categorie>
    <br /><br />
    <div class="mx-auto max-w-screen-xl px-4 md:px-8">
      <div class="md:hidden"><br /></div>
      <div
        class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16"
      >
        <!-- article - start -->
        <div
          v-for="product in newProducts"
          :key="product.id"
          data-aos="fade-left"
          class="flex flex-col items-center gap-4 md:flex-row lg:gap-6"
        >
          <router-link
            :to="{
              name: 'detail',
              params: {
                productName: product.productName || 'Default Name',
                productPrice: product.productPrice || 'Default Price',
                productImg: product.productImg || 'Default img',
                description: product.description || 'Default descrition',
                genre: product.genre || 'Default genre',
                type: product.type || 'Default type',
              },
            }"
            class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
          >
            <img
              :src="product.productImg"
              loading="lazy"
              alt="Photo by Martin Sanchez"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
          </router-link>

          <div class="flex flex-col gap-2">
            <span class="text-sm text-gray-400">2024</span>

            <h2 class="text-xl font-bold text-gray-800">
              <a
                href="#"
                class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >{{ product.productName }}</a
              >
            </h2>

            <p class="text-gray-500">
              {{ product.description }}
            </p>

            <div>
              <a
                href="#"
                class="font-semibold text-green-700 transition duration-100 hover:text-green-600 active:text-green-700"
                >Acheter</a
              >
            </div>
          </div>
        </div>
        <!-- article - end -->
        <div class="md:hidden"><br /><br /></div>
      </div>
    </div>
  </div>
</template>
<script>
import fetchProducts from "./Products.js";
import { eventBus } from "./eventBus.js";
import "aos/dist/aos.css";
import AOS from "aos";
import Categorie from "./Categorie.vue";
export default {
  data() {
    return {
      title: "",
      newProducts: [],
      saveProducts: [],
      total: null,
    };
  },

  created() {
    this.$nextTick(() => {
      AOS.init({
        duration: 2500,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    });

    eventBus.on("title-selected", (title) => {
      this.title = title;
    });

    // Watch for changes in the 'title' property and fetch data accordingly
    this.$watch("title", (newTitle, oldTitle) => {
      if (newTitle !== oldTitle) {
        this.fetchData();
      }
    });
  },

  components: {
    Categorie,
  },

  methods: {
    fetchData() {
      console.log(this.title);
      this.newProducts = this.saveProducts
        .filter(
          (item) =>
            item.genre === "enfant" && item.type === this.title.toLowerCase()
        )
        .map((item) => ({
          productImg: item.productImg,
          productName: item.productName,
          productPrice: item.productPrice,
          description: item.description,
          genre: item.genre,
          type: item.type,
        }));
    },
    displayDefault() {
      for (let i = 0; i < this.saveProducts.length; i++) {
        let product = {
          productImg: this.saveProducts[i].productImg,
          productName: this.saveProducts[i].productName,
          productPrice: this.saveProducts[i].productPrice,
          description: this.saveProducts[i].description,
          genre: this.saveProducts[i].genre,
          type: this.saveProducts[i].type,
        };

        if (
          this.saveProducts[i].genre === "enfant" &&
          this.saveProducts[i].type === "fievre"
        ) {
          this.newProducts.push(product);
        }
      }
    },
  },
  async mounted() {
    fetchProducts();
    try {
      const storedProducts = localStorage.getItem("Products");
      if (storedProducts) {
        this.saveProducts = JSON.parse(storedProducts);
      }
      await this.displayDefault();
    } catch (error) {
      console.error("Error retrieving products from localStorage:", error);
    }
  },
};
</script>
<style scoped></style>
