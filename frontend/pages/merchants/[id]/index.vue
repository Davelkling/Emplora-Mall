<script setup lang="ts">
    import { useRoute } from 'vue-router';

    const { id } = useRoute().params;
    const { product } = defineProps(["product"]);

    const store =
    {
        id:1,
        name: 'ACE HARDWARE',
        image: 'ACE_HARDWARE.png',
        category: 'cinema',
    }
    const categories = [
        'All',
        'Outside',
        'Errands',
        'Kitchen',
        'Academics',
        'House',
        'Clean',
    ];
    const products = [
        {
            id: 1,
            name: 'Product 1',
            image: 'product1.png',
            category: 'House',
            price: 10.99,
        },
        {
            id: 2,
            name: 'Product 2',
            image: 'product2.png',
            category: 'Clean',
            price: 15.99,
        },
        {
            id: 3,
            name: 'Product 3',
            image: 'product3.png',
            category: 'Kitchen',
            price: 8.99,
        },
        {
            id: 4,
            name: 'Product 4',
            image: 'product4.png',
            category: 'Academics',
            price: 12.99,
        },
        {
            id: 5,
            name: 'Product 5',
            image: 'product5.png',
            category: 'House',
            price: 9.99,
        },
        {
            id: 6,
            name: 'Product 2',
            image: 'product2.png',
            category: 'Clean',
            price: 14.99,
        },
        {
            id: 7,
            name: 'Product 3',
            image: 'product3.png',
            category: 'Kitchen',
            price: 7.99,
        },
        {
            id: 8,
            name: 'Product 4',
            image: 'product4.png',
            category: 'Academics',
            price: 11.99,
        },
        {
            id: 9,
            name: 'Prqweqeqweq eqeqwe qwe qw eqw qweqeqw eqw',
            image: 'product5.png',
            category: 'House',
            price: 10.99,
        },
    ];

    let isEmpty = ref(false);

    const activeCategory = ref(categories[0]);

    function setActiveCategory(category: string) {
        activeCategory.value = category;
    }

    const filteredProducts = computed(() => {
        if (activeCategory.value === 'All') {
            return products; // Show all products
        } else {
            const filtered = products.filter(product => product.category === activeCategory.value);
            if (filtered.length === 0) {
                isEmpty.value = true; // Set isEmpty to true if no items in active category
            } else {
                isEmpty.value = false;
            }
            return filtered;
        }
    });
</script>
<template>
    <Header />
    <div class="container mx-auto">
        
        <div class="flex flex-col mt-4 mx-4 md:mx-28 justify-center items-center">
            <div class="flex w-full border-t-2 border-gray-500 mt-10"></div>
            <div class=" flex flex-col lg:flex-row justify-center md:justify-evenly">
                <div class="w-full  flex kg:justify-end justify-center">
                    <img :src="`/${store.image}`" alt="" class="" />
                </div>
                <div class="w-full  flex flex-col mt-4">
                    <h1 class="text-3xl font-bold">{{ store.name }}</h1>
                    <p class="text-xl font-semibold mb-4">{{ store.category }}</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    <div class="flex flex-row items-center mt-8">
                        <h1 class="text-lg font-bold w-[20rem]">DAYS OPEN: </h1>
                        <p class="text-md font-semibold text-primary">Monday - Sunday</p>
                    </div>
                    <div class="flex flex-row items-center">
                        <h1 class="text-lg font-bold w-[20rem]">OPENING HOURS: </h1>
                        <p class="text-md font-semibold text-primary">10:00AM - 10:00PM</p>
                    </div>
                    <div class="flex flex-row items-center">
                        <h1 class="text-lg font-bold w-[20rem]">EMAIL ADDRESS: </h1>
                        <p class="text-md font-semibold text-primary">acehardware@gmail.com</p>
                    </div>
                    <div class="flex flex-row items-center">
                        <h1 class="text-lg font-bold w-[20rem]">CONTACT NUMBER: </h1>
                        <p class="text-md font-semibold text-primary">09995599694</p>
                    </div>
                    <div class="flex flex-row items-center">
                        <h1 class="text-lg font-bold w-[20rem]">LOCATION: </h1>
                        <p class="text-md font-semibold text-primary">2nd floor, Main Building</p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-16">
                <div class="flex flex-wrap justify-center items-center gap-4 md:gap-12 py-6 border-2">
                    <div
                        v-for="category in categories"
                        @click="setActiveCategory(category)"
                        class="flex flex-col justify-center items-center text-gray-500 border-b-2 border-white hover:border-b-2 hover:border-gray-500 hover:text-black cursor-pointer"
                        :class="[
                            { 'text-primary': activeCategory === category },
                            { 'hover:text-primary': activeCategory === category },
                            { 'border-b-primary': activeCategory === category }
                        ]"
                    >
                        <button class="text-xl font-semibold">{{ category }}</button>
                    </div>
                </div>
                
            </div>

        </div>
    </div>
    <div class="w-full h-auto mt-4 bg-[#F5F5F5]">
        <div class="container mx-auto">
            <div class="mx-4 md:mx-24 flex flex-wrap justify-start items-center">
                <div v-if="filteredProducts.length === 0 && activeCategory.value !== 'All'" class="w-full flex justify-center items-center">
                    <p>No items</p>
                </div>
                <div
                    v-for="item in filteredProducts"
                    :key="item.id"
                    class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                >
                    <NuxtLink :to="`/products/${item.id}`" class="cursor-pointer">
                        <div class="flex flex-col justify-center bg-white m-2 shadow-sm">
                            <img :src="(`/public/${item.image}`)" class="w-full h-48 object-cover">
                            <div class="m-2 mx-4">
                                <h1 class="text-lg truncate">{{ item.name }}</h1>
                                <h1 class="text-xl text-primary mt-4">₱{{ item.price }}</h1>
                            </div>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>

    <Footer/>
</template>

<style scoped>

</style>