<script setup>
import MyNavbar from './components/MyNavbar.vue';
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <my-navbar />
  <main class="dark:bg-vee-bg-dark px-8 h-[90vh] bg-gray-100 m-0">
    <RouterView />
  </main>
</template>
