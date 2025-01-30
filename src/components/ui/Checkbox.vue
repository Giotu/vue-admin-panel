<script setup lang="ts">
import { computed } from 'vue';
import { useId } from '@/composables/useId';

const id = useId('checkbox');
interface Props {
  name: string;
  label: string;
  value: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const { value, size = 'md' } = defineProps<Props>();

const model = defineModel<boolean | string[]>();

const isChecked = computed({
  get() {
    return Array.isArray(model.value) ? model.value.includes(value) : model.value;
  },
  set(newValue) {
    if (Array.isArray(model.value)) {
      model.value = newValue
        ? [...model.value, value]
        : model.value.filter((item) => item !== value);
    } else {
      model.value = newValue;
    }
  },
});
</script>

<template>
  <label :for="id" class="checkbox" :class="[{ 'is-disabled': disabled }, `checkbox_${size}`]">
    <input
      :id="id"
      v-model="isChecked"
      type="checkbox"
      :name="name"
      class="checkbox--input"
      :disabled="disabled"
      :value="value"
    />
    <span class="checkbox--box"></span>
    {{ label }}
  </label>
</template>

<style scoped lang="scss">
.checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.5rem;
  font-size: 1rem;
  color: $color-text;

  &--box {
    width: 1.25rem;
    height: 1.25rem;
    border: 2px solid $color-border;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;
    background-color: white;
  }

  &--input {
    display: none;

    &:checked + .checkbox--box {
      background-color: $color-primary;
      border-color: $color-primary;

      &::after {
        content: '';
        width: 12px;
        height: 8px;
        background: currentColor;
        mask: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath fill='none' stroke='%23fff' stroke-width='2' d='M1 4l3.5 3L11 1'/%3E%3C/svg%3E");
        color: white;
        font-size: 1rem;
        font-weight: bold;
      }
    }

    &:disabled + .checkbox--box {
      background-color: $color-disabled-bg;
      border-color: $color-disabled-border;
    }
  }

  &_sm {
    font-size: 0.875rem;

    .checkbox--box {
      width: 1rem;
      height: 1rem;
    }
  }

  &lg {
    font-size: 1.125rem;

    .checkbox--box {
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
