<template>
  <q-header reveal class="bg-white text-dark">
    <HeaderToolbar />
  </q-header>

  <q-page-container>
    <router-view />
  </q-page-container>
</template>

<script setup>
import HeaderToolbar from './HeaderToolbar.vue'
</script>
