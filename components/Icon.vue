<template>
    <svg viewBox="0 0 24 24" class="fill-current" >
              <path :d="path" />
    </svg>
</template>

<script>
const mdi = require('@mdi/js')
export default {
  name: 'Icon',
  props: {
    svgdata: String,
    size: Number
  },
  computed: {
    path() {
      return mdi[this.svgdata]
    }
  }
}
</script>

<style >

</style>