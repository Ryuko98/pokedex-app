<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    <PokemonCard
      v-for="pokemon in pokemonList"
      :key="pokemon.id"
      :id="pokemon.id"
      :name="pokemon.name"
      :sprite="pokemon.sprite"
      :types="pokemon.types"
    />
  </div>
</template>

<script setup>
import PokemonCard from '@/components/Pokedex/PokemonCard.vue'

defineProps({
  pokemonList: { type: Array, required: true }
})
</script>