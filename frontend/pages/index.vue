<script setup lang="ts">

</script>
  <!-- #2F414F #00ADB5 #F1F1EF #C7DAD4 #111419 -->
<template>
  <main class="">
    <Header />
    <section class="min-h-svh">

     <FloorPlan/>
      <div class="flex justify-center items-center">
        <input
          type="text"
          class="w-[48rem]  border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Search..."
        />
        <button
          class="ml-4 bg-primary text-white rounded-md px-4 py-2 hover:bg-primary-dark transition-colors duration-300"
        >
          Search
        </button>
      </div>
      <ListCategory />
    </section>
    
    <Footer />
    <NavBar/> 

  </main>
</template>

<style scoped></style>
