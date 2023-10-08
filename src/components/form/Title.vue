<template>
  <div>
    <h3 class="capitalize text-sm font-normal text-[rgba(17,24,39,1)] text-center py-2.5">{{ props.title }}</h3>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue'

interface ITitle {
  title?: string
}

const props = withDefaults(defineProps<ITitle>(), {})
</script>
