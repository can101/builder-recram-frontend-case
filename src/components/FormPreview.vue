<template>
  <div class="h-[calc(100%-168px)] bg-[#f2f6fb] flex justify-center items-center relative">
  <div class="w-full h-full" @click="pageStore.modifyShowSeeting(false, null)"></div>  
  <div class="bg-white h-[460px] w-[680px] aspect-[2/3] shadow-3bxl rounded-lg font-urbanist absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2">
      <draggable
        class="dragArea list-group w-full h-full p-4 flex flex-col justify-start gap-3"
        :list="previewDomList"
        group="people"
        :clone="dogClone"
        @change="log"
        item-key="name"
      >
        <template #item="{ element }">
          <div class="flex justify-center" @dblclick="pageStore.modifyShowSeeting(true, element.type)">
            <Button
              :title="element.title"
              :variant="element.variant"
              :widthSize="element.widthSize"
              :isActive="element.isActive"
              v-if="element.type == ComponentTypes.Button"
            />
            <TextField
              :title="element.title"
              :placeholder="element.placeholder"
              :label="element.label"
              :value="element.value"
              :widthSize="element.widthSize"
              v-else-if="element.type == ComponentTypes.TextField"
            />
            <Paragraph
              :title="element.title"
              :placeholder="element.placeholder"
              :label="element.label"
              :value="element.value"
              :widthSize="element.widthSize"
              v-else-if="element.type == ComponentTypes.Paragraph"
            />
            <BlokBox :blok_style="element.blok_style" v-else-if="element.type == ComponentTypes.Blok" />
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nanoid } from 'nanoid'
import Button from './Button.vue'
import Paragraph from '@/components/form/Paragraph.vue'
import { TextField } from '@/components/form'
import { ComponentTypes } from '@/constants'
import draggable from 'vuedraggable'
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { usePageStore } from '@/stores/pages'
import BlokBox from '@/components/form/BlokBox.vue'

const pageStore = usePageStore()
const { getActivePageDomList } = storeToRefs(pageStore)

let previewDomList = ref(getActivePageDomList)

const toArr = (proxyList: any) => JSON.parse(JSON.stringify(proxyList))

watch(previewDomList.value, (_, newVal) => {
  const domList = toArr(newVal)
  console.log(domList)
})
const dogClone = (item: any) => {
  console.lo(item, 'ds')
  return { ...item, id: nanoid() }
}
const log = (event: any) => {
  const dropedElement = toArr(event.added.element)
  console.log('change', dropedElement)
  pageStore.modifyShowSeeting(true, dropedElement.type)
}
</script>
