<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isMenuOpen = ref(false);
</script>

<template>
  <header class="sticky top-0 z-50 w-full bg-alabaster-950/90 border-b border-alabaster-800/80 backdrop-blur-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- logo -->
      <RouterLink to="/" class="flex items-center gap-1.5 group text-alabaster-50">
        <IconPokeball class="w-8 h-8 " />
        <span class="text-2xl font-extrabold tracking-wide">
          pokedex<span class="text-alabaster-400">-</span>app
        </span>
      </RouterLink>

      <!-- buscador -->
      <div class="hidden md:flex items-center relative w-72 lg:w-96">
        <span class="absolute left-3 text-alabaster-400">
          <IconSearch class="w-4 h-4" />
        </span>
        <input
          type="text"
          placeholder="Buscar Pokémon o número..."
          class="w-full bg-alabaster-900 text-sm text-alabaster-50 placeholder-alabaster-400 pl-9 pr-4 py-2 rounded-lg border border-alabaster-800 focus:outline-none focus:border-alabaster-500 transition-colors"
        />
      </div>

      <!-- navegacion -->
      <nav class="hidden md:flex items-center gap-2">
        <RouterLink
          to="/"
          aria-label="Inicio"
          title="Inicio"
          class="p-2 rounded-full flex items-center justify-center text-alabaster-400 bg-alabaster-900 hover:text-alabaster-50 hover:bg-alabaster-800 transition-colors duration-150 focus:outline-none"
          active-class="text-alabaster-50 bg-alabaster-800"
        >
          <IconHome/>
        </RouterLink>
        <RouterLink
          to="/explorador"
          aria-label="Explorador"
          title="Explorador"
          class="p-2 rounded-full flex items-center justify-center text-alabaster-400 bg-alabaster-900 hover:text-alabaster-50 hover:bg-alabaster-800 transition-colors duration-150 focus:outline-none"
          active-class="text-alabaster-50 bg-alabaster-800"
        >
          <IconList/>
        </RouterLink>
      </nav>

      <!-- boton para menu movil -->
      <div class="md:hidden flex items-center">
        <button
          @click="isMenuOpen = true"
          class="p-2 rounded-lg bg-alabaster-900 border border-alabaster-800 text-alabaster-50 hover:border-alabaster-600 transition-colors focus:outline-none"
        >
          <IconMenu2 class="w-6 h-6" />
        </button>
      </div>
    </div>
  </header>

  <!-- menu lateral movil -->
  <div v-if="isMenuOpen" class="fixed inset-0 z-50 md:hidden flex justify-end">
    <!-- Backdrop oscuro de fondo -->
    <div @click="isMenuOpen = false" class="absolute inset-0 bg-alabaster-950/75 backdrop-blur-xs"></div>

    <!-- panel lateral desplegable -->
    <div class="relative w-72 max-w-full h-full bg-alabaster-900 border-l border-alabaster-800 p-5 flex flex-col space-y-6 z-10 shadow-2xl">
      <!-- cabecera del sidebar -->
      <div class="flex items-center justify-between pb-4 border-b border-alabaster-800">
        <div class="flex items-center gap-1.5 group text-alabaster-50">
          <IconPokeball class="w-8 h-8 text-alabaster-50" />
          <span class="text-xl font-extrabold tracking-wide">
            Navegación
          </span>
        </div>
        <button
          @click="isMenuOpen = false"
          class="p-1.5 rounded-lg bg-alabaster-950 border border-alabaster-800 text-alabaster-400 hover:text-alabaster-50 hover:border-alabaster-600 transition-colors"
        >
          <IconX class="w-5 h-5" />
        </button>
      </div>

      <!-- buscador en el menú lateral -->
      <div class="relative w-full">
        <span class="absolute left-3 top-2.5 text-alabaster-400">
          <IconSearch class="w-4 h-4" />
        </span>
        <input
          type="text"
          placeholder="Buscar Pokémon..."
          class="w-full bg-alabaster-950 text-sm text-alabaster-50 placeholder-alabaster-400 pl-9 pr-4 py-2 rounded-lg border border-alabaster-800 focus:outline-none focus:border-alabaster-500 transition-colors"
        />
      </div>

      <!-- enlaces de navegación -->
      <nav class="flex flex-col space-y-2">
        <RouterLink
          to="/"
          @click="isMenuOpen = false"
          class="px-3 py-2.5 rounded-lg text-sm font-medium text-alabaster-400 hover:text-alabaster-50 hover:bg-alabaster-950 transition-all"
          active-class="text-alabaster-50 bg-alabaster-950 border border-alabaster-800"
        >
          Inicio
        </RouterLink>
        <RouterLink
          to="/explorador"
          @click="isMenuOpen = false"
          class="px-3 py-2.5 rounded-lg text-sm font-medium text-alabaster-400 hover:text-alabaster-50 hover:bg-alabaster-950 transition-all"
          active-class="text-alabaster-50 bg-alabaster-950 border border-alabaster-800"
        >
          Explorador
        </RouterLink>
      </nav>
    </div>
  </div>
</template>