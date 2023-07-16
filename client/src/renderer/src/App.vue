<script setup lang="ts">
import Navbar from '@renderer/components/Navbar.vue'
import Footer from '@renderer/components/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <Suspense>
    <main class="flex flex-col h-screen justify-between">
      <section>
        <Navbar />
        <RouterView />
      </section>
      <Footer />
    </main>
  </Suspense>
</template>

<style lang="scss">
@import './assets/stylesheets/reset.scss';
</style>
