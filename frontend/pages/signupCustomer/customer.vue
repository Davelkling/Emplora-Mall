<script setup lang="ts">
    import { reactive } from "vue";
    const formDataRegister = reactive({
    email: "",
    password: "",
    confirmPassword: "",
    });
    async function handler() {}
</script>

<template>
    <div class="">
        <header class=" p-1 px-3 pt-2 border-b-2 border-b-black border-opacity-50 bg-white">
            <div class="container mx-auto flex justify-between items-center ">
                <div class="w-full flex justify-between items-center mx-20 py-2">
                    <NuxtLink to="/" class="flex gap-3 items-center">
                        <img src="/logo.svg" class="h-12 w-12" alt="" />
                        <h1 class="text-primary text-2xl font-bold">Emplora Mall</h1>
                    </NuxtLink>
                </div>
            </div>
        </header>
        <div class="container mx-auto flex justify-evenly items-center">

            <div class="w-full flex flex-col justify-center items-center gap-4">
                <div class="text-xl font-medium">
                    Sign up as a 
                    <span class="text-[#7BBCD5] font-bold mb-2">Customer</span>
                </div>
                <div>
                    <h1>Email</h1>
                    <input
                    v-model="formDataRegister.email"
                    placeholder="Email"
                    class="border-2 rounded-lg py-1 px-2 border-[#7BBCD5] w-80"
                    />
                </div>
                <div>
                    <h1>Password</h1>
                    <input
                    v-model="formDataRegister.password"
                    type="password"
                    placeholder="Password"
                    class="border-2 rounded-lg py-1 px-2 border-[#7BBCD5] w-80"
                    />
                </div>
                <div>
                    <h1>Confirm Password</h1>
                    <input
                    v-model="formDataRegister.confirmPassword"
                    type="password"
                    placeholder="Password"
                    class="border-2 rounded-lg py-1 px-2 border-[#7BBCD5] w-80"
                    />
                </div>
                <button
                    @click="handler"
                    type="button"
                    class="mt-4 w-80 h-12 bg-[#7BBCD5] rounded-[0.5rem] text-white font-bold text-xl"
                    >
                    Sign Up
                </button>
                <h1 class="text-md">
                    Already have an account? <NuxtLink to="/signin/customer" class="font-bold text-[#7BBCD5] cursor-pointer">Log in here</NuxtLink>
                </h1>
            </div>
            <div class="flex flex-col justify-center items-center h-[38.60rem] w-full bg-gradient-to-t from-[#00878A] to-transparent bg-opacity-50">
                <img src="/public/emploraBTM.png" class="h-full w-full">
                <NuxtLink to="/signup/store" class="bottom-1 absolute mb-40 bg-white py-2 px-6 rounded-md text-[#00878A] font-semibold text-lg hover:bg-[#00878A] hover:text-[#F1F1EF] cursor-pointer">
                    <h1>Create your own Store!</h1>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>