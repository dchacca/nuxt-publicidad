<template>
  <div class="flex flex-col bg-primary-100">
    <div id="header" class="text-primary-300">
      <div class="border-primary-400 border-b bg-primary-900 hidden sm:block">
        <header class="container mx-auto">
          <nuxt name="top" />
        </header>
      </div>
      <div class="bg-primary-600 w-full shadow-xl">
        <div class="container mx-auto">
          <div class="sm:hidden">Vuala</div>
          <nav
            class="font-sans bg-primary-500 sm:bg-transparent text-center flex justify-between sm:py-4"
          >
            <a href="/" class="text-left hidden sm:block">
              <img
                src="https://stitches.hyperyolo.com/images/logo.png"
                class="h-10 rounded-full"
                alt="logo"
              />
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
                <a
                  href="#"
                  class="inline-block py-2 px-3 hover:text-secondary-500 no-underline"
                >Agencias</a>
              </li>
              <li class="pr-2 flex-1 sd:flex-none">
                <a
                  href="#"
                  class="inline-block py-2 px-3 hover:text-secondary-500 no-underline"
                >FAQs</a>
              </li>
              <li class="pl-2 border-l border-primary-300 hidden md:block">
                <a
                  href="#"
                  class="inline-block py-2 px-3 hover:text-secondary-500 no-underline"
                >Entrar</a>
              </li>
              <button
                class="ripple hidden sm:block bg-secondary-600 rounded hover:bg-secondary-500 text-black font-semibold ml-4 py-2 px-3"
              >Anuncia Aqui</button>
            </ul>
          </nav>
        </div>
        <div class="hidden container mx-auto bg-primary-400"></div>
      </div>
    </div>

    <nuxt />

    <div id="footer" class="bg-secondary-900 text-error">
      <div class="container mx-auto">Footer</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LayoutApp'
}
</script>

<style>

</style>