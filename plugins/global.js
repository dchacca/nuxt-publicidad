import Vue from 'vue'
import Icon from '~/components/Icon.vue'

const components = { Icon }
Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
