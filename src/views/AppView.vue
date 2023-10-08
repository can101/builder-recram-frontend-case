<template>
  <HeaderComponent @show-event="showToggle" />
  <div class="h-[calc(100%-56px)] flex">
    <SidebarComponent />
    <div class="w-full">
      <FormPreview />
      <PagesDraggableAreaBox />
    </div>
  </div>
  <RawDisplayer v-show="showRaw" @show-event="showToggle" />
</template>

<script lang="ts" setup>
import FormPreview from '@/components/FormPreview.vue'
import SidebarComponent from '@/components/Sidebar.vue'
import HeaderComponent from '@/components/Header.vue'
import PagesDraggableAreaBox from '@/components/PagesDraggableAreaBox.vue'
import RawDisplayer from '@/components/RawDisplayer.vue'
import { ref } from 'vue'

let showRaw = ref(false)

const showToggle = (bool: boolean) => {
  showRaw.value = bool;
}
</script>

<style lang="scss">
.width {
  &__size {
    &_wide {
      @apply w-3/6 justify-center;
    }

    &_full {
      @apply w-full justify-center;
    }
  }
}
</style>
