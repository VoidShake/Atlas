import Multiselect from '@vueform/multiselect'

export default defineNuxtPlugin(nuxtApp => {
   nuxtApp.vueApp.component('multiselect', Multiselect)
})
