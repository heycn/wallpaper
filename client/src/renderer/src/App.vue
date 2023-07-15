<script setup lang="ts">
import Navbar from '@renderer/components/Navbar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <Suspense>
    <main>
      <Navbar />
      <RouterView />
    </main>
  </Suspense>
</template>

<style lang="scss">
@import './assets/stylesheets/reset.scss';
</style>
