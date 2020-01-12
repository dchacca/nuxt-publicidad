<template>
  <div class="card">
    <!-- ... additional primary action content ... -->
    <div class="card-primary-action">
      <div id="card-media" class="relative">
        <img :src="item.url" alt="Dummy Image" class />
        <div id="top-actions" class="absolute top-0 right-0 z-20 mt-2 mr-2">
          <button class="material-icons text-white hover:text-blue-500" title="Share">
            <svg viewBox="0 0 24 24" class="fill-current h-5 w-5">
              <path :d="mdiShareVariant " />
            </svg>
          </button>
          <button
            class="material-icons icon-button text-white hover:text-red-500"
            title="Favoritos"
          >
            <svg viewBox="0 0 24 24" class="fill-current h-6 w-6">
              <path :d="mdiHeart " />
            </svg>
          </button>
        </div>

        <div id="card-media-content" class="flex items-end absolute top-0 bottom-0 left-0 right-0">
          <div id="card-primary" class="p-2 text-white">
            <h2 class="font-bold text-base font-sans">
              <nuxt-link to="/escort/honoka">Honoka</nuxt-link>

              <span class="text-xs">(21 years old)</span>
            </h2>
            <h3 class="text-xs">Kawaii Collection</h3>
          </div>
        </div>
      </div>
      <div
        id="card-secondary"
        class="text-gray-800 leading-tight text-sm p-2 antialiased"
      >Visit ten places on our planet that are undergoing the biggest changes today.</div>
    </div>
    <div
      id="card-actions"
      class="flex flex-row items-center justify-between p-1 border-t border-primary-100"
    >
      <div class>
        <div class="flex items-center">
          <svg viewBox="0 0 24 24" class="fill-current text-gray-800 h-4 w-4">
            <path :d="mdiMapMarker" />
          </svg>
          <span class="btn-label text-xs text-gray-700">AREQUIPA, Cercado</span>
        </div>
      </div>
      <div class="flex pr-1">
        <button
          class="btn text-white flex items-center border border-green-500 bg-green-400 hover:bg-green-500 shadow rounded p-px px-1 ml-2"
          title="More options"
        >
          <svg viewBox="0 0 24 24" class="fill-current text-white h-5 w-5">
            <path :d="mdiWhatsapp " />
          </svg>
          <span class="mx-1 capitalize text-sm">Chat</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mdiShareVariant, mdiWhatsapp, mdiMapMarker, mdiHeart } from '@mdi/js'
export default {
  props: ['item'],
  data: function() {
    return {
      mdiShareVariant,
      mdiWhatsapp,
      mdiMapMarker,
      mdiHeart
    }
  },
  created() {}
}
</script>

<style scoped>
.btn{
    @apply uppercase  font-semibold text-sm;
}
.card{
    @apply rounded shadow bg-white border-b-2 border-primary-300  overflow-hidden ;
}
.card-primary-action{
    
   & h2{
       text-shadow: 1px 1px #111111;
   }
}
#card-media::before{
    /* display: block;
    content: "";
    margin-top: 56.25%; */
}
</style>