<template>
  <draggable 
  v-model="myArray" 
  group="people" 
  item-key="id">
  <template #item="{element}">
    <div>{{element.name}}</div>
   </template>
</draggable>
</template>

<script setup>
import draggable from 'vuedraggable'
import { ref } from 'vue'

let myArray = ref([
  { name: 'John', id: 0 },
  { name: 'Joao', id: 1 },
  { name: 'Jean', id: 2 }
])
</script>
<style scoped></style>
