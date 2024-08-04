import L from 'leaflet'

export default defineNuxtPlugin(() => {
   return {
      provide: {
         L,
      },
   }
})
