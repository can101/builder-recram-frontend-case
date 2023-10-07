<template>
  <HeaderComponent />
  <div class="h-[calc(100%-56px)] flex">
    <SidebarComponent />
    <div class="w-full">
      <FormPreview />
      <PagesDraggableAreaBox />
    </div>
  </div>
</template>

<script lang="ts" setup>
import FormPreview from '@/components/FormPreview.vue'
import SidebarComponent from '@/components/Sidebar.vue'
import HeaderComponent from '@/components/Header.vue'
import PagesDraggableAreaBox from '@/components/PagesDraggableAreaBox.vue'
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
