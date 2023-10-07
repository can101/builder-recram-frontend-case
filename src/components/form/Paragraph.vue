<template>
  <div class="w-full" @click="bool=!bool">
    <p v-if="bool" class="text-center text-sm font-normal font-urbanist">
      We are able to uncover powerful insights and scale best-in-class customer experience. Customer
      feedback is disjointed and siloed across teams and technologies, and decisions are made on
      assumptions rather than the customer reality. Unifies your customer data, analyzes it at scale
      using AI, and gives you the intelligence to better understand the voice of your customers.
    </p>
    <TextArea placeholder="text here" v-else/>
  </div>
</template>

<script lang="ts" setup>
import TextArea from '@/components/form/TextArea.vue'
import { withDefaults, defineProps,ref } from 'vue'
let bool=ref(false)
interface IParagraph {
  text?: string,
}

const props = withDefaults(defineProps<IParagraph>(), {
})</script>

<style lang="scss" scoped></style>
