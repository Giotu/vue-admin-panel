<script setup lang="ts">
interface Props {
  type?: string;
  placeholder?: string;
  label?: string;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  size?: 'md' | 'lg';
}

const {
  type = 'text',
  placeholder = 'Input text',
  disabled = false,
  error = false,
  size = 'md',
} = defineProps<Props>();

const model = defineModel();
</script>

<template>
  <div class="field">
    <label v-if="label" class="field--label">{{ label }}</label>
    <div class="field--container" :class="{ 'field--error': error, 'field--disabled': disabled }">
      <input
        v-model="model"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="['field--input', `field--input_${size}`]"
      />
    </div>
    <span v-if="error && errorMessage" class="error-message">{{ errorMessage }}</span>
  </div>
</template>

<style scoped>
.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

.field--label {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
}

.field--container {
  border: 1px solid var(--color-secondary);
  border-radius: 0.375rem;
  transition: border-color 0.2s ease;
  background: white;
}

.field--container:focus-within {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
}

.field--input {
  width: 100%;
  border: none;
  outline: none;
  color: var(--color-text);
  background: transparent;
  caret-color: var(--color-primary);
}

.field--input_lg {
  font-size: 1rem;
  padding: 0.75rem;
}

.field--input_md {
  font-size: 0.875rem;
  padding: 0.5rem;
}

.field--input::placeholder {
  color: var(--color-text);
  opacity: 0.7;
}

.field--error {
  border-color: var(--color-error);
}

.field--error:focus-within {
  border-color: var(--color-error);
  box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.1);
}

.error-message {
  color: var(--color-error);
  font-size: 0.75rem;
  margin-top: 0.25rem;
}

.field--disabled {
  border-color: var(--color-disabled);
  background: var(--color-disabled);
  cursor: not-allowed;
}

.field--disabled .field--input {
  cursor: not-allowed;
}
</style>
