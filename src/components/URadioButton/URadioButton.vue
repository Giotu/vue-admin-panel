<script setup lang="ts">
import { useId } from '@/composables/useId';

const id = useId('radio');
interface Props {
  name: string;
  label: string;
  value: string | number | boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const { disabled = false, size = 'md' } = defineProps<Props>();

const model = defineModel<string | number | boolean>();
</script>

<template>
  <label :for="id" class="radio" :class="[{ 'is-disabled': disabled }, `radio_${size}`]">
    <input
      :id="id"
      v-model="model"
      type="radio"
      :name="name"
      :value="value"
      class="radio--input"
      :disabled="disabled"
    />
    <span class="radio--circle"></span>
    <span class="radio--label">{{ label }}</span>
  </label>
</template>

<style scoped lang="scss">
.radio {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.5rem;
  font-size: 1rem;
  color: $color-text;

  &--input {
    display: none;

    &:checked + .radio--circle {
      border-color: $color-primary;
      background-color: $color-primary;

      &::after {
        content: '';
        width: 8px;
        height: 8px;
        background: white;
        border-radius: 50%;
      }
    }

    &:disabled + .radio--circle {
      background-color: $color-disabled-bg;
      border-color: $color-disabled-border;
    }
  }

  &--circle {
    width: 1.25rem;
    height: 1.25rem;
    border: 2px solid $color-border;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;
    background-color: white;
  }

  &_sm {
    font-size: 0.875rem;

    .radio--circle {
      width: 1rem;
      height: 1rem;
    }
  }

  &_lg {
    font-size: 1.125rem;

    .radio--circle {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
}

.is-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
