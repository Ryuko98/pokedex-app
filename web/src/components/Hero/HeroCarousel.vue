<script setup>
import HeroBanner from './HeroBanner.vue';
import FeaturingPokemon from './FeaturingPokemon.vue';
</script>

<template>
  <section
    id="hero-carousel"
    data-carousel='{ "loadingClasses": "opacity-0", "dotsItemClasses": "carousel-dot w-2.5 h-2.5 bg-alabaster-700 cursor-pointer transition-colors carousel-active:bg-alabaster-50" }'
    class="relative w-full border-b border-alabaster-800"
  >
    <div class="carousel min-h-104 sm:min-h-112 rounded-none">
      <div class="carousel-body h-full opacity-0">
        <!-- Lámina 1: Bienvenida editorial -->
        <div class="carousel-slide">
          <HeroBanner />
        </div>

        <!-- Lámina 2: Pokémon destacado -->
        <div class="carousel-slide">
          <FeaturingPokemon />
        </div>
      </div>
    </div>

    <!-- Indicadores inferiores sin flechas laterales -->
    <div class="carousel-pagination absolute bottom-4 inset-e-0 inset-s-0 z-10 flex justify-center gap-3"></div>
  </section>
</template>