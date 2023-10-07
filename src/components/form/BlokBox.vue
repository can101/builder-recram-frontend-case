<template>
  <div class="min-h-[150px] w-full">
    <ul class="flex flex-col gap-3 h-full">
      <li
        :class="[
          'border-[0.5px] duration-500 h-full flex justify-center items-center gap-2 p-2',
          true ? 'border-[rgba(129,202,255,1)]' : 'bg-white border-[rgba(201,208,219,1)]'
        ]"
      >
        <div
          :class="[
            'border border-dashed w-full bg-white h-full',
            true ? 'border-[rgba(129,202,255,1)]' : 'border-[rgba(201,208,219,1)]'
          ]"
          v-for="x in [...Array(props.blok_style.segment).keys()]"
          :key="x"
        >
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { EdgeType } from '@/constants'
import { withDefaults, defineProps } from 'vue'

interface IGenerateComponentSettings {
  blok_style: EdgeType
}

const props = withDefaults(defineProps<IGenerateComponentSettings>(), {})
</script>

<style scoped></style>
