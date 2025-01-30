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

<style scoped lang="scss">
.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  &--label {
    font-size: 1rem;
    font-weight: 600;
    color: $color-text;
  }

  &--container {
    border: 1px solid $color-secondary;
    border-radius: 0.375rem;
    transition: border-color 0.2s ease;
    background: white;

    &:focus-within {
      border-color: $color-primary;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
    }
  }

  &--input {
    width: 100%;
    border: none;
    outline: none;
    color: $color-text;
    background: transparent;
    caret-color: $color-primary;

    &::placeholder {
      color: $color-text;
      opacity: 0.7;
    }

    &_md {
      font-size: 0.875rem;
      padding: 0.5rem;
    }

    &_lg {
      font-size: 1rem;
      padding: 0.75rem;
    }
  }

  &--error {
    border-color: $color-error;

    &:focus-within {
      border-color: $color-error;
      box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.1);
    }
  }
}

.error-message {
  color: $color-error;
  font-size: 0.75rem;
  margin-top: 0.25rem;
}

.field--disabled {
  border-color: $color-disabled;
  background: $color-disabled;

  .field--input {
    cursor: not-allowed;
  }
}
</style>
