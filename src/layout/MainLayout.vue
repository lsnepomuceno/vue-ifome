<template>
  <q-layout view="hHh lpR fFf">
    <router-view />

    <q-footer class="bg-white text-dark">
      <FooterToolbar />
    </q-footer>
  </q-layout>
</template>

<script setup>
import FooterToolbar from './FooterToolbar.vue'
</script>
