<template>
  <Carousel :items-to-show="2" :wrap-around="true" :autoplay="4000">
    <!-- article - start -->
    <Slide
      v-for="product in saveProducts"
      :key="product.id"
      class="flex flex-col items-center gap-4 md:flex-row lg:gap-6"
    >
      <router-link
        to="#"
        class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
      >
        <img
          :src="product.productImg"
          loading="lazy"
          alt="Photo by Martin Sanchez"
          class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
      </router-link>

      <div class="flex flex-col gap-2 productInfo">
        <span class="text-sm text-gray-400">2024</span>

        <h2 class="text-xl font-bold text-gray-800">
          <a
            href="#"
            class="transition duration-100 hover:text-indigo-500 active:text-indigo-600 ml-1"
            >{{ product.productName }}</a
          >
        </h2>

        <p class="text-red-700 ml-6 size-9 text-lg">
          {{ product.productPrice }}
        </p>

        <div>
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
            class="font-semibold bg-gradient-to-r from-green-500 to-green-700 text-white transition duration-300 hover:from-green-400 hover:to-green-600 active:from-green-600 active:to-green-700 rounded-full px-4 py-2 shadow-lg"
            >Acheter</router-link
          >
        </div>
      </div>
    </Slide>
    <!-- article - end -->
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import fetchProducts from "./genre/Products.js";
import "vue3-carousel/dist/carousel.css";
export default defineComponent({
  name: "Basic",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      title: "",
      newProducts: [],
      saveProducts: [],
    };
  },
  mounted() {
    fetchProducts();
    try {
      const storedProducts = localStorage.getItem("Products");
      if (storedProducts) {
        this.saveProducts = JSON.parse(storedProducts);
      }
    } catch (error) {
      console.error("Error retrieving products from localStorage:", error);
    }
  },
});
</script>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
