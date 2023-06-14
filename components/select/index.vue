<script setup lang="ts">
import { PropType } from "vue";

interface ListItem {
    value: String;
    name: String;
}
const props = defineProps({
    items: {
        required: true,
        type: Array as PropType<ListItem[]>,
    },
    placeholder: {
        required: false,
        type: String,
    },
    handleSelectedOption: {
        required: true,
        type: Function,
    },
});
</script>
<template>
    <select id="countries" @change="($event: any) => props.handleSelectedOption($event.target?.value)"
            class="w-max bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>{{ placeholder || "Please choose a value" }}</option>
        <option v-for="item in items" :value="item.value || item">{{ item.name }}</option>
    </select>
</template>
