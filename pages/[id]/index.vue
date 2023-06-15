<script setup>
import { react } from '@babel/types';
import products from '~/server/api/products';
import { useProductStore } from '~/stores/products';

const route = useRoute();

const { data } = await useFetch(`/api/product`, {
    server: true,
    query: { id: route.params.id }
});
const productStore = useProductStore();
if (!data.value?.id) {
    throw createError({ statusCode: 404, statusMessage: 'Not found any products' })
}
productStore.updateProduct(data.value)
const product = computed(() => productStore.getProduct(data.value.id))
// console.log(productStore.getProduct(product.id))
const selectedImageUrl = ref(productStore.getProduct(data.value.id).defaultImageUrl);


const onImageSelected = (event) => {
    selectedImageUrl.value = event.target.src
}
</script>
<template>
    <Head>
        <Title>{{ product.name }} | SATURN </Title>
    </Head>
    <main class="mx-auto max-w-screen-xl h-full">
        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div class="justify-self-end sm:max-w-sm overflow-hidden mr-5">
                <!-- <Carousel :items="product.additionalImageUrls" /> -->
                <img class="rounded-lg mx-auto" :src="selectedImageUrl" alt="product image" />
                <div class="grid mt-4 gap-2 grid-flow-col auto-cols-auto">
                    <img v-for="imageurl in [product.defaultImageUrl, ...product.additionalImageUrls]"
                         @click="onImageSelected"
                         class="cursor-pointer rounded-lg aspect-square hover:border-2 hover:border-gray-900"
                         :src="imageurl" alt="product image" />
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
