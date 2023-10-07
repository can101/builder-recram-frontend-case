<template>
  <div>
    <textarea :class="['resize-none outline-none w-full border border-[rgba(201,208,219,1)] text-xs font-light py-3 px-4',true?'h-36 border-dashed':'rounded h-48']" :placeholder="props.placeholder"/>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue'

interface ITextArea {
    title?: string,
    placeholder?:string,
    
}

const props = withDefaults(defineProps<ITextArea>(), {
})
</script>
