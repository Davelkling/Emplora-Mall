<script setup lang="ts">
  let isLogin = ref(false);
</script>



<template>
  <header class="p-1 px-3 pt-2 border-b-2 border-b-black border-opacity-50 ">
    <div class="container mx-auto flex justify-between items-center ">
      <!-- Desktop -->
      <div class="hidden md:block w-full py-2 mx-20">
        <nav v-if="!isLogin" class="hidden md:flex justify-between items-center gap-8">
          <NuxtLink to="/" class="flex gap-3 items-center">
            <img src="/logo.svg" class="h-12 w-12 " alt="" />
            <h1 class="text-primary text-2xl font-bold">Emplora Mall</h1>
          </NuxtLink>
          <div class="flex justify-center items-center gap-8">
            <NuxtLink class="text-lg font-semibold text-[#2F414F] hover:bg-gray-100 rounded-3xl p-2 px-4 cursor-pointer">
              Sign In
            </NuxtLink>
            <NuxtLink to="/signup/customer" class="border-2 border-primary py-0.5 px-3.5 rounded-md text-primary font-semibold text-lg hover:bg-primary hover:text-[#F1F1EF] cursor-pointer">
              Sign Up
            </NuxtLink>
          </div>
        </nav>

        <nav v-else-if="isLogin" class="hidden md:block">
          <div class="flex justify-around items-center gap-8 w-full">
            <NuxtLink to="/" class="flex gap-3 items-center">
              <img src="/logo.svg" class="h-12 w-12" alt="" />
              <h1 class="text-primary text-2xl font-bold">Emplora Mall</h1>
            </NuxtLink>
            <div class="flex gap-8">
              <NuxtLink to="client/profile" class="text-lg font-semibold text-[#2F414F] hover:bg-gray-100 rounded-3xl p-2 px-4 cursor-pointer">
                Profile
              </NuxtLink>
              <NuxtLink class="text-lg font-semibold text-[#2F414F] hover:bg-gray-100 rounded-3xl p-2 px-4 cursor-pointer">
                Search
              </NuxtLink>
              <NuxtLink class="text-lg font-semibold text-[#2F414F] hover:bg-gray-100 rounded-3xl p-2 px-4 cursor-pointer">
                Contract
              </NuxtLink>
            </div>
            <div class="flex">
              <NuxtLink class="text-lg font-semibold text-[#2F414F] hover:bg-gray-100 rounded-3xl p-2 px-4 cursor-pointer">
                Become a Talent
              </NuxtLink>
              <NuxtLink class="">
                <img src="/profilesample.jpg" class="h-12 w-12 rounded-full cursor-pointer" alt="" />
              </NuxtLink>
            </div>
          </div>
        </nav>
      </div>

      <!-- Mobile -->
      <div class="block md:hidden w-full">
        <div class="flex justify-between items-center">
          <NuxtLink to="/">
            <button>
              <img src="/logo.svg" class="h-12 w-12" alt="" />
            </button>
          </NuxtLink>
          <button v-if="!isLogin">
            <span class="material-symbols-outlined text-primary text-5xl">account_circle</span>
          </button>
          <button v-else-if="isLogin">
            <img src="/profilesample.jpg" class="h-12 w-12 rounded-full cursor-pointer" alt="" />
          </button>
        </div>
      </div>

    </div>
  </header>
</template>

<style scoped>
/* Add any additional styles here */
</style>
