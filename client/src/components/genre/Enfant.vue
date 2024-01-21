<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <Categorie></Categorie>
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
          <a
            href="#"
            class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
          >
            <img
              :src="product.productImg"
              loading="lazy"
              alt="Photo by Martin Sanchez"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
          </a>

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
                >Read more</a
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
import { eventBus } from "./eventBus.js";
import axios from "axios";
import "aos/dist/aos.css";
import AOS from "aos";
import Categorie from "./Categorie.vue";

export default {
  data() {
    return {
      Products: {
        data: [
          // Your API response data here
        ],
      },
      title: "",
      newProducts: [],
      total: null,
    };
  },

  created() {
    this.displayDefault();
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
        this.fetchDataFromAPI();
      }
    });
  },

  components: {
    Categorie,
  },

  methods: {
    async fetchDataFromAPI() {
      console.log(this.title);
      try {
        const response = await axios.get(
          "https://fastcure.onrender.com/api/products?populate=*"
        );

        this.total = response.data.meta.pagination.total;
        this.newProducts = response.data.data
          .filter(
            (item) =>
              item.attributes.genre === "enfant" &&
              item.attributes.type === this.title.toLowerCase()
          )
          .map((item) => ({
            productImg: item.attributes.productImg.data[0].attributes.url,
            productName: item.attributes.productName,
            productPrice: item.attributes.productPrice,
            description: item.attributes.description,
            genre: item.attributes.genre,
            type: item.attributes.type,
          }));

        console.table(this.newProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async displayDefault() {
      try {
        const response = await axios.get(
          "https://fastcure.onrender.com/api/products?populate=*"
        );
        this.total = response.data.meta.pagination.total;
        for (let i = 0; i < this.total; i++) {
          let product = {
            productImg:
              response.data.data[i].attributes.productImg.data[0].attributes
                .url,
            productName: response.data.data[i].attributes.productName,
            productPrice: response.data.data[i].attributes.productPrice,
            description: response.data.data[i].attributes.description,
            genre: response.data.data[i].attributes.genre,
            type: response.data.data[i].attributes.type,
          };
          if (
            response.data.data[i].attributes.genre == "enfant" &&
            response.data.data[i].attributes.type == "fievre"
          ) {
            this.newProducts.push(product);
          }
        }
        console.table(this.newProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
  mounted() {},
};
</script>
<style scoped></style>
