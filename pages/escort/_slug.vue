<template>
  <div class="container mx-auto flex flex-wrap-reverse sm:flex-no-wrap p-4">
    <section class="w-full sm:flex-auto border border-gray-400 rounded sm:mr-2 bg-white">
      <article class="font-sans text-gray-700">
        <div id="header" class="py-3 px-4 flex flex-wrap">
          <h1
            class="text-gray-800 font-semibold text-xl w-full"
          >Honoka 789456123,Lorem ipsum dolor sit amet.</h1>
          <div class="text-xs text-gray-600 w-1/2 md:w-1/4">
            <p>Arequipa - Cercado</p>
            <p>Honoka | 25 años</p>
            <p>31/12/2019 11:45 am</p>
          </div>
          <div
            id="actions"
            class="font-semibold w-1/2 md:w-3/4 self-end flex sm:flex-col sm:align-between md:flex-row justify-end"
          >
            <a
              href="#"
              class="btn inline-flex items-center border rounded border-blue-600 bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 shadow sm:mb-1 md:mb-0"
            >
              <svg viewBox="0 0 24 24" class="fill-current h-5 w-6">
                <path :d="mdiPhone " />
              </svg>
              <span class="mx-1 hidden sm:block">985 456 455</span>
            </a>
            <a
              class="btn text-white inline-flex items-center border border-green-500 bg-green-400 hover:bg-green-500 shadow rounded py-1 px-2 ml-2 sm:ml-0 md:ml-2"
              title="More options"
            >
              <svg viewBox="0 0 24 24" class="fill-current text-white h-5 w-6">
                <path :d="mdiWhatsapp " />
              </svg>
              <span class="mx-1 capitalize hidden sm:block">Whatsapp</span>
            </a>
          </div>
        </div>
        <div id="content" class="text-justify border-t border-gray-400 p-4">
          Etiam eget augue ipsum. Suspendisse potenti. Aenean tempor faucibus sem, eu tincidunt augue fermentum ut. Fusce vitae elit ut ante faucibus fermentum ac quis mauris. Suspendisse eleifend quis leo eget aliquam. Suspendisse ultrices volutpat velit id ullamcorper. Quisque non leo tristique, pulvinar lorem id, consequat mauris. Quisque eu orci molestie, pulvinar lorem quis, sollicitudin enim. Nulla efficitur in turpis eu pharetra. Nulla quis dapibus eros, sit amet cursus libero. Etiam venenatis, diam et condimentum porttitor, velit odio fermentum enim, non porta orci nulla vel mauris. Nullam vel tempor sem, non finibus diam.
          Nulla in consectetur leo, eget consectetur elit. Aliquam mollis lacinia justo nec fringilla. Ut ante dolor, fermentum sit amet tempus eget, lacinia a dui. Aenean vehicula velit a diam mattis viverra. Nunc tincidunt quam eget egestas vestibulum. Cras nibh neque, euismod vel faucibus sed, facilisis eu purus. Vivamus eget ultrices est.
        </div>
        <div id="schelude">
          <h2>Horario</h2>
        </div>
        <div id="gallery">
          <h2>Galeria</h2>
        </div>
        <div id="about">
          <h2>Sobre mi</h2>
        </div>
        <div id="services">
          <span>badge</span>
        </div>
      </article>
    </section>
    <aside
      class="w-full sm:w-2/5 md:w-5/12 sm:flex-none border border-gray-400 rounded p-2 bg-white"
    >
      <img src="https://picsum.photos/600/600?image=15" alt="Dummy Image" class="masonry-content" />
    </aside>
  </div>
</template>

<script>
import { mdiPhone, mdiWhatsapp } from '@mdi/js'
export default {
  layout: 'wide',

  data() {
    return {
      mdiPhone,
      mdiWhatsapp
    }
  }
}
</script>

<style>

</style>