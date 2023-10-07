<template>
  <div class="w-[300px] shadow-3xl z-0 pt-3 flex flex-col justify-between">
    <draggable
      v-if="!showSetting"
      class="dragArea list-group flex flex-col gap-2"
      :list="formComponentList"
      :sort="false"
      :clone="dogClone"
      :group="{ name: 'people', pull: 'clone', put: false }"
      item-key="name"
      @end="end"
    >
      <template #item="{ element }">
        <div>
          <button
            class="w-full flex justify-start gap-4 items-center rounded py-2 px-3 hover:text-[rgba(74,194,191,1)] duration-500 hover:shadow-c text-[rgba(17,24,39,1)]"
          >
            <component :is="element.icon" />
            <span class="font-light text-xs">{{ element.name }}</span>
          </button>
        </div>
      </template>
    </draggable>
    <template v-else>
      <GenerateComponent :layoutJSON="FORM_COMPONENTS_SETTING_LAYOUT[addItemType]" />
      <div class="bg-[rgba(17,24,39,1)] text-white text-center py-1.5">setting</div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import draggable from 'vuedraggable'
import { ref } from 'vue'
import GenerateComponent from './GenerateComponent.vue'
import { FORM_COMPONENTS, FORM_COMPONENTS_SETTING_LAYOUT } from '@/constants'
import { usePageStore } from '@/stores/pages'
import { storeToRefs } from 'pinia'

const pageStore = usePageStore()
const { addItemType, showSetting } = storeToRefs(pageStore)

let formComponentList = ref(FORM_COMPONENTS)

const toArr = (proxyList: any) => JSON.parse(JSON.stringify(proxyList))

const log = (evt: any) => {
  console.log('log', evt)
}
const dogClone = ({name,icon,...other}: any) => {
//  delete item.icon
//  delete item.name
  return other
}
const start = (e: any) => {
  console.log('true draggging', e)
}
const end = (e: any) => {
  console.log('false')
  pageStore.modifyShowSeeting(true,null);
}
const move = (e: any) => {
  console.log('move', e)
}
</script>
