<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="min-h-screen bg-brand-abyss text-brand-text font-sans antialiased selection:bg-brand-emerald selection:text-brand-abyss">
    <Navbar/>

    <main>
      <RouterView/>
    </main>
    <Footer/>
  </div>
</template>