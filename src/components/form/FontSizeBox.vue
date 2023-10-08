<template>
  <div>
    <h5 class="text-[10px] font-normal ps-1.5 text-[rgba(130,140,154,1)] mb-1 capitalize">
      {{ props.label }}
    </h5>
    <div class="px-2 mt-2">
      <ul class="flex justify-between items-center gap-5">
        <li v-for="(item, index) in props.values" :key="index">
          <button
            @click="handleClick(item)"
            :class="[
              item,
              'font-normal duration-500',
              item == currentVal ? 'text-[rgba(17,24,39,1)]' : 'text-[rgba(201,208,219,1)]'
            ]"
          >
            aA
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {withDefaults, defineProps, ref, watch,defineEmits} from 'vue'
const emit = defineEmits(['newValue'])

interface ITextField {
  label?: string
  values?: any[]
  current?: string
}

const props = withDefaults(defineProps<ITextField>(), {
  values: () => ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl'],
  current: 'text-base'
})

let currentVal = ref(props.values[3])

watch(currentVal.value,()=>{
})

const handleClick = (item: any): void => {
  currentVal.value = item
  emit("newValue",{value:currentVal,item,label:'font_size'})
}
</script>
