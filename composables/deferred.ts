import { Ref } from 'vue'

export default function useDeferred<T>(changing: Ref<T>) {
   const deferred = ref(changing.value) as Ref<T>
   watch(changing, it => {
      if (notNull(it)) deferred.value = it
   })
   return deferred
}
