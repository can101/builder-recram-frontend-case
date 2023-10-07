<template>
  <div :class="[WidthSize[props.widthSize]]">
    <h5 class="text-[10px] font-normal ps-1.5 text-[rgba(130,140,154,1)] mb-1 capitalize">
      {{ props.label }}
    </h5>
    <input
      class="resize-none outline-none rounded w-full border border-[rgba(201,208,219,1)] text-xs font-light py-3 px-4 font-rubik"
      :placeholder="props.placeholder"
    />
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue'
import { type SizeType, WidthSize } from '@/constants'

interface ITextField {
  title?: string
  placeholder?: string
  label?: string
  value?: string
  widthSize?: SizeType
}

const props = withDefaults(defineProps<ITextField>(), {
  widthSize: 'default'
})
</script>
