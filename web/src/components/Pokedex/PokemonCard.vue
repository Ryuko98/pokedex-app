<template>
  <div class="group relative flex flex-col items-center p-4 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-emerald/50 hover:bg-brand-surface/80 transition-all duration-300 shadow-md">
    <!-- ID del Pokémon (Número de Pokédex) -->
    <span class="absolute top-3 left-3 text-xs font-mono text-brand-muted group-hover:text-brand-emerald transition-colors">
      #{{ formattedId }}
    </span>

    <!-- Sprite / Imagen del Pokémon -->
    <div class="w-24 h-24 my-2 flex items-center justify-center">
      <img 
        :src="sprite" 
        :alt="name" 
        class="w-full h-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
        loading="lazy"
      />
    </div>

    <!-- Nombre -->
    <h3 class="font-bold text-brand-text text-base capitalize group-hover:text-brand-emerald transition-colors">
      {{ name }}
    </h3>

    <!-- Types / Badges de tipo -->
    <div class="flex items-center gap-1.5 mt-2">
      <span 
        v-for="type in types" 
        :key="type"
        class="px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-brand-abyss border border-brand-border text-brand-muted"
      >
        {{ type }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  sprite: { type: String, required: true },
  types: { type: Array, default: () => [] }
})

// Formatea el ID a estilo #0001
const formattedId = computed(() => {
  return String(props.id).padStart(4, '0')
})
</script>