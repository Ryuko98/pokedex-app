<template>
  <div class="rounded-2xl bg-brand-surface border border-brand-border overflow-hidden shadow-md">
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="border-b border-brand-border bg-brand-abyss/40 text-brand-muted text-xs uppercase tracking-wider">
            <th class="py-3.5 px-4 font-semibold">Imagen</th>
            <th class="py-3.5 px-4 font-semibold">N°</th>
            <th class="py-3.5 px-4 font-semibold">Nombre</th>
            <th class="py-3.5 px-4 font-semibold">Tipos</th>
            <th class="py-3.5 px-4 font-semibold text-right pr-6">Acción</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-brand-border/60">
          <tr v-for="pokemon in pokemonList" :key="pokemon.id" class="hover:bg-brand-abyss/30 transition-colors">
            <td class="py-3 px-4">
              <div class="w-12 h-12 rounded-xl bg-brand-abyss border border-brand-border flex items-center justify-center p-1">
                <img :src="pokemon.sprite" :alt="pokemon.name" class="w-full h-full object-contain" />
              </div>
            </td>
            <td class="py-3 px-4 font-mono text-xs text-brand-muted">#{{ String(pokemon.id).padStart(4, '0') }}</td>
            <td class="py-3 px-4 font-bold text-brand-text capitalize">{{ pokemon.name }}</td>
            <td class="py-3 px-4">
              <div class="flex items-center gap-1.5">
                <span v-for="type in pokemon.types" :key="type" class="px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-brand-abyss border border-brand-border text-brand-muted">
                  {{ type }}
                </span>
              </div>
            </td>
            <td class="py-3 px-4 text-right pr-6">
              <router-link :to="`/pokemon/${pokemon.id}`" class="inline-flex items-center px-3 py-1.5 rounded-lg bg-brand-abyss border border-brand-border text-xs text-brand-text hover:border-brand-emerald hover:text-brand-emerald transition-colors">
                Ver detalle
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
defineProps({
  pokemonList: { type: Array, required: true }
})
</script>