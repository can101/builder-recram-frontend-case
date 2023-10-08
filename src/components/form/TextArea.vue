<template>
  <div>
    <textarea
      v-model="val"
      @input="$emit('newValue', { value: $event.target.value, label: 'text' })"
      :class="[
        'resize-none outline-none w-full border border-[rgba(201,208,219,1)] text-xs font-light py-3 px-4 rounded h-48'
      ]"
      :placeholder="props.placeholder"
    />
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps, ref } from 'vue'

const props = withDefaults(defineProps<ITextArea>(), {})
let val = ref(props.value)

interface ITextArea {
  title?: string
  placeholder?: string
  value?: string
  label?: string
}
</script>
