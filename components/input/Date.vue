<template>
   <FormKit type="date" @input-raw="inputRaw" />
</template>

<script lang="ts" setup>
import { FormKitNode } from '@formkit/core'

function inputRaw(value: string, node: FormKitNode) {
   const date = new Date(value)
   const millis = date.getTime()
   node.input(millis)
}
</script>

<style lang="scss" scoped>

</style>