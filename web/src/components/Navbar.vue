<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isMenuOpen = ref(false);
</script>

<template>
  <header class="sticky top-0 z-50 w-full bg-brand-surface border-b border-brand-border backdrop-blur-md bg-opacity-90">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- logo -->
      <RouterLink to="/" class="flex items-center gap-1 group text-brand-text">
        <IconPokeball class="w-8 h-8" />
        <span class="text-2xl font-extrabold tracking-wide">
          pokedex<span class="text-brand-emerald">-</span>app
        </span>
      </RouterLink>
      <!-- buscador -->
      <div class="hidden md:flex items-center relative w-72 lg:w-96">
        <span class="absolute left-3 text-brand-muted">
          <IconSearch class="w-4 h-4" />
        </span>
        <input type="text" placeholder="Buscar Pokémon o número..."
          class="w-full bg-brand-abyss text-sm text-brand-text placeholder-brand-muted pl-9 pr-4 py-2 rounded-lg border border-brand-border focus:outline-none focus:border-brand-emerald transition-colors" />
      </div>
      <!-- navegacion -->
      <nav class="hidden md:flex items-center gap-1 sm:gap-2">
        <RouterLink to="/"
          class="px-3 py-2 rounded-lg text-sm font-medium text-brand-muted hover:text-brand-text hover:bg-brand-border/40 transition-all"
          active-class="text-brand-text bg-brand-border/60">
          Inicio
        </RouterLink>
        <RouterLink to="/explorador"
          class="px-3 py-2 rounded-lg text-sm font-medium text-brand-muted hover:text-brand-text hover:bg-brand-border/40 transition-all"
          active-class="text-brand-text bg-brand-border/60">
          Explorador
        </RouterLink>
      </nav>
      <!-- boton para menu movil -->
      <div class="md:hidden flex items-center">
        <button @click="isMenuOpen = true"
          class="p-2 rounded-lg bg-brand-abyss border border-brand-border text-brand-text hover:border-brand-emerald transition-colors focus:outline-none">
          <IconMenu2 class="w-6 h-6" />
        </button>
      </div>
    </div>
  </header>
  <!-- menu lateral movil -->
  <div v-if="isMenuOpen" class="fixed inset-0 z-50 md:hidden flex justify-end">
    <!-- Backdrop oscuro de fondo -->
    <div @click="isMenuOpen = false" class="absolute inset-0 bg-black/60 backdrop-blur-xs"></div>
    <!-- panel lateral desplegable -->
    <div class="relative w-72 max-w-full h-full bg-brand-surface border-l border-brand-border p-5 flex flex-col space-y-6 z-10 shadow-2xl">
      <!-- cabecera del sidebar -->
      <div class="flex items-center justify-between pb-4 border-b border-brand-border">
        <div class="flex items-center gap-1 group text-brand-text">
          <IconPokeball class="w-8 h-8"/>
          <span class="text-xl font-extrabold tracking-wide">
            Navegación
          </span>
        </div>
        <button @click="isMenuOpen = false"
          class="p-1.5 rounded-lg bg-brand-abyss border border-brand-border text-brand-text hover:text-brand-emerald transition-colors">
          <IconX class="w-5 h-5" />
        </button>
      </div>
      <!-- buscador en el menú lateral -->
      <div class="relative w-full">
        <span class="absolute left-3 top-2.5 text-brand-muted">
          <IconSearch class="w-4 h-4" />
        </span>
        <input type="text" placeholder="Buscar Pokémon..."
          class="w-full bg-brand-abyss text-sm text-brand-text placeholder-brand-muted pl-9 pr-4 py-2 rounded-lg border border-brand-border focus:outline-none focus:border-brand-emerald" />
      </div>
      <!-- enlaces de navegación -->
      <nav class="flex flex-col space-y-2">
        <RouterLink to="/" @click="isMenuOpen = false"
          class="px-3 py-2.5 rounded-lg text-sm font-medium text-brand-muted hover:text-brand-text hover:bg-brand-border/40 transition-all"
          active-class="text-brand-text bg-brand-border/60">
          Inicio
        </RouterLink>
        <RouterLink to="/explorador" @click="isMenuOpen = false"
          class="px-3 py-2.5 rounded-lg text-sm font-medium text-brand-muted hover:text-brand-text hover:bg-brand-border/40 transition-all"
          active-class="text-brand-text bg-brand-border/60">
          Explorador
        </RouterLink>
      </nav>
    </div>
  </div>
</template>