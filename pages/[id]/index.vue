<script setup>
import { onMounted } from "vue"
import { initFlowbite } from "flowbite"

onMounted(() => {
    initFlowbite();
})
const product = {
    id: 1,
    name: "Supreme Flex Hoodie",
    desc: "Comfortable hoodie with supreme flexibility.",
    price: 9.99,
    createdAt: "2023-01-01",
    defaultImageUrl:
        "https://mp-files.nyc3.cdn.digitaloceanspaces.com/products/1/0C7277EF-A535-4C61-933D-6A71B80C84D0",
    additionalImageUrls: [
        "https://mp-files.nyc3.cdn.digitaloceanspaces.com/products/1/4DC383B3-F322-4616-886B-4D8C98ABEA63",
        "https://mp-files.nyc3.cdn.digitaloceanspaces.com/products/1/5FE48888-FF65-47A1-8D28-A84360D95F86",
        "https://mp-files.nyc3.cdn.digitaloceanspaces.com/products/1/6FDD81F9-EBB2-4F57-92E9-7820EB936303",
    ],
};
</script>
<template>
    <main class="mx-auto max-w-screen-xl h-screen bg-red-100 gap-4">
        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div class="justify-self-end sm:max-w-sm overflow-hidden mr-5">
                <img class="rounded-lg mx-auto" :src="product.defaultImageUrl" alt="product image" />
                <!-- <div class="grid grid-flow-col auto-cols-auto">
                                                                    <img v-for="imageurl in product.additionalImageUrls" class="rounded-lg w-32 h-32" :src="imageurl"
                                                                         alt="product image" />
                                                                </div> -->

                <div id="default-carousel" class="relative w-full" data-carousel="slide">
                    <!-- Carousel wrapper -->
                    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                        <!-- Item 1 -->
                        <div v-for="imageUrl in product.additionalImageUrls" class="hidden duration-700 ease-in-out"
                             data-carousel-item>
                            <img :src="imageUrl"
                                 class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                        </div>
                    </div>
                    <!-- Slider indicators -->
                    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"
                                data-carousel-slide-to="0"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"
                                data-carousel-slide-to="1"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"
                                data-carousel-slide-to="2"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4"
                                data-carousel-slide-to="3"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5"
                                data-carousel-slide-to="4"></button>
                    </div>
                    <!-- Slider controls -->
                    <button type="button"
                            class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            data-carousel-prev>
                        <span
                              class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
                                 stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7">
                                </path>
                            </svg>
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button"
                            class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            data-carousel-next>
                        <span
                              class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
                                 stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                                </path>
                            </svg>
                            <span class="sr-only">Next</span>
                        </span>
                    </button>
                </div>

            </div>
            <div class="justify-self-start ml-5">
                <span class="text-2xl font-bold">{{ product.name }}</span>
                <p>${{ product.price }}</p>
                <p class="mt-5 italic">
                    {{ product.desc }}
                </p>
            </div>
        </div>
    </main>
</template>
