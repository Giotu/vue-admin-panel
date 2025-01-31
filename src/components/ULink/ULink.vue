<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  to?: string;
  external?: boolean;
  type?: 'primary' | 'secondary';
  disabled?: boolean;
}

const { to = '#', external = false, type = 'primary', disabled = false } = defineProps<Props>();

const isExternalLink = computed(() => external || to.startsWith('http'));

const tag = computed(() => (isExternalLink.value ? 'a' : 'router-link'));

const linkClasses = computed(() => {
  return ['link', `link--${type}`, { link_disabled: disabled }];
});
</script>

<template>
  <component
    :is="tag"
    v-bind="isExternalLink ? { href: to } : { to: to }"
    :class="linkClasses"
    :disabled="disabled"
    @click="(event: MouseEvent) => disabled && event.preventDefault()"
  >
    <slot></slot>
  </component>
</template>

<style scoped lang="scss">
.link {
  display: inline-block;
  position: relative;
  font-weight: 600;
  border-radius: 0.375rem;
  text-decoration: none;
  transition: color 0.2s ease;
  padding: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.2s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &--primary {
    color: $color-primary;

    &::after {
      background-color: $color-primary;
    }

    &:hover {
      color: $color-primary-hover;
    }
  }

  &--secondary {
    color: $color-secondary-link;

    &::after {
      background-color: $color-secondary-link;
    }

    &:hover {
      color: $color-secondary-link-hover;
    }
  }

  &_disabled {
    pointer-events: none;
    color: $color-disabled-text;
  }
}
</style>
