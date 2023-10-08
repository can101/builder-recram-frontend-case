<template>
  <div
    class="group flex flex-col justify-center"
    @dblclick="$emit('update-active-index-event', props.id)"
  >
    <p class="text-[rgba(130,140,154,1) text-[9px] mb-px">{{ props.title }}</p>
    <div :class="['box', props.isPageActive ? 'bg-gradient' : 'bg-[rgba(242,246,251,1)]']">
      <div class="box__inner">
        <button v-if="props.isPageActive" class="flex bg-gradient handle-drag-button handle">
          <IconArrow />
        </button>
        <ul v-if="props.isPageActive" class="flex gap-4 text-[rgba(201,208,219,1)]">
          <li>
            <button @click="$emit('edit-event')">
              <IconEdit />
            </button>
          </li>
          <li>
            <button @click="$emit('duplicate-event')">
              <IconDuplicate />
            </button>
          </li>
          <li>
            <button @click="$emit('delete-event')">
              <IconTrash />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue'
import { IconArrow, IconDuplicate, IconTrash, IconEdit } from '@/components/icons'

interface IPageDragableItem {
  isPageActive: boolean
  title: string
  id: string
}

const props = withDefaults(defineProps<IPageDragableItem>(), {
  isPageActive: false
})
</script>

<style lang="scss" scoped>
.bg-gradient {
  @apply bg-gradient-to-tr from-[rgba(70,189,197,1)] to-[rgba(94,222,153,1)];
}

.handle-drag-button {
  @apply h-4 w-4 rounded-full justify-center items-center text-white stroke-2 absolute -top-1.5 -left-1.5;
}

.box {
  @apply h-[120px] w-[140px] rounded-md p-[1px];
  &__inner {
    @apply h-full w-full bg-white rounded-md relative flex justify-center items-center;
  }
}
</style>
