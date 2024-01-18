<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-xl px-4 md:px-8">
      <!-- text - start -->
      <div class="mb-10 md:mb-16 flex flex-col items-center">
        <h2
          class="mb-4 text-center text-2xl font-bold text-gray-700 md:mb-6 lg:text-3xl"
        >
          Livraison Medical
        </h2>

        <!-- Center the lottieContainer using flexbox -->
        <div
          class="w-80 flex items-center justify-center"
          ref="deliveryLottieContainer"
        ></div>

        <div class="bg-gray-50 rounded-2xl">
          <p
            class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg"
          >
            Profitez de notre service de livraison de médicaments rapide et
            efficace, vous garantissant la réception de vos médicaments
            essentiels en seulement 15 minutes
          </p>
          <div
            class="w-16 relative max-md:left-1/3 md:left-2/4"
            ref="clockContainer"
          ></div>
        </div>
        <br />
        <div
          class="w-80 flex items-center justify-center"
          ref="secondLottieContainer"
        ></div>
      </div>
      <!-- text - end -->
      <div class="md:hidden"><br /></div>
      <div
        class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16"
      >
        <!-- article - start -->
        <div
          data-aos="fade-left"
          class="flex flex-col items-center gap-4 md:flex-row lg:gap-6"
        >
          <a
            href="#"
            class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
          >
            <img
              src="https://i.postimg.cc/MTGT49sg/Gripex-Enfant-12.jpg"
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
                >GRIPEX</a
              >
            </h2>

            <p class="text-gray-500">
              Traitement symptomatique de la fièvre et de l’hypersécrétion
              nasale au cours des affections aiguës rhinopharyngées de l'enfant.
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
        <!-- article - start -->
        <div
          data-aos="fade-right"
          class="flex flex-col items-center gap-4 md:flex-row lg:gap-6"
        >
          <a
            href="#"
            class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
          >
            <img
              src="https://i.postimg.cc/GpHV5YFq/Gripex-Adulte-12.jpg"
              loading="lazy"
              alt="Photo by Minh Pham"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
          </a>

          <div class="flex flex-col gap-2">
            <span class="text-sm text-gray-400">2024</span>

            <h2 class="text-xl font-bold text-gray-800">
              <a
                href="#"
                class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >GRIPEX
              </a>
            </h2>

            <p class="text-gray-500">
              Traitement symptomatique de la fièvre et de l’hypersécrétion
              nasale au cours des affections aiguës rhinopharyngées de l'Adulte.
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
        <!-- article - start -->
        <div
          data-aos="fade-left"
          class="flex flex-col items-center gap-4 md:flex-row lg:gap-6"
        >
          <a
            href="#"
            class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
          >
            <img
              src="https://i.postimg.cc/gjNKptdR/617370656769632d6164756c7465732d313030306d672d646f756c657572732d65742d6669657672652d32302d7361636865.webp"
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
          </a>

          <div class="flex flex-col gap-2">
            <span class="text-sm text-gray-400">2024</span>

            <h2 class="text-xl font-bold text-gray-800">
              <a
                href="#"
                class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >Aspégic 1000
              </a>
            </h2>

            <p class="text-gray-500">
              Adulte sachet - Aspirine 1g - Douleurs et fièvre
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
        <!-- article - start -->
        <div
          data-aos="fade-right"
          class="flex flex-col items-center gap-4 md:flex-row lg:gap-6"
        >
          <a
            href="#"
            class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
          >
            <img
              src="https://i.postimg.cc/KzQT3KVh/617370656769632d3530306d672d646f756c657572732d65742d6669657672652d33302d736163686574732d666163654696.webp"
              loading="lazy"
              alt="Photo by Magicle"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
          </a>

          <div class="flex flex-col gap-2">
            <span class="text-sm text-gray-400">2024</span>

            <h2 class="text-xl font-bold text-gray-800">
              <a
                href="#"
                class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >Aspégic 500 mg
              </a>
            </h2>

            <p class="text-gray-500">
              sachets poudre Aspirine pour soulager douleur et fièvre
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
      </div>
    </div>
    <div class="flex flex-col items-center">
      <div
        class="w-80 flex items-center justify-center"
        ref="lottieContainer"
      ></div>
    </div>
  </div>
</template>
<script>
import "aos/dist/aos.css";
import AOS from "aos";
import { Lottie } from "lottie-web";
import animationData from "../assets/animation/health3.json";
import secondAnimationData from "../assets/animation/health2.json";
import deliveryAnimationData from "../assets/animation/delivery.json";
import clock from "../assets/animation/clock.json";
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
  data() {
    return {};
  },
  methods: {
    initializeLottie() {
      if (typeof Lottie === "undefined") {
        import("lottie-web")
          .then(({ default: lottie }) => {
            this.loadAnimations(lottie, [
              { data: animationData, container: this.$refs.lottieContainer },
              {
                data: secondAnimationData,
                container: this.$refs.secondLottieContainer,
              },
              {
                data: deliveryAnimationData,
                container: this.$refs.deliveryLottieContainer,
              },
              {
                data: clock,
                container: this.$refs.clockContainer,
              },
              // Add more animations as needed
            ]);
          })
          .catch((error) => {
            console.error("Error loading Lottie:", error);
          });
      } else {
        this.loadAnimations(Lottie, [
          { data: animationData, container: this.$refs.lottieContainer },
          {
            data: secondAnimationData,
            container: this.$refs.secondLottieContainer,
          },
          {
            data: deliveryAnimationData,
            container: this.$refs.deliveryLottieContainer,
          },
          {
            data: clock,
            container: this.$refs.clockContainer,
          },
          // Add more animations as needed
        ]);
      }
    },
    loadAnimations(lottieInstance, animations) {
      animations.forEach(({ data, container }) => {
        this.loadAnimationWithData(lottieInstance, data, container);
      });
    },
    loadAnimationWithData(lottieInstance, animationData, container) {
      if (!container || !lottieInstance || !animationData) return;

      lottieInstance.loadAnimation({
        container: container,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    },
  },
  mounted() {
    this.initializeLottie();
  },
};
</script>
<style scoped></style>
