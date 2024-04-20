<script setup lang="ts">
    import { useRoute } from 'vue-router';

    const { id } = useRoute().params;
</script>

<template>
    <div>
        <Header/>
        <h1>{{ id }}</h1>

    </div>
</template>

<style scoped>

</style>