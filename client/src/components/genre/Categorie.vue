<template>
  <header class="text-base lg:text-sm">
    <nav>
      <ul
        class="flex items-center gap-x-3 max-w-screen-xl mx-auto px-4 overflow-x-auto lg:px-8"
      >
        <div
          class="relative custom-left"
          v-for="(item, idx) in submenuNav"
          :key="idx"
        >
          <div
            @click="setActiveIndex(idx)"
            :class="`py-1 ${
              activeIndex === idx ? 'border-b-2 border-green-600' : ''
            }`"
          >
            <a
              @click="emitTitle(item.title)"
              :href="item.path"
              class="block py-2 px-3 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 duration-150"
            >
              {{ item.title }}
            </a>
          </div>
        </div>
      </ul>
    </nav>
  </header>
</template>

<script>
import { eventBus } from "./eventBus.js";
export default {
  data() {
    return {
      state: false,
      searchQuery: "",
      activeIndex: 0,
      navigation: [
        /* your navigation data here */
      ],
      submenuNav: [
        { title: "Fievre", path: "#" },
        { title: "Douleur", path: "#" },
        { title: "etc", path: "#" },
        { title: "etc", path: "#" },
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
    emitTitle(title) {
      eventBus.emit("title-selected", title);
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 600px) {
  .custom-left {
    left: 46%;
  }
}
</style>
