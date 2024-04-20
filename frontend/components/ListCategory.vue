<script setup lang="ts">
import { ref } from 'vue';

const categories = [
    'cinema',
    'dining',
    'entertainment',
    'gadgets',
    'services',
    'shopping',
];

const stores = [
    {
        id:1,
        name: 'Product 1',
        image: 'ACE_HARDWARE.png',
        category: 'cinema',
    },
    {
        id:2,
        name: 'Product 2',
        image: 'ACE_HARDWARE.png',
        category: 'cinema',
    },
    {
        id:3,
        name: 'Product 3',
        image: 'ACE_HARDWARE.png',
        category: 'dining',
    },
    {
        id:4,
        name: 'Product 4',
        image: 'ACE_HARDWARE.png',
        category: 'dining',
    },
    {
        id:5,
        name: 'Product 5',
        image: 'ACE_HARDWARE.png',
        category: 'entertainment',
    },
    {
        id:6,
        name: 'Product 6',
        image: 'ACE_HARDWARE.png',
        category: 'entertainment',
    },
    {
        id:7,
        name: 'Product 7',
        image: 'ACE_HARDWARE.png',
        category: 'gadgets',
    },
    {
        id:8,
        name: 'Product 8',
        image: 'ACE_HARDWARE.png',
        category: 'gadgets',
    },
    {
        id:9,
        name: 'Product 9',
        image: 'ACE_HARDWARE.png',
        category: 'services',
    },
    {
        id:10,
        name: 'Product 10',
        image: 'ACE_HARDWARE.png',
        category: 'services',
    },
    {
        id:11,
        name: 'Product 11',
        image: 'ACE_HARDWARE.png',
        category: 'shopping',
    },
    {
        id:12,
        name: 'Product 12',
        image: 'ACE_HARDWARE.png',
        category: 'shopping',
    },
];

const activeCategory = ref(categories[0]);

function setActiveCategory(category: string) {
    activeCategory.value = category;
}
</script>

<template>
    <div class="container mx-auto">
        <div class="flex flex-wrap justify-center items-center gap-12 py-6">
            <div v-for="category in categories" @click="setActiveCategory(category)" class="flex  flex-col justify-center items-center text-gray-500 border-b-2 border-white hover:border-b-2 hover:border-gray-500 hover:text-black cursor-pointer" :class="[{'text-primary': activeCategory === category}, {'hover:text-primary': activeCategory === category},{'hover:border-b-primary': activeCategory === category},{'border-b-primary': activeCategory === category}]">
                <img :src="`${category.toLowerCase()}.jpg`" class="w-32 h-22 rounded-md " :class="[{'border-4': activeCategory === category},{'border-primary': activeCategory === category}]"/>
                <!-- <button @click="setActiveCategory(category)" class="text-sm font-semibold">{{ category }}</button> -->
            </div>
        </div>  
        <div class="border-2 flex justify-start items-center ml-44 mr-44">
            <div v-for="s in stores" class="">
                <!-- {{ activeCategory }} -->
                <div v-if="s.category == activeCategory">
                    <NuxtLink :to="`/merchants/${s.id}`" :key="s.id" class="flex flex-col justify-center border-2 items-center cursor-pointer p-3 m-3 ">
                        <img :src="`${s.image}`" class="w-40 h-40">
                        {{ s.name }}

                        <!-- <ProductCard :stores="s" /> -->
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>