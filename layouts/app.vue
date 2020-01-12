<template>
  <div class="flex flex-wrap align-start">
    <header class="w-full">Header</header>
    <nav class="w-full lg:w-1/6">Nav</nav>

    <main class="w-full md:w-3/4 lg:w-4/6 bg-pink-100 min-h-screen">
      <nuxt />
    </main>
    <aside class="w-full md:w-1/4 lg:w-1/6 text-primary">sidebar</aside>

    <footer class="font-sans bg-secondary text-white w-full">Footer</footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
nav,
aside {
  @apply bg-blue-200;
}
header,
footer {
  @apply bg-yellow-300 h-16;
}
header,
footer,
article,
nav,
aside,
main {
  @apply p-3;
}
</style>