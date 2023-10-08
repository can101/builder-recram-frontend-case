<template>
  <div class="">
    <h5 class="text-[10px] font-normal ps-1.5 text-[rgba(130,140,154,1)] mb-1 capitalize">
      {{ props.label }}
    </h5>
    <div class="flex gap-2">
      <div
        class="after-px input-box shrink-0 before:h-[calc(100%-10px)] before:w-[1px] before:top-1/2 before:-translate-y-1/2"
      >
        <input
          min="0"
          v-model="data.left"
          type="number"
          class="input"
          :placeholder="props.placeholder"
        />
      </div>
      <div
        class="relative after-px input-box before:w-[calc(100%-10px)] before:h-[1px] before:left-1/2 before:left-0 before:-translate-x-1/2"
      >
        <input
          min="0"
          v-model="data.top"
          type="number"
          class="input"
          :placeholder="props.placeholder"
        />
      </div>
      <div
        class="relative after-px input-box before:h-[calc(100%-10px)] before:w-[1px] before:top-1/2 before:left-[100%] before:-translate-x-[1px] before:-translate-y-1/2"
      >
        <input
          min="0"
          v-model="data.right"
          type="number"
          class="input"
          :placeholder="props.placeholder"
        />
      </div>
      <div
        class="relative after-px input-box before:w-[calc(100%-10px)] before:h-[1px] before:left-1/2 before:left-0 before:top-full before:-translate-y-px before:-translate-x-1/2"
      >
        <input
          min="0"
          v-model="data.bottom"
          type="number"
          class="input"
          :placeholder="props.placeholder"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps, reactive, defineEmits, watch } from 'vue'

const emit = defineEmits(['newValue'])

interface IEdgeSpacing {
  left?: number
  top?: number
  right?: number
  bottom?: number
}

interface ISelectBox {
  label?: string
  edgeSpacing?: IEdgeSpacing
  name?: string
}

const data = reactive(props.edgeSpacing)

watch(data, () => {
  emit('newValue', { value: data, label: props.name })
})

const props = withDefaults(defineProps<ISelectBox>(), {})
</script>

<style scoped>
.remove-arrow::-webkit-inner-spin-button,
.remove-arrow::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.remove-arrow {
  -moz-appearance: textfield;
}

.after-px {
  @apply after:content-['px.'] after:text-[rgba(201,208,219,1)] after:absolute after:right-2 after:top-1/2 after:-translate-y-1/2 after:font-light after:text-xs;
}

.input-box {
  @apply relative before:content-[''] h-[40px] w-[60px] before:bg-black before:absolute;
}

.input {
  @apply remove-arrow resize-none outline-none h-full w-full ps-3 pe-7 rounded w-full border border-[rgba(201,208,219,1)] text-sm font-light font-rubik;
}
</style>
