<template>
  <nav class="bg-white w-full top-0 z-20">
    <div class="items-center px-4 max-w-screen-xl mx-auto lg:flex lg:px-8">
      <div class="flex items-center justify-between py-3 lg:py-4 lg:block">
        <router-link to="/">
          <img src="" width="120" height="50" alt="logo" />
        </router-link>
        <div class="lg:hidden">
          <button
            class="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
            @click="menuOpen()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
              :class="[open ? 'block' : 'hidden']"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              :class="[open ? 'hidden' : 'block']"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        class="flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto"
        :class="[open ? 'h-screen pb-20 overflow-auto pr-4' : 'hidden']"
      >
        <div>
          <ul class="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
            <li class="mt-8 mb-8 lg:mt-0 lg:mb-0">
              <a
                href="javascript:void(0)"
                class="text-gray-600 hover:text-indigo-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cart3"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
                  />
                </svg>
                <span
                  class="relative bottom-8 left-3 h-4 w-4 rounded-full bg-red-600 flex items-center justify-center"
                >
                  <span class="text-white text-xs">0</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <ul
            class="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0"
          >
            <li
              v-for="link in navigation"
              :key="link.id"
              class="text-gray-600 hover:text-indigo-600"
            >
              <a :href="link.router">
                {{ link.title }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.sticky-nav {
  animation: sticky-nav 300ms;
}

@keyframes sticky-nav {
  0% {
    transform: translateY(-6em);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
<script>
import { ref } from "vue";
export default {
  data: function () {
    return {
      navigation: [
        { title: "Medicaments", router: "/" },
        { title: "Contact", router: "#" },
      ],
    };
  },
  setup() {
    let open = ref(false);
    function menuOpen() {
      open.value = !open.value;
    }
    return { open, menuOpen };
  },
};
</script>
