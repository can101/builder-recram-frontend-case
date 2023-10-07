<template>
  <div>
    <h5 class="text-[10px] font-normal ps-1.5 text-[rgba(130,140,154,1)] mb-1 capitalize">
      {{ props.label }}
    </h5>
    <div class="px-2 mt-2">
      <ul class="flex justify-between items-center gap-5">
        <li v-for="item in iconList" :key="item.id">
          <button
            @click="handleClick(item)"
            :class="[
              item,
              'font-normal duration-300',
              item.id == currentVal.id ? 'text-[rgba(17,24,39,1)]' : 'text-[rgba(201,208,219,1)]'
            ]"
          >
            <component :is="item.icon" />
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  IconTextAlignCenter,
  IconTextAlignLeft,
  IconTextAlignRight,
  IconTextAlignJustified,
  IconBold,
  IconUnderline,
  IconItalic
} from '@/components/icons'
import { IGenerateComponentItem } from '@/constants'
import { withDefaults, defineProps, ref, defineEmits } from 'vue'

const emit = defineEmits(['newValue'])

type CurrentType = {
  icon?: any
  label?: string
  id?: number
}

interface ISpecificationBox {
  label?: string
  current?: CurrentType
  value?: string
}

const props = withDefaults(defineProps<ISpecificationBox>(), {})

const iconList = [
  {
    icon: IconBold,
    label: 'IconTextBold',
    name: 'font-bold',
    id: 0
  },
  {
    icon: IconUnderline,
    label: 'IconTextUnderline',
    name: 'underline',
    id: 1
  },
  {
    icon: IconItalic,
    label: 'IconTextItalic',
    name: 'italic',
    id: 2
  },
  {
    icon: IconTextAlignCenter,
    label: 'IconTextAlignCenter',
    name: 'text-center',
    id: 3
  },
  {
    icon: IconTextAlignLeft,
    label: 'IconTextAlignLeft',
    name: 'text-left',
    id: 4
  },
  {
    icon: IconTextAlignRight,
    label: 'IconTextAlignRight',
    name: 'text-right',
    id: 5
  },
  {
    icon: IconTextAlignJustified,
    label: 'IconTextAlignJustified',
    name: 'text-justify',
    id: 6
  }
]

let currentVal = ref(props.value ?? iconList[2])

const handleClick = (item: any): void => {
  currentVal.value = item
  emit('newValue', {
    value: { label: item.label, id: item.id, name: item.name },
    label: 'specification'
  })
}
</script>
