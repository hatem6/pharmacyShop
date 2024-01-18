<template>
  <header class="text-base lg:text-sm">
    <div
      :class="`bg-white  items-center gap-x-14 px-4 max-w-screen-xl mx-auto lg:flex lg:px-8 lg:static ${
        state ? 'h-full fixed inset-x-0' : ''
      }`"
    >
      <div
        :class="`nav-menu flex-1 pb-28 mt-8 overflow-y-auto max-h-screen lg:block lg:overflow-visible lg:pb-0 lg:mt-0 ${
          state ? '' : 'hidden'
        }`"
      >
        <ul
          class="items-center space-y-6 lg:flex lg:space-x-6 lg:space-y-0 relative custom-left w-52"
        >
          <form
            @submit.prevent="handleSearch"
            class="flex-1 items-center justify-start pb-4 lg:flex lg:pb-0"
          >
            <div class="flex items-center gap-1 px-2 border rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search"
                class="w-full px-2 py-2 text-gray-500 bg-transparent rounded-md outline-none"
              />
            </div>
          </form>
        </ul>
      </div>
    </div>
    <br />
    <nav class="border-b">
      <ul
        class="flex items-center gap-x-3 max-w-screen-xl mx-auto px-4 overflow-x-auto lg:px-8"
      >
        <div
          class="relative customs-left"
          v-for="(item, idx) in submenuNav"
          :key="idx"
        >
          <div
            @click="setActiveIndex(idx)"
            :class="`py-1 ${
              activeIndex === idx ? 'border-b-2 border-green-600' : ''
            }`"
          >
            <router-link
              :to="item.router"
              class="block py-2 px-3 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 duration-150"
            >
              {{ item.title }}
            </router-link>
          </div>
        </div>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      state: false,
      searchQuery: "",
      activeIndex: -1,
      navigation: [
        /* your navigation data here */
      ],
      submenuNav: [
        { title: "Adulte", router: "/Adulte" },
        { title: "Enfant", router: "/Enfant" },
        { title: "Bebe", router: "/Bebe" },
      ],
    };
  },
  methods: {
    toggleState() {
      this.state = !this.state;
    },
    handleSearch() {
      // Handle search functionality here
      console.log("Search query:");
    },
    setActiveIndex(index) {
      this.activeIndex = index;
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 1100px) {
  .custom-left {
    left: 46%;
  }
  .customs-left {
    margin-left: 250px;
  }
}

@media screen and (min-width: 734px) and (max-width: 1100px) {
  .customs-left {
    margin-left: 100px;
  }
}

@media screen and (max-width: 734px) {
  .customs-left {
    left: 19%;
  }
}
</style>
