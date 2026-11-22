<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="min-h-screen bg-alabaster-900 text-alabaster-50 font-sans antialiased selection:bg-alabaster-200 selection:text-alabaster-800 flex flex-col justify-between">
    <Navbar />

    <main class="grow w-full">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>