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
import { withDefaults, defineProps, ref } from 'vue'

type CurrentType = {
  icon?: any
  label?: string
  id?: number
}
interface ISpecificationBox {
  label?: string
  current?: CurrentType
}
const props = withDefaults(defineProps<ISpecificationBox>(), {})

const iconList = [
  {
    icon: IconBold,
    label: 'IconBold',
    id: 0
  },
  {
    icon: IconUnderline,
    label: 'IconUnderline',
    id: 1
  },
  {
    icon: IconItalic,
    label: 'IconItalic',
    id: 2
  },
  {
    icon: IconTextAlignCenter,
    label: 'IconTextAlignCenter',
    id: 3
  },
  {
    icon: IconTextAlignLeft,
    label: 'IconTextAlignLeft',
    id: 4
  },
  {
    icon: IconTextAlignRight,
    label: 'IconTextAlignRight',
    id: 5
  },
  {
    icon: IconTextAlignJustified,
    label: 'IconTextAlignJustified',
    id: 6
  }
]

let currentVal = ref(iconList[3])

const handleClick = (item: any): void => {
  currentVal.value = item
}
</script>
