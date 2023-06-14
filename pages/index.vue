<script setup>
// const { data: products } = await useFetch('https://mp-ecommerce-test-36ayz.ondigitalocean.app/products')
const products = [{
    id: 1,
    name: 'Supreme Flex Hoodie',
    price: 9.99,
    createdAt: '2023-01-01',
    defaultImageUrl: 'https://mp-files.nyc3.cdn.digitaloceanspaces.com/products/1/0C7277EF-A535-4C61-933D-6A71B80C84D0'
},
{
    id: 2,
    name: 'Diamond Sparkle Earrings',
    price: 19.99,
    createdAt: '2023-02-01',
    defaultImageUrl: 'https://mp-files.nyc3.cdn.digitaloceanspaces.com/products/2/2AFB5794-4E1D-4F24-93D2-838A5D0D717B'
},
{
    id: 3,
    name: 'Swift Lightning Running Shoes',
    price: 14.99,
    createdAt: '2023-03-01',
    defaultImageUrl: 'https://mp-files.nyc3.cdn.digitaloceanspaces.com/products/3/2E1C2F46-DB9B-4EFE-8EDA-BFAC901BBE04'
},
{
    id: 4,
    name: 'Luna Bliss Facial Cleanser',
    price: 29.99,
    createdAt: '2023-04-01',
    defaultImageUrl: 'https://mp-files.nyc3.cdn.digitaloceanspaces.com/products/4/47FC6B11-2B08-458E-B1ED-B2500459B52E'
},
{
    id: 5,
    name: 'Elite Pro Gaming Mouse',
    price: 19.99,
    createdAt: '2022-05-01',
    defaultImageUrl: 'https://mp-files.nyc3.cdn.digitaloceanspaces.com/products/5/0F719391-C94E-4F1E-A774-890B74A9F41C'
},
{
    id: 6,
    name: 'Organic Harvest Granola Bars',
    price: 9.99,
    createdAt: '2023-06-01',
    defaultImageUrl: 'https://mp-files.nyc3.cdn.digitaloceanspaces.com/products/6/10858E66-3370-41E1-A81F-1F41863A1029'
},
{
    id: 7,
    name: 'Zenith Pro Yoga Mat',
    price: 64.99,
    createdAt: '2023-07-01',
    defaultImageUrl: 'https://mp-files.nyc3.cdn.digitaloceanspaces.com/products/7/0FB64ABB-7E26-4340-826F-3BCF085119D2'
},
{
    id: 8,
    name: 'Stellar Galaxy Telescope',
    price: 9.99,
    createdAt: '2023-08-01',
    defaultImageUrl: 'https://mp-files.nyc3.cdn.digitaloceanspaces.com/products/8/04BD2D05-2693-4C82-B000-9811F1B7C2BA'
}]
</script>
<template>
    <main class="mx-auto max-w-screen-xl h-screen bg-red-100 gap-4">

        <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            <div v-for="product in products">
                <!-- <h1>{{ product.name }}</h1> -->
                <ProductCard :id="product.id" :title="product.name" :price="product.price" :addedDate="product.createdAt"
                             :defaultImageUrl="product.defaultImageUrl" />
            </div>
        </div>
    </main>
</template>