<template>
  <div class="container mx-auto">
    <section>
      hola
      <article>
        <h2>Entradas Recientes</h2>
        <ul v-for="post in posts" :key="post.id">
          <li>{{ post.title.rendered }}</li>
        </ul>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    try {
      let posts = await $axios.$get('/posts')
      return { posts }
    } catch (e) {
      return { posts: [] }
    }
  },
  data() {
    return {
      cat: this.$route.params.cat,
      posts: []
    }
  }
}
</script>

<style>

</style>