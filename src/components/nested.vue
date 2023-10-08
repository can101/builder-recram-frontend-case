<template>
  <draggable
    class="dragArea h-full w-full flex flex-col gap-3 p-3"
    tag="ul"
    :list="props.list"
    group="people"
    :clone="clone"
    item-key="name"
  >
    <template #item="{ element }">
      <div class="flex justify-center" @dblclick="pageStore.modifyShowSeeting(true, element.type)">
        <Button
          :title="element.title"
          :variant="element.variant.name"
          :widthSize="element.widthSize.name"
          :isActive="element.isActive"
          v-if="element.type == ComponentTypes.Button"
        />
        <TextField
          :title="element.title"
          :placeholder="element.placeholder"
          :label="element.label"
          :value="element.value"
          :widthSize="element.widthSize.name"
          v-else-if="element.type == ComponentTypes.TextField"
        />
        <Paragraph
          :title="element.title"
          :placeholder="element.placeholder"
          :label="element.label"
          :value="element.text"
          :fontSize="element.font_size"
          :view="element.view.name"
          :fontFamily="element.font_family.name"
          :specification="element.specification.name"
          v-else-if="element.type == ComponentTypes.Paragraph"
        />
        <BlokBox
          :margin="element.marginSpacing"
          :padding="element.paddingSpacing"
          :segmentDomList="element.segmentDomList"
          :blok_style="element.blok_style"
          v-else-if="element.type == ComponentTypes.Blok"
        />
      </div>
    </template>
    <!--<template #item="{ element }">-->
    <!--  <li>-->
    <!--    <p>{{ element }}</p>-->
    <!--<nested-draggable :tasks="element.tasks" />-->
    <!--  </li>-->
    <!--</template>-->
  </draggable>
</template>
<script lang="ts" setup>
import draggable from 'vuedraggable'
import { nanoid } from 'nanoid'
import Button from './Button.vue'
import Paragraph from '@/components/form/Paragraph.vue'
import { TextField } from '@/components/form'
import { ComponentTypes } from '@/constants'
import { ref, watch, defineProps, withDefaults } from 'vue'
import { storeToRefs } from 'pinia'
import { usePageStore } from '@/stores/pages'
import BlokBox from '@/components/form/BlokBox.vue'

const pageStore = usePageStore()

const clone = (item: any) => {
  console.lo(item, 'ds')
  return { ...item, id: nanoid() }
}

interface INested {
  list: any
}

const props = withDefaults(defineProps<INested>(), {})
</script>
<style scoped></style>
