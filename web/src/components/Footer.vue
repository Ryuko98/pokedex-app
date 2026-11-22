<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <footer class="bg-alabaster-700 border-t border-alabaster-600 text-alabaster-200 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      
      <!-- logo -->
      <RouterLink to="/" class="flex items-center gap-1.5 group text-alabaster-50">
        <IconPokeball class="w-6 h-6 text-alabaster-50 transition-transform duration-200 group-hover:scale-105" />
        <span class="text-lg font-bold tracking-wide">
          pokedex<span class="text-alabaster-300">-</span>app
        </span>
      </RouterLink>

      <!-- navegacion -->
      <nav class="flex items-center gap-6 text-sm text-alabaster-200">
        <RouterLink to="/" class="hover:text-alabaster-50 transition-colors">Inicio</RouterLink>
        <RouterLink to="/explorador" class="hover:text-alabaster-50 transition-colors">Explorador</RouterLink>
      </nav>

      <!-- texto minimalista -->
      <p class="text-xs text-alabaster-300">
        Exploración y datos Pokémon.
      </p>

    </div>
  </footer>
</template>