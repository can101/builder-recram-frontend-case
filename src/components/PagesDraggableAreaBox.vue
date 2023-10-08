<template>
  <div class="h-[168px] px-8 flex justify-start items-center">
    <draggable tag="ul" class="flex gap-4" handle=".handle" v-model="pageStore.pages" item-key="id">
      <template #item="{ element: item }">
        <li>
          <PageDraggableItem
            :title="item.name"
            @edit-event="pageStore.edit(item)"
            @delete-event="pageStore.delete(item)"
            @duplicate-event="pageStore.duplicate(item)"
            @update-active-index-event="pageStore.updateActiveIndex(item)"
            :id="item.pageId"
            :isPageActive="item.pageId == pageStore.activePageId"
          />
        </li>
      </template>
      <template #footer>
        <li class="flex items-end">
          <button
            @click.prevent="pageStore.create()"
            class="border border-dashed text-[rgba(201,208,219,1)] border-[rgba(201,208,219,1)] gap-2 h-[120px] w-[140px] rounded-md flex flex-col justify-center items-center"
          >
            <IconCirclePlus />
            <p class="font-rubik font-normal text-[9px]">New Page</p>
          </button>
        </li>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { IconCirclePlus } from '@/components/icons'
import PageDraggableItem from '@/components/PageDraggableItem.vue'
import draggable from 'vuedraggable'
import { onMounted } from 'vue'
import { usePageStore } from '@/stores/pages'

const pageStore = usePageStore()

onMounted(() => {
  pageStore.create()
})
</script>

<style scoped></style>
