<template>
  <div class="w-full">
    <p :class="['break-all', props.fontSize, props.fontFamily, props.specification, props.view]">
      {{ props.value }}
    </p>
    <textarea
      :class="['resize-none outline-none w-full border border-[rgba(201,208,219,1)] text-xs font-light py-3 px-4 h-36 border-dashed',props.fontSize, props.fontFamily, props.specification, props.view]"
      :value="props.value"
      placeholder="text here"
    />
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue'

const props = withDefaults(defineProps<IParagraph>(), {})

interface IParagraph {
  text?: string
  value?: string
  fontSize?: string
  fontFamily?: string
  specification?: string
  view?: string
}
</script>

<style lang="scss" scoped></style>
