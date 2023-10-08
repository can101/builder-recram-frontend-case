<template>
  <div class="">
    <h5 class="text-[10px] font-normal ps-1.5 text-[rgba(130,140,154,1)] mb-1 capitalize">
      {{ props.label }}
    </h5>
    <div class="relative">
      <div class="absolute -rotate-90 origin-center right-3 top-1/2 -translate-y-1/2 text-[rgba(130,140,154,1)]">
        <IconLeftArrow />
      </div>
      <select
        v-model="currentVal"
        class="capitalize appearance-none w-full rounded border-r-8 px-4 py-3 outline-none rounded w-full border-transparent ring-[1px] ring-[rgba(201,208,219,1)] text-xs font-light"
      >
        <option v-for="item in props.values" :value="item" :key="item.id">{{ item.text }}</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps, ref, watch, withDefaults } from 'vue'
import { IconLeftArrow } from '@/components/icons'
import { ComponentTypes } from '@/constants'

const emit = defineEmits(['newValue'])

interface ISelectBox {
  label?: string
  values?: any[]
  current?: any
  name?: string
  type?: ComponentTypes
}



const props = withDefaults(defineProps<ISelectBox>(), {
  values: () => {},
  label: 'view'
})

let currentVal = ref(props.current ? props.current : props.values[0])

watch(currentVal, () => {
  console.log('curre', currentVal.value)
  emit('newValue', { value: currentVal.value, label: props.name })
})
</script>
