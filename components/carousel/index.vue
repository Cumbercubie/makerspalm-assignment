<script setup>
import { Carousel, initCarousels, initFlowbite } from "flowbite";

const props = defineProps({
    items: {
        required: true,
    },
});

onMounted(() => {
    // initFlowbite();
    const carouselItems = props.items.map((_, index) => ({
        position: index,
        el: document.getElementById(`carousel-item-${index}`)
    }))
    const carousel = new Carousel(carouselItems);
    const $prevButton = document.getElementById("data-carousel-prev");
    const $nextButton = document.getElementById("data-carousel-next");

    $prevButton.addEventListener("click", () => {
        carousel.prev();
    });

    $nextButton.addEventListener("click", () => {
        carousel.next();
    });
});
</script>
<template>
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
            <!-- Item 1 -->
            <div v-for="(item, index) in items" :id="`carousel-item-${index}`" class="duration-700 ease-in-out"
                 data-carousel-item>
                <img :src="item" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                     alt="..." />
            </div>
            <!-- <div :id="`carousel-item-${index}`" v-for="(item, index) in items" class="hidden duration-700 ease-in-out">
                        <img :src="item" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                    </div> -->
        </div>
        <!-- Slider controls -->
        <button id="data-carousel-prev" type="button"
                class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
            <span
                  class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                <span class="hidden">Previous</span>
            </span>
        </button>
        <button id="data-carousel-next" type="button"
                class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
            <span
                  class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span class="hidden">Next</span>
            </span>
        </button>
    </div>
</template>
