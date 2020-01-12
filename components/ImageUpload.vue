<template>
  <div class="w-full flex flex-wrap ">
    <div v-for="(image,idx) in imageFiles" :key="idx" class=" w-1/4">
    <div class="m-1 card">
      <div class="relative  overflow-hidden h-24"   >
          <img :src="image" class="h-full w-auto mx-auto rounded-sm" />
      </div>
      <div class="inline-flex absolute top-0 right-0 -m-1">
        <span 
        @click='onRemove(idx)' class="cursor-pointer"
        >
          <svg
                viewBox="0 0 24 24"
                class="fill-current  text-secondary-400 bg-primary-500 rounded-full h-4 w-4"
              >
                <path :d="mdiClose" />
              </svg>
        </span>
      </div>
    </div>
       
    </div>
    <div class=" w-1/4" v-if="imageFiles.length<5">
      <div class=" m-1 image-container bg-gray-300 ">
        <div class=" w-full h-24 flex flex-col justify-center  items-center">
          <div class="text-center"><svg
                viewBox="0 0 24 24"
                class="fill-current text-gray-500  h-12 w-12"
              >
                <path :d="mdiCloudUpload" />
              </svg></div>
        <div class="text-center capitalize text-gray-700">click Aqui</div>
        <div
          class="absolute w-full h-full overflow-hidden opacity-0 top-0 bottom-0 left-0 right-0"
        >
          <label
            for="image-upload"
            class="block h-full w-full cursor-pointer"
          ></label>
        </div>
        </div>
        
      </div>
     
    </div>

    <div>
      <input
        type="file"
        name="image"
        id="image-upload"
        @change="onFileSelected"
        class="hidden"
        ref="fileInput"
        multiple=True
      />
      <!--  <button @click="$refs.fileInput.click()" class="btn btn-blue">
        Add Image
      </button> -->
    </div>
  </div>
</template>
<style  lang="postcss" scoped>
  .image-container {
    border: 1px dashed #8
    ;
    border-radius: 4px;
    text-align: center;
    position: relative;
  }
  .preview-image {
    @apply h-32;
    padding: 5px;
    border-radius: 12px;
    box-sizing: border-box;
  }
</style>
<script>
import { mdiCloseCircle,mdiClose,mdiCloudUpload } from "@mdi/js";
  export default {
    data() {
      return {
        selectedFile: null,
        imageFiles:[],
        mdiCloseCircle,
        mdiClose,
        mdiCloudUpload
      }
    },
    methods: {
      onRemove(idx){
       /*  console.log(idx)
        this.imageFiles.splice(idx,1) */
        this.$delete(this.imageFiles,idx)
      },
      onFileSelected(e) {
        let images = e.target.files
        //console.log(images)
        Array.from(images).forEach(file=>{
        console.log(file)
        let reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload = e => {
                  //this.selectedFile = e.target.result
                  this.imageFiles.push(e.target.result) 
                  
                }
        })
        
          
       
        //let image = e.target.files[0]
        
      }
    }
  }
</script>

