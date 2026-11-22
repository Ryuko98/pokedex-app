<template>
  <section class="space-y-6">
    <!-- Encabezado, Buscador y Botones de Alternancia de Vista -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-brand-border pb-6">
      <div>
        <h2 class="text-2xl font-bold text-brand-text">Pokédex Nacional</h2>
        <p class="text-xs text-brand-muted mt-0.5">Explora y filtra todas las especies registradas</p>
      </div>

      <div class="flex flex-wrap items-center gap-3">
        <!-- Buscador con contador dinámico integrado (visible solo al buscar) -->
        <div class="relative flex items-center">
          <input 
            type="text" 
            v-model="busqueda"
            placeholder="Buscar por nombre o número..." 
            class="bg-brand-surface border border-brand-border text-brand-text text-sm rounded-xl px-4 py-2 pl-9 pr-24 focus:outline-none focus:border-brand-emerald/50 w-72 transition-colors"
          />
          <svg class="w-4 h-4 text-brand-muted absolute left-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>

          <!-- Contador de coincidencias incrustado en el input -->
          <span 
            v-if="busqueda.trim() !== ''" 
            class="absolute right-3 text-[10px] font-mono px-2 py-0.5 rounded-md bg-brand-abyss border border-brand-border text-brand-emerald shadow-sm"
          >
            {{ pokemonFiltrados.length }} {{ pokemonFiltrados.length === 1 ? 'coincidencia' : 'coincidencias' }}
          </span>
        </div>

        <!-- Botones de Vista: Tabla / Tarjetas -->
        <div class="flex items-center bg-brand-surface border border-brand-border rounded-xl p-1">
          <button 
            @click="vista = 'tabla'"
            :class="[
              'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all',
              vista === 'tabla' ? 'bg-brand-emerald text-brand-abyss shadow-sm' : 'text-brand-muted hover:text-brand-text'
            ]"
          >
            <IconTable/>
          </button>
          <button 
            @click="vista = 'tarjetas'"
            :class="[
              'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all',
              vista === 'tarjetas' ? 'bg-brand-emerald text-brand-abyss shadow-sm' : 'text-brand-muted hover:text-brand-text'
            ]"
          >
            <IconLayoutGrid/>
          </button>
        </div>
      </div>
    </div>

    <!-- Estado vacío -->
    <div v-if="pokemonFiltrados.length === 0" class="p-12 text-center rounded-2xl bg-brand-surface border border-brand-border">
      <p class="text-brand-muted text-sm">No se encontraron Pokémon registrados o coincidentes con la búsqueda.</p>
    </div>

    <!-- Renderizado modular condicional según la vista seleccionada -->
    <div v-else>
      <PokemonTable v-if="vista === 'tabla'" :pokemonList="pokemonFiltrados" />
      <PokemonGrid v-else :pokemonList="pokemonFiltrados" />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import PokemonGrid from '@/components/Pokedex/PokemonGrid.vue'
import PokemonTable from '@/components/Pokedex/PokemonTable.vue'

const vista = ref('tarjetas')
const busqueda = ref('')

const pokemonList = ref([
  { id: 1, name: 'bulbasaur', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png', types: ['planta', 'veneno'] },
  { id: 4, name: 'charmander', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png', types: ['fuego'] },
  { id: 7, name: 'squirtle', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png', types: ['agua'] },
  { id: 25, name: 'pikachu', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png', types: ['eléctrico'] },
  { id: 133, name: 'eevee', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png', types: ['normal'] },
  { id: 150, name: 'mewtwo', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png', types: ['psíquico'] }
])

const pokemonFiltrados = computed(() => {
  const query = busqueda.value.toLowerCase().trim()
  if (!query) return pokemonList.value
  
  return pokemonList.value.filter(p => 
    p.name.toLowerCase().includes(query) || 
    String(p.id).includes(query)
  )
})
</script>