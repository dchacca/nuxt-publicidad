<template>
  <div class="container mx-auto xl:max-w-full xl:px-32 overflow-hidden mt-4 pr-1">
    <client-only>
      <masonry
        :cols="{default: 6,1280:5, 1024: 4, 768:3, 640: 2 ,400: 1}"
        :gutter="{default: '.75rem', 700: '.25rem'}"
      >
        <div class="masonry-item" v-for="(post, idx) in items" :key="idx">
          <card :item="post" />
        </div>
      </masonry>
    </client-only>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Card from '~/components/Card.vue'
export default {
  layout: 'wide',
  components: {
    Logo,
    Card
  },
  data() {
    return {
      items: [
        { title: 'hola', url: 'https://picsum.photos/450/300?image=78' },
        { title: 'hola', url: 'https://picsum.photos/450/350?image=25' },
        { title: 'hola', url: 'https://picsum.photos/450/280?image=19' },
        { title: 'hola', url: 'https://picsum.photos/450/340?image=18' },
        { title: 'hola', url: 'https://picsum.photos/450/400?image=128' },
        { title: 'hola', url: 'https://picsum.photos/450/300?image=56' },
        { title: 'hola', url: 'https://picsum.photos/450/250?image=45' },
        { title: 'hola', url: 'https://picsum.photos/450/410?image=23' },
        { title: 'hola', url: 'https://picsum.photos/450/350?image=37' },
        { title: 'hola', url: 'https://picsum.photos/450/330?image=96' },
        { title: 'hola', url: 'https://picsum.photos/450/300?image=88' },
        { title: 'hola', url: 'https://picsum.photos/450/250?image=128' },
        { title: 'hola', url: 'https://picsum.photos/450/300?image=66' },
        { title: 'hola', url: 'https://picsum.photos/450/300?image=48' },
        { title: 'hola', url: 'https://picsum.photos/450/300?image=43' },
        { title: 'hola', url: 'https://picsum.photos/450/300?image=47' },
        { title: 'hola', url: 'https://picsum.photos/450/300?image=12' },
        { title: 'hola', url: 'https://picsum.photos/450/300?image=29' },
        { title: 'hola', url: 'https://picsum.photos/450/300?image=71' },
        { title: 'hola', url: 'https://picsum.photos/450/300?image=72' },
        { title: 'hola', url: 'https://picsum.photos/450/300?image=73' }
      ]
    }
  }
}
</script>

<style>
.masonry-item{
    @apply mb-3;
}
ul>li{
    @apply px-4;
}
/* .container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
} */
/* 
.btn {
  border: none;
  cursor: pointer;
  color: white;
  padding: 15px 40px;
  border-radius: 2px;
  font-size: 22px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, .4);
  
}

.btn{
  position: relative;
  overflow: hidden;
}

.btn:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2px;
  height: 2px;
  opacity: 0;
  border-radius: 100%;
  transform: scale(1, 1) translate(-50%);
  transform-origin: 50% 50%;
  @apply bg-secondary-100;
}

@keyframes ripple {
  0% {
    transform: scale(0, 0);
    opacity: 1;
  }
  30% {
    transform: scale(50, 50);
    opacity: .3;
  }
  100% {
    opacity: 0;
    transform: scale(80, 80);
  }
}

.btn:focus:not(:active)::after {
  animation: ripple 1s ease-out;
} */
</style>
