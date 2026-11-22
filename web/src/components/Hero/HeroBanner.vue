<script setup>
import { RouterLink } from 'vue-router';

const stats = [
  { label: 'Especies registradas', value: '1,025+', desc: 'Pokédex Nacional' },
  { label: 'Tipos elementales', value: '18', desc: 'Tabla de afinidades' },
  { label: 'Generaciones', value: '9', desc: 'Hasta Paldea' },
  { label: 'Regiones oficiales', value: '10+', desc: 'Mapas y rutas' },
];
</script>

<template>
  <div class="h-full w-full bg-alabaster-950 flex items-center py-10 sm:py-12">
    <div class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between gap-8">
      <div class="max-w-2xl space-y-4">
        <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-alabaster-50 leading-tight">
          Explora la Pokédex <span class="text-alabaster-300">Definitiva</span>
        </h1>
        <p class="text-sm sm:text-base text-alabaster-400 leading-relaxed">
          Consulta estadísticas, generaciones, regiones y mecánicas en una interfaz sobria y directa pensada para entrenar y comparar.
        </p>
        <div class="pt-1">
          <RouterLink
            to="/explorador"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-alabaster-50 text-alabaster-950 hover:bg-alabaster-200 transition-colors"
          >
            <span>Abrir explorador</span>
            <IconArrowRight class="w-4 h-4" />
          </RouterLink>
        </div>
      </div>

      <!-- Estadísticas de FlyonUI adaptadas a Alabaster -->
      <div class="stats max-sm:stats-vertical bg-alabaster-900/70 border border-alabaster-800 text-alabaster-50 w-full">
        <div
          v-for="item in stats"
          :key="item.label"
          class="stat border-alabaster-800"
        >
          <div class="stat-title text-alabaster-400 text-xs">{{ item.label }}</div>
          <div class="stat-value text-alabaster-50 text-2xl sm:text-3xl font-bold">{{ item.value }}</div>
          <div class="stat-desc text-alabaster-400 text-xs">{{ item.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>