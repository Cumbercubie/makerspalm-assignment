<script setup>
import { useProductStore } from "~/stores/products"
const productStore = useProductStore();
const products = productStore.getProducts;
if (!products.getProducts?.length) {
  await useAsyncData('products', () => productStore.fetch())
}
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
