<template>
  <q-header reveal class="bg-white text-dark absolute">
    <HeaderToolbar />
  </q-header>

  <q-page-container>
    <HighlightsCategories />
  </q-page-container>
</template>

<script setup>
import HeaderToolbar from './HeaderToolbar.vue'
import HighlightsCategories from './HighlightsCategories.vue'
</script>
