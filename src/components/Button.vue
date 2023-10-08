<template>
  <button @click="emit('click-event')" :class="['button', VariantClass[props.variant],ButtonWidthSize[props.widthSize]]">
    <slot></slot>
    <span
      v-if="props.title"
      :class="['button__text',ButtonWidthSize[props.widthSize],props.variant == 'ghost' ? (props.isActive ? 'variant__ghost__active' : '') : '']"
      >{{ props.title }}</span
    >
  </button>
</template>

<script lang="ts" setup>
import { defineProps,defineEmits} from "vue"
const emit=defineEmits(['click-event']);

type VariantType = 'solid' | 'ghost' | 'outline' | 'soft'
type SizeType = 'wide' | 'full' | 'default'

interface IButton {
  title?: string
  variant?: VariantType
  isActive?: boolean
  widthSize?: SizeType
}
enum ButtonWidthSize {
  'default' = '',
  'wide' = 'button__size_wide',
  'full' = 'button__size_full'
}
enum VariantClass {
  'solid' = 'variant__solid',
  'ghost' = 'variant__ghost',
  'outline' = 'variant__outline',
  'soft' = 'variant__soft'
}

const props = withDefaults(defineProps<IButton>(), {
  variant: 'soft',
  isActive: false,
  widthSize: 'default'
})
</script>

<style lang="scss" scoped>
.button {
  &__text {
    @apply font-urbanist capitalize;
  }
  &__size {
    &_wide {
      @apply w-3/6 justify-center;
    }
    &_full {
      @apply w-full justify-center;
    }
  }

  @apply h-[32px] flex items-center gap-2 rounded-md;
}

.variant {
  &__solid {
    @apply bg-[rgba(17,24,39,1)] text-white px-4 text-xs;
  }

  &__soft {
    @apply bg-[rgba(242,246,251,1)] text-[rgba(130,140,154,1)] px-3 text-sm;
  }

  &__outline {
    @apply bg-transparent text-black border border-black px-4 text-xs;
  }

  &__ghost {
    @apply bg-transparent border-0 text-[rgba(130,140,154,1)] text-base;
    &__active {
      @apply text-black;
    }
  }
}
</style>
