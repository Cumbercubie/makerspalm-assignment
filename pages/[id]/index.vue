<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
    initFlowbite();
});
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
const selectedImageUrl = reactive(
    { value: product.defaultImageUrl }
)
const onImageSelected = (event) => {
    selectedImageUrl.value = event.target.src
}
</script>
<template>
    <main class="mx-auto max-w-screen-xl h-full">
        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div class="justify-self-end sm:max-w-sm overflow-hidden mr-5">
                <!-- <Carousel :items="product.additionalImageUrls" /> -->
                <img class="rounded-lg mx-auto" :src="selectedImageUrl.value" alt="product image" />
                <div class="grid mt-4 gap-2 grid-flow-col auto-cols-auto">
                    <img v-for="imageurl in product.additionalImageUrls" @click="onImageSelected"
                         class="cursor-pointer rounded-lg w-32 h-32  hover:border-2 hover:border-gray-900" :src="imageurl"
                         alt="product image" />
                </div>
            </div>
            <div class="justify-self-start ml-5">
                <span class="text-3xl font-bold">{{ product.name }}</span>
                <p class="text-2xl mt-2 font-bold">${{ product.price }}</p>
                <p class="mt-5 italic">
                    {{ product.desc }}
                </p>
            </div>
        </div>
    </main>
</template>
