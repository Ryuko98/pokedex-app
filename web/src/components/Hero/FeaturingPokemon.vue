<script setup>
defineProps({
  pokemon: {
    type: Object,
    default: () => ({
      dexNumber: '#384',
      name: 'Rayquaza',
      summary: 'Habita en la capa de ozono y rara vez desciende a la superficie; una presencia clásica de gran altitud.',
      types: ['Dragón', 'Volador'],
      sprite: '', // Puedes pasar aquí la URL o import del sprite/arte cuando quieras mostrarlo
    }),
  },
});
</script>

<template>
  <div class="w-full bg-alabaster-900/50 flex items-start md:items-center pt-8 pb-6 sm:py-12">
    <div class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 items-start md:items-center gap-6 md:gap-8">
      <div class="md:col-span-7 space-y-3 sm:space-y-4">
        <p class="text-xs uppercase tracking-widest text-alabaster-400">
          Pokémon Destacado · {{ pokemon.dexNumber }}
        </p>
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-alabaster-50">
          {{ pokemon.name }}
        </h2>
        <p class="text-sm sm:text-base text-alabaster-400 max-w-xl leading-relaxed">
          {{ pokemon.summary }}
        </p>
        <!-- Etiquetas uniformes en escala Alabaster -->
        <div class="flex flex-wrap items-center gap-2 pt-1">
          <span
            v-for="type in pokemon.types"
            :key="type"
            class="px-3 py-1 rounded-md text-xs font-medium bg-alabaster-900 text-alabaster-200 border border-alabaster-800"
          >
            {{ type }}
          </span>
        </div>
      </div>

      <div class="md:col-span-5 flex items-center justify-center md:justify-end pt-1 md:pt-0">
        <img
          v-if="pokemon.sprite"
          :src="pokemon.sprite"
          :alt="pokemon.name"
          class="max-h-40 sm:max-h-64 w-auto object-contain select-none"
        />
        <div
          v-else
          class="h-28 w-28 sm:h-44 sm:w-44 flex items-center justify-center text-alabaster-600"
        >
          <IconPokeball class="w-16 h-16 sm:w-24 sm:h-24 stroke-[1.25]" />
        </div>
      </div>
    </div>
  </div>
</template>