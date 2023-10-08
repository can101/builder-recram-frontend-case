<template>
  <div>
    <h5 class="text-[10px] font-normal ps-1.5 text-[rgba(130,140,154,1)] mb-1 capitalize">
      {{ props.label }}
    </h5>
    <ul class="flex flex-col gap-3">
      <li
        @click.prevent="handleClick(item)"
        v-for="item in list"
        :key="item.id"
        :class="[
          'rounded border-[0.5px] duration-500 h-[60px] flex justify-center items-center gap-3 px-3',
          selectedItem.id == item.id
            ? 'bg-[rgba(229,237,249,1)] border-[rgba(130,140,154,1)]'
            : 'bg-white border-[rgba(201,208,219,1)]'
        ]"
      >
        <div
          :class="[
            'border border-dashed w-full bg-white h-[32px] rounded-sm',
            selectedItem.id == item.id
              ? 'border-[rgba(130,140,154,1)]'
              : 'border-[rgba(201,208,219,1)]'
          ]"
          v-for="x in [...Array(item.segment).keys()]"
          :key="x"
        ></div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, withDefaults, defineProps, defineEmits } from 'vue'
import { nanoid } from 'nanoid'

const emit = defineEmits(['newValue'])

let list = ref([
  {
    segment: 1,
    id: 0
  },
  {
    segment: 2,
    id: 1
  },
  {
    segment: 3,
    id: 2
  }
])

let selectedItem = ref(props.current)

interface ICurrent {
  segment?: number
  id?: number
}

interface IBlokStyleBox {
  label?: string
  current?: ICurrent
  name?: string
}

const segmentDomListGenerate = (segment) =>
  [...Array(segment).keys()].map(() => ({
    id: nanoid(),
    list: []
  }))

const handleClick = (item: any): void => {
  selectedItem.value = item
  emit('newValue', { value: item, label: props.name })
  emit('newValue', { value: segmentDomListGenerate(item.segment), label: 'segmentDomList' })
}

const props = withDefaults(defineProps<IBlokStyleBox>(), {})
</script>

<style lang="scss" scoped></style>
