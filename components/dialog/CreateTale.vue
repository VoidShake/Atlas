<template>
   <DialogBase title="Write Lore" class="w-96">
      <form @submit.prevent="submit">
         <ul class="pois">
            <li v-for="poi of pois" :key="poi.id">
               {{ poi.name }}
            </li>
         </ul>
         <FormGroup label="Title">
            <FormTextInput v-model="title" placeholder="Title" />
         </FormGroup>
         <FormGroup label="Text">
            <FormTextArea v-model="text" placeholder="Text" />
         </FormGroup>
         <button>Submit</button>
      </form>
   </DialogBase>
</template>

<script lang="ts" setup>
import { CreateTaleDocument, MapPoiFragment } from '~/graphql/generated';
import { closeDialog } from '~~/store/useDialog';

const { initialPois } = withDefaults(defineProps<{
   initialPois: MapPoiFragment[]
}>(), {
   initialPois: () => []
})

const pois = ref(initialPois)

const title = ref('')
const text = ref('')

const { mutate } = useMutation(CreateTaleDocument, () => ({
   variables: {
      input: { title: title.value, text: text.value },
      pois: pois.value.map(it => it.id)
   },
   refetchQueries: ['getPoi']
}))

async function submit() {
   await mutate()
   closeDialog()
}

</script>