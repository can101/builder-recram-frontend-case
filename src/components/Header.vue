<template>
  <header
    class="h-[56px] bg-white flex items-center justify-between border-b border-b-[#F2F6FB] z-10 px-5"
  >
    <div class="flex gap-2">
      <Button>
        <IconLeftArrow />
      </Button>
      <Button title="help">
        <IconHelp />
      </Button>
      <Button>
        <IconForwardArrow />
      </Button>
      <Button>
        <IconPreviousArrow />
      </Button>
    </div>
    <div class="flex gap-2 relative">
      <Button title="design" variant="ghost" :isActive="true" />
      <Button title="trigger" variant="ghost" />
      <Button title="completed" variant="ghost" />
      <div class="absolute top-full left-1/2 translate-y-6 -translate-x-1/2 z-50">
        <ul class="flex items-center gap-3">
          <li class="flex items-center text-[rgba(17,24,39,1)]">
            <button>
              <IconDesktop />
            </button>
          </li>
          <li class="flex items-center text-[rgba(201,208,219,1)]">
            <button>
              <IconMobile />
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex gap-2">
      <Button title="preview" variant="outline" />
      <Button title="publish" variant="solid" @click-event="emit('show-event',true)" />
    </div>
  </header>
</template>

<script setup>
import {
  IconLeftArrow,
  IconHelp,
  IconForwardArrow,
  IconPreviousArrow,
  IconDesktop,
  IconMobile
} from '@/components/icons'
import Button from '@/components/Button.vue'
import {defineEmits} from "vue"
const emit=defineEmits(['show-event']);
</script>
