<template>
  <div class="flex flex-col gap-3 px-3">
    <template v-for="item in props.layoutJSON" :key="item.id">
      <Form.BlokStyleBox
        @newValue="changeTitle"
        :name="item.name"
        :label="item.label"
        :current="item.current"
        v-if="ComponentTypes.BlokStyleBox == item.type"
      />
      <Form.SpacingBox
        @newValue="changeTitle"
        :name="item.name"
        :label="item.label"
        :current="item.current"
        :edgeSpacing="item.edgeSpacing"
        v-else-if="ComponentTypes.SpacingBox == item.type"
      />
      <Form.SelectBox
        @newValue="changeTitle"
        :name="item.name"
        :label="item.label"
        :values="item.values"
        :current="item.current"
        :type="item.type"
        v-else-if="ComponentTypes.SelectBox == item.type"
      />
      <Form.SpecificationBox
        @newValue="changeTitle"
        :value="item.specification"
        :label="item.label"
        v-else-if="ComponentTypes.SpecificationBox == item.type"
      />
      <Form.FontSizeBox
        @newValue="changeTitle"
        :label="item.label"
        v-else-if="ComponentTypes.FontSizeBox == item.type"
      />
      <Form.TextArea
        @newValue="changeTitle"
        :value="settingData.text"
        :placeholder="item.palceholder"
        v-else-if="ComponentTypes.TextArea == item.type"
      />
      <Form.TextField
        :placeholder="item.placeholder"
        :label="item.label"
        :value="settingData.title"
        @newValue="changeTitle"
        v-else-if="ComponentTypes.TextField == item.type"
      />
      <Form.Title :title="item.title" v-else-if="ComponentTypes.Title == item.type" />
      <Form.Button
        :title="item.title"
        :placeholder="item.placeholder"
        :label="item.label"
        :value="item.value"
        :widthSize="item.widthSize"
        v-else-if="ComponentTypes.Button == item.type"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import * as Form from '@/components/form'
import { ComponentTypes } from '@/constants'

import { withDefaults, defineProps, ref, watch } from 'vue'
import { type IGenerateComponentItem } from '@/constants'

import { usePageStore } from '@/stores/pages'

const pageStore = usePageStore()
const id = pageStore.settingElementId
const settingData = JSON.parse(JSON.stringify(pageStore.getActivePageDomList)).find((item) => item.id == id)
let settingRef = ref(settingData)

interface IGenerateComponentSettings {
  layoutJSON?: IGenerateComponentItem[]
}

const changeTitle = ({ label, value }) => {
  settingRef.value[label ?? 'title'] = value
}

watch(settingRef.value, () => {
  pageStore.updateDomListItem(settingData)
})

const props = withDefaults(defineProps<IGenerateComponentSettings>(), {})
</script>

<style scoped></style>
