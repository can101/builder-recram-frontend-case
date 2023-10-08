<template>
  <div class="bg-black/10 backdrop-blur absolute top-0 left-0 w-full h-full z-[100] flex justify-center items-center flex-col-reverse gap-6">
    <Button @click-event="emit('show-event',false)" variant="solid" title="close panel"/>
    <pre class="overflow-y-auto overflow-x-hidden h-[400px] w-[500px] shadow-3bxl rounded-md bg-white">
        <code class="normal-case">
               {{ pages }}
        </code>
    </pre>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { usePageStore } from '@/stores/pages';
import Button from "@/components/Button.vue";
import {defineEmits} from 'vue'

const emit=defineEmits(['show-event'])

const pageStore = usePageStore();

const { pages } = storeToRefs(pageStore);
</script>

<style lang="scss" scoped></style>
