<script setup lang="ts">
interface Props {
  type?: 'primary' | 'secondary' | 'info';
  isDisabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const { type = 'primary', isDisabled = false, size = 'md' } = defineProps<Props>();
</script>
<template>
  <button
    :class="['button', `button--${type}`, `button_${size}`, { button_disabled: isDisabled }]"
    :disabled="isDisabled"
  >
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.button {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 600;
  transition: background-color 0.2s ease;
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  &--primary {
    background-color: $color-primary;
    color: white;

    &:hover {
      background-color: $color-primary-hover;
    }
  }

  &--secondary {
    background-color: $color-secondary;
    color: $color-text;

    &:hover {
      background-color: $color-secondary-hover;
    }
  }

  &--info {
    background-color: $color-info;
    color: white;

    &:hover {
      background-color: $color-info-hover;
    }
  }

  &_sm {
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
  }

  &_md {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }

  &_lg {
    font-size: 1.125rem;
    padding: 0.75rem 1.5rem;
  }

  &_disabled {
    background-color: $color-disabled;
    color: $color-disabled-text;
    cursor: not-allowed;
    pointer-events: none;
  }
}
</style>
