<template>
  <div class="flex flex-col gap-3 px-3">
    <template v-for="item in props.layoutJSON" :key="item.id">
      <Form.BlokStyleBox :label="item.label" :current="item.current" v-if="ComponentTypes.BlokStyleBox == item.type" />
      <Form.SpacingBox :label="item.label" :edgeSpacing="item.edgeSpacing" v-else-if="ComponentTypes.SpacingBox == item.type" />
      <Form.SelectBox :label="item.label" :values="item.values" :current="item.current" v-else-if="ComponentTypes.SelectBox == item.type" />
      <Form.SpecificationBox :label="item.label" v-else-if="ComponentTypes.SpecificationBox == item.type" />
      <Form.FontSizeBox :label="item.label" v-else-if="ComponentTypes.FontSizeBox == item.type" />
      <Form.TextArea :placeholder="item.palceholder" v-else-if="ComponentTypes.TextArea == item.type" />
      <Form.TextField :placeholder="item.placeholder" :label="item.label" v-else-if="ComponentTypes.TextField == item.type" />
      <Form.Title :title="item.title" v-else-if="ComponentTypes.Title == item.type"/>
      <Form.Button :title="item.title" :placeholder="item.placeholder" :label="item.label" :value="item.value" :widthSize="item.widthSize" v-else-if="ComponentTypes.Button == item.type"/>
    </template>
  </div>
</template>

<script setup lang="ts">
import * as Form from '@/components/form'
import {ComponentTypes} from "@/constants"

import { withDefaults, defineProps } from 'vue'
import {type IGenerateComponentItem} from "@/constants"

interface IGenerateComponentSettings {
  layoutJSON?: IGenerateComponentItem[];
}

const props = withDefaults(defineProps<IGenerateComponentSettings>(), {
})
</script>

<style scoped></style>
