<script setup>
  let isLoginClient = ref(true);
  let isLoginTalent = ref(false);
</script>

<template>
    <div class="bottom-0 w-full block md:hidden fixed">
        <nav class="bg-white">
            <div class="flex items-center justify-center h-18 ">
                <div v-if="!isLoginClient && !isLoginTalent" class="flex gap-32">
                    <NuxtLink to="search" class="flex flex-col items-center justify-between">
                        <span class="material-symbols-outlined text-3xl">search</span>
                        <p>Search</p>
                    </NuxtLink>
                    <NuxtLink class="flex flex-col items-center justify-center" style="text-align: center;">
                        <span class="material-symbols-outlined">add_circle</span>
                        <p>Proposal</p>
                    </NuxtLink>
                </div>
                <div v-else-if="isLoginClient" class="flex justify-between w-full px-4">
                    <NuxtLink class="flex flex-col items-center justify-center">
                        <span class="material-symbols-outlined text-3xl ">person</span>
                        <p>Profile</p>
                    </NuxtLink>
                    <NuxtLink class="flex flex-col items-center justify-center">
                        <span class="material-symbols-outlined text-3xl">search</span>
                        <p>Search</p>
                    </NuxtLink>
                    <NuxtLink class="flex flex-col items-center justify-center">
                        <span class="material-symbols-outlined">add_circle</span>
                        <p>Proposal</p>
                    </NuxtLink>
                    <NuxtLink class="flex flex-col items-center justify-center">
                        <span class="material-symbols-outlined">contract</span>
                        <p>Contract</p>
                    </NuxtLink>
                    <NuxtLink class="flex flex-col items-center justify-center">
                        <span class="material-symbols-outlined">notifications</span>
                        <p>Alert</p>
                    </NuxtLink>
                </div>
                <div v-else-if="isLoginTalent" class="flex justify-between w-full px-4">
                    <NuxtLink class="flex flex-col items-center justify-between">
                        <span class="material-symbols-outlined text-3xl ">person</span>
                        <p>Profile</p>
                    </NuxtLink>
                    <NuxtLink class="flex flex-col items-center justify-center">
                        <span class="material-symbols-outlined text-3xl">search</span>
                        <p>Search</p>
                    </NuxtLink>
                    <NuxtLink class="flex flex-col items-center justify-center">
                        <span class="material-symbols-outlined">add_circle</span>
                        <p>Proposal</p>
                    </NuxtLink>
                    <NuxtLink class="flex flex-col items-center justify-center">
                        <span class="material-symbols-outlined">contract</span>
                        <p>Contract</p>
                    </NuxtLink>
                    <NuxtLink class="flex flex-col items-center justify-center">
                        <span class="material-symbols-outlined">notifications</span>
                        <p>Alert</p>
                    </NuxtLink>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>

</style>