<script setup>
const props = defineProps({
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    addedDate: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    defaultImageUrl: {
        type: String,
        required: true,
    }
})
const currentDate = new Date();
const productDate = new Date(props.addedDate)
const dateDiff = Math.floor((currentDate.getTime() - productDate.getTime()) / (1000 * 60 * 60 * 24));
</script>
<template>
    <nuxt-link :to="`/${id}`">
        <div
             class="w-full cursor-pointer hover:bg-gray-100 sm:w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="rounded-t-lg w-full h-auto sm:w-full overflow-hidden">
                <img :src="defaultImageUrl" alt="product image" />
            </div>
            <div class="px-2 mt-5">
                <a href="#">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ title }}</h5>
                </a>
                <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 mt-2 mb-4 items-center justify-between">
                    <span class="text-gray-900">{{ dateDiff > 0 ? `Added ${dateDiff} day(s) ago` : dateDiff == 0 ?
                        "Added today" : `Coming soon in ${Math.abs(dateDiff)} day(s)` }}</span>
                    <span class="text-3xl font-bold text-gray-900 dark:text-white justify-self-end  ">${{ price }}</span>
                </div>
            </div>
        </div>
    </nuxt-link>
</template>