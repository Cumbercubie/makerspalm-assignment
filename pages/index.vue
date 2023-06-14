<script setup>
const { data } = await useFetch('/api/products');
const products = ref(data.value)
const handleSelectOption = (selectedSortOption) => {
    switch (selectedSortOption) {
        case "PRICE_LOW_TO_HIGH":
            products.value =
                products.value.sort((previous, next) => (previous.price > next.price ? 1 : -1))
            break;
        case "NEWEST":
            products.value =
                products.value.sort((previous, next) =>
                    new Date(previous.createdAt).getTime() > new Date(next.createdAt).getTime()
                        ? 1
                        : -1
                )
    }
};
</script>
<template>
    <Head>
        <Title>SATURN - Products worth your price</Title>
    </Head>
    <main class="mx-auto max-w-screen-xl h-screen">
        <div class="w-full grid grid-cols-1">
            <Select class="justify-self-end" :handleSelectedOption="handleSelectOption" placeholder="Sort by" :items="[
                { name: 'newest', value: 'NEWEST' },
                { name: 'Price: low to high', value: 'PRICE_LOW_TO_HIGH' },
            ]" />
        </div>
        <div class="grid grid-cols-1 gap-4 mt-5 md:grid-cols-2 lg:grid-cols-4">
            <div class="w-full justify-self-center" v-for="product in products" :key="product.id">
                <ProductCard :id="product.id" :title="product.name" :price="product.price" :addedDate="product.createdAt"
                             :defaultImageUrl="product.defaultImageUrl" />
            </div>
        </div>
    </main>
</template>
