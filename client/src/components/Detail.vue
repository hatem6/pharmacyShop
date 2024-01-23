<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-lg px-4 md:px-8">
      <div class="grid gap-8 md:grid-cols-2">
        <!-- images - start -->
        <div class="space-y-4">
          <div class="relative overflow-hidden rounded-lg bg-gray-100">
            <img
              :src="productImg"
              loading="lazy"
              alt="Photo by Himanshu Dewangan"
              class="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <!-- images - end -->

        <!-- content - start -->
        <div class="md:py-8">
          <!-- name - start -->
          <div class="mb-2 md:mb-3">
            <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl">
              {{ productName }}
            </h2>
          </div>
          <!-- name - end -->

          <!-- price - start -->
          <div class="mb-4">
            <div class="flex items-end gap-2">
              <span class="text-xl font-bold text-red-500 md:text-2xl">{{
                productPrice
              }}</span>
            </div>
          </div>
          <!-- price - end -->

          <!-- shipping notice - start -->
          <div class="mb-6 flex items-center gap-2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
              />
            </svg>

            <span class="text-sm">20 min</span>
          </div>
          <!-- shipping notice - end -->

          <!-- buttons - start -->
          <div class="flex gap-2.5">
            <a
              href="#"
              class="bg-gradient-to-r from-green-500 to-green-7 shadow-lg inline-block flex-1 rounded-lg bg-green-600 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-green-500 focus-visible:ring active:bg-green-700 sm:flex-none md:text-base"
              >Ajouter au panier</a
            >
          </div>
          <!-- buttons - end -->

          <!-- description - start -->
          <div class="mt-10 md:mt-16 lg:mt-20">
            <div class="mb-3 text-lg font-semibold text-gray-800">
              Description
            </div>

            <p class="text-gray-500">
              {{ description }}
            </p>
          </div>
          <!-- description - end -->
        </div>
        <!-- content - end -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productName: "",
      productPrice: "",
      productImg: "",
      description: "",
      genre: "",
      type: "",
    };
  },
  created() {
    // Accessing route params
    this.productName = this.$route.params.productName;
    this.productPrice = this.$route.params.productPrice;
    this.productImg = this.$route.params.productImg;
    this.description = this.$route.params.description;
  },
};
</script>
<style scoped></style>
