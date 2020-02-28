<template>
  <nav class="font-sans bg-primary-500 sm:bg-transparent text-center flex justify-between sm:py-2">
    <a href="/" class="text-left hidden sm:block">
      <div id="logo" class="flex content-center items-baseline font-semibold text-3xl">
        <div class="text-white px-1 text-4xl">Pre</div>
        <div class="bg-secondary-600 rounded px-2 py-1 font-semibold leading-none">pago</div>
      </div>
    </a>
    <ul
      class="w-full sm:w-auto text-sm font-semibold text-secondary-600 list-none p-0 inline-flex sm:flex items-center"
    >
      <li class="flex-1 sm:flex-none">
        <NuxtLink
          to="/"
          class="inline-block py-2 px-3 hover:text-secondary-500 hover:border-b border-secondary-500"
        >Inicio</NuxtLink>
      </li>
      <li class="flex-1 sm:flex-none">
        <NuxtLink
          to="/escort"
          class="inline-block py-2 px-3 hover:text-secondary-500 hover:border-b border-secondary-500"
        >Escorts</NuxtLink>
      </li>
      <li class="flex-1 sm:flex-none">
        <a href="#" class="inline-block py-2 px-3 hover:text-secondary-500 no-underline">Agencias</a>
      </li>
      <li class="pr-2 flex-1 sd:flex-none">
        <a href="#" class="inline-block py-2 px-3 hover:text-secondary-500 no-underline">FAQs</a>
      </li>
      <li class="pl-2 border-l border-primary-300 hidden md:block">
        <a href="#" class="inline-block py-2 px-3 hover:text-secondary-500 no-underline">Sign Up</a>
      </li>
      <li class="pl-2 border-l border-primary-300 hidden md:block">
        <nuxt-link to="/signup" class="inline-block py-2 px-3 hover:text-secondary-500 no-underline">Registrarse</nuxt-link>
      </li>
      <nuxt-link
        to="/anuncios/publica-gratis"
        class="ripple hidden sm:block bg-secondary-600 rounded hover:bg-secondary-500 text-black font-semibold ml-4 py-2 px-3"
      >Anuncia Aqui</nuxt-link>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style>

</style>