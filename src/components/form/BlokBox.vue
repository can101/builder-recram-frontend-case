<template>
  <div class="min-h-[200px] w-full">
    <div
      :class="[
        'border-[0.5px] duration-500 h-full flex gap-4 justify-center items-center',
        true ? 'border-[rgba(129,202,255,1)]' : 'bg-white border-[rgba(201,208,219,1)]'
      ]"
      :style="[
        `margin-top: ${props.margin.top}px;margin-right: ${props.margin.right}px;margin-bottom: ${props.margin.bottom}px;margin-left: ${props.margin.left}px;`,
        `padding-top: ${props.padding.top}px;padding-right: ${props.padding.right}px;padding-bottom: ${props.padding.bottom}px;padding-left: ${props.padding.left}px;`
      ]"
    >
      <div
        :class="[
          'border border-dashed w-full bg-white h-full p-2 gap-2',
          true ? 'border-[rgba(129,202,255,1)]' : 'border-[rgba(201,208,219,1)]'
        ]"
        v-for="segment in props.segmentDomList"
        :key="segment.id"
      >
        <Nested :list="segment.list" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EdgeType, EdgeSpacingType } from '@/constants'
import { withDefaults, defineProps } from 'vue'
import Nested from '@/components/nested.vue'

interface IGenerateComponentSettings {
  blok_style: EdgeType
  margin: EdgeSpacingType
  padding: EdgeSpacingType
  segmentDomList: Array
}

const props = withDefaults(defineProps<IGenerateComponentSettings>(), {})
</script>

<style scoped></style>
