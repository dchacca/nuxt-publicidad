<template>
  <div class="container mx-auto flex shadow-xl">
    <main class="flex-auto p-4 mr-3 bg-white">
      <form @submit.prevent="submitAdvert" >
      <div class="card">
        <h2 class="card-header">Seleccione Genero</h2>
        <div id="form-content" class="px-4 py-3">
          <label for="category" class="block">Genero:</label>
          <div id="radio-group" class="btn-group">
            <input type="radio" value="1" id="hombre" v-model="category" />
            <label for="hombre" class>
              <svg
                viewBox="0 0 24 24"
                class="fill-current text-gray-800 h-24 w-24"
              >
                <path :d="mdiGenderMale" />
              </svg>
              <!-- <img src="https://picsum.photos/64/64?image=78" /> -->
            </label>

            <input type="radio" v-model="category" value="2" id="mujer" />
            <label for="mujer" class>
              <!-- iCon by oNlineWebFonts.Com -->
              <svg
                viewBox="0 0 24 24"
                class="fill-current text-gray-800 h-24 w-24"
              >
                <path :d="mdiGenderMale" />
              </svg>
            </label>

            <input type="radio" value="3" id="alien" v-model="category" />
            <label for="alien" class="center">
              <svg
                viewBox="0 0 24 24"
                class="fill-current text-gray-800 h-20 w-20"
              >
                <path :d="mdiAlienOutline" />
              </svg>
              <span class="block text-center font-medium">Alien</span>
            </label>
          </div>
          <!-- <div class="btn-group">
            <button type="button" class="btn btn-blue">Apple</button>
            <button type="button" class="btn btn-blue">Samsung</button>
            <button type="button" class="btn btn-blue">Sony</button>
          </div>-->
        </div>
      </div>
      <div class="card mt-2">
        <h2 class="card-header">detalles el Anuncio</h2>

        <div class="card-body">
          <!-- tailwind forms  -->
          <label class="block">
            <span class="text-gray-700 font-medium">Titulo del Anuncio</span>
            <input
              class="form-input mt-1 block w-full"
              placeholder="Jane Doe" v-model="title" name="title"
            />
          </label>
          <label class="block mt-4">
            <span class="text-gray-700 font-medium"
              >Descripcion del Anuncio</span
            >
            <textarea
              class="form-textarea mt-1 block w-full"
              rows="5"
              placeholder="Enter some long form content." v-model="content" name="content"
            ></textarea>
          </label>
          <div class="mt-4">
            <span class="text-gray-700 font-medium">Telefono:</span>
            <div class="mt-2">
              <label class="inline-flex items-center">
                <input
                  type="input"
                  class="form-input"
                  name="accountType"
                  value
                />
              </label>
              <label class="inline-flex items-center ml-6">
                <input
                  type="checkbox"
                  class="form-checkbox text-green-500"
                  name="accountType"
                  value="busines"
                />
                <span class="ml-2 flex flex-row">
                  <svg
                    viewBox="0 0 24 24"
                    class="fill-current text-green-500 h-6 w-6"
                  >
                    <path :d="mdiWhatsapp" />
                  </svg>
                  <span class="mx-1 capitalize text-base">Whatsapp</span>
                </span>
              </label>
            </div>
          </div>

          <div class="flex mt-6">
            <label class="flex items-center">
              <input type="checkbox" class="form-checkbox" />
              <span class="ml-2">
                I agree to the
                <span class="underline">privacy policy</span>
              </span>
            </label>
          </div>
          <!-- end TF -->
        </div>
      </div>
      <div class="card mt-2">
        <h2 class="card-header">Imagenes</h2>
        <div class="card-body">
          <image-upload @getimages="imagesGet"/>
        </div>
      </div>
      <button type="submit" value="submit" class="btn btn-blue">Enviar</button>
      </form>
    </main>
    <aside class="md:w-1/3 lg:w-4/12">adverts</aside>
  </div>
</template>

<script>
import { mdiGenderMale, mdiAlienOutline, mdiWhatsapp } from '@mdi/js'
import ImageUpload from '~/components/ImageUpload.vue'
export default {
  layout: 'wide',
  name: 'Adfree',
  components: {
    ImageUpload
  },
  data() {
    return {
      mdiGenderMale,
      mdiAlienOutline,
      mdiWhatsapp,

      title: 'Zard I love U',
      content: 'Lorem Ipsum',
      category: '1',
      images: []
    }
  },
  methods: {
    imagesGet(e) {
      this.images.push(e)
    },
    submitAdvert(e) {
      const data = new FormData()
      data.append('title', this.title)
      data.append('content', this.content)
      data.append('category', this.category)

      //data.append("images", this.images);

      Array.from(this.images).forEach((file, idx) => {
        console.log(idx)
        data.append('image_' + idx, file)
      })
      //console.log(data);
      this.$axios
        .post('adverts/', data, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ZGF2aWQ6c2VhbGlsZXIz'
          }
        })
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log('Authentication :' + error)
        })
    }
  }
}
</script>

<style lang="postcss">
  input[type='radio'] {
    display: none;
  }
  input[type='radio'] + label {
    @apply border text-gray-800 bg-gray-100 inline-block  cursor-pointer rounded overflow-hidden shadow-md relative px-6;
  }

  input[type='radio'] + label::before {
    content: '';
    @apply border border-2 border-blue-400 rounded-full h-4 w-4 absolute;
    left: 5px;
    top: 5px;
  }
  input[type='radio']:checked + label {
    @apply border-orange-300 border-2 text-red-600;
  }
  .btn-blue {
    @apply text-white bg-blue-500 border-blue-600;
  }
  .btn-group {
    @apply text-white inline-block relative;
    & .btn {
      @apply px-4 py-2 inline-block font-normal border -ml-px;
    }
    & .btn:hover {
      @apply bg-blue-600;
    }
    & > .btn:not(:first-child):not(:last-child) {
      @apply rounded-none border-l-0 border-r-0;
    }
    & > .btn:first-child:not(:last-child) {
      @apply rounded-l -mr-1;
    }
    & > .btn:last-child:not(:first-child) {
      @apply rounded-r -ml-1;
    }
  }
</style>