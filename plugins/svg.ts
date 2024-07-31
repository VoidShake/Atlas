import type { Directive } from 'vue'

interface Config {
   height: number
   width: number
   scale: number
}

const sizeDirective: Directive<SVGElement, Config> = (el, binding) => {
   const height = binding.value.height * binding.value.scale
   const width = binding.value.height * binding.value.scale
   el.setAttribute('width', width.toString())
   el.setAttribute('height', height.toString())
   el.setAttribute('x', (width / -2).toString())
   el.setAttribute('y', (height / -2).toString())
}

export default defineNuxtPlugin(({ vueApp }) => {
   vueApp.directive('svg-size', sizeDirective)
})
