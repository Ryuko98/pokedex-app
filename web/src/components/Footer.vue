<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <footer class="bg-brand-surface border-t border-brand-border text-brand-muted mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      
      <!-- logo -->
      <RouterLink to="/" class="flex items-center gap-1 group text-brand-text">
        <IconPokeball class="w-6 h-6" />
        <span class="text-lg font-bold tracking-wide">
          pokedex<span class="text-brand-emerald">-</span>app
        </span>
      </RouterLink>

      <!-- navegacion -->
      <nav class="flex items-center gap-6 text-sm">
        <RouterLink to="/" class="hover:text-brand-text transition-colors">Inicio</RouterLink>
        <RouterLink to="/explorador" class="hover:text-brand-text transition-colors">Explorador</RouterLink>
      </nav>

      <!-- texto minimalista -->
      <p class="text-xs text-brand-muted">
        Exploración y datos Pokémon.
      </p>

    </div>
  </footer>
</template>