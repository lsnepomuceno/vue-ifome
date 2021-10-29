<template>
  <div class="row justify-center">
    <div
      class="col-12 col-md-6 col-lg-4 rounded-borders"
      :style="{ border: '1px solid #ccc' }"
    >
      <q-layout view="hHh lpR fFf">
        <router-view />

        <q-footer class="bg-white text-dark absolute">
          <FooterToolbar />
        </q-footer>
      </q-layout>
    </div>
  </div>
</template>

<script setup>
import FooterToolbar from './FooterToolbar.vue'
</script>
