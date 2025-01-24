<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'primary',
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'md',
  },
})
</script>
<template>
  <button
    :class="['button', `button--${type}`, `button--${size}`, { 'button--disabled': isDisabled }]"
    :disabled="isDisabled"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 600;
  transition: background-color 0.2s ease;
  text-transform: uppercase;
}

.button:hover {
  cursor: pointer;
}

.button--primary {
  background-color: var(--color-primary);
  color: white;
  border: none;
}

.button--primary:hover {
  background-color: var(--color-primary-hover);
}

.button--secondary {
  background-color: var(--color-secondary);
  color: var(--color-text);
  border: none;
}

.button--secondary:hover {
  background-color: var(--color-secondary-hover);
}

.button--sm {
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
}

.button--md {
  font-size: 1rem;
  padding: 0.5rem 1rem;
}

.button--lg {
  font-size: 1.125rem;
  padding: 0.75rem 1.5rem;
}

.button--disabled {
  background-color: var(--color-disabled);
  color: var(--color-disabled-text);
  cursor: not-allowed;
  pointer-events: none;
}
</style>
