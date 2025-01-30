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

<style scoped>
.radio {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.5rem;
  font-size: 1rem;
  color: var(--color-text, #333);
}

.radio--input {
  display: none;
}

.radio--circle {
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid var(--color-border, #ccc);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  background-color: white;
}

.radio--input:checked + .radio--circle {
  border-color: var(--color-primary, #007bff);
  background-color: var(--color-primary, #007bff);
}

.radio--input:checked + .radio--circle::after {
  content: '';
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
}

.radio_sm {
  font-size: 0.875rem;
}
.radio_sm .radio--circle {
  width: 1rem;
  height: 1rem;
}

.radio_lg {
  font-size: 1.125rem;
}
.radio_lg .radio--circle {
  width: 1.5rem;
  height: 1.5rem;
}

.is-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.radio--input:disabled + .radio--circle {
  background-color: var(--color-disabled-bg);
  border-color: var(--color-disabled-border);
}
</style>
