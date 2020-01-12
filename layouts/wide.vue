<template>
  <div class="flex flex-wrap align-start relative">
    <header class="w-full px-1 sm:px-2 md:px-3 shadow-lg fixed z-30">
      <nav-bar />
    </header>

    <main class="w-full px-1 sm:px-2 md:px-3 mt-16 bg-primary-100">
      <nuxt />
    </main>

    <footer class="w-full px-1 sm:px-2 md:px-3">Footer</footer>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'
  export default {
    name: 'Layout',
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  nav,
  aside {
    @apply bg-primary-500;
  }
  header,
  footer {
    @apply bg-primary-500;
  }
</style>