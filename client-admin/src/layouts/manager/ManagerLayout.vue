<template>
  <div class="">
    <HeaderEnterprise />

    <div class="flex">
      <SliderManager />
      <div class="flex-1 flex flex-col">
        <main class="bg-gray-100 h-[calc(100vh-64px)] p-6">
          <router-view />
        </main>
        
      </div>
    </div>
    <FooterEnterprise />
  </div>
</template>
  
  <script setup>
import FooterEnterprise from "../enterprise/FooterEnterprise.vue";
import HeaderEnterprise from "../enterprise/HeaderEnterprise.vue";
import SliderManager from "./SliderManager.vue";
</script>
  
  <style scoped>
</style>

