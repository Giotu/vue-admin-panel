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
@import '../../assets/styles/variables';

.link {
  text-decoration: none;
  color: inherit;
  transition: color 0.2s ease;

  &--primary {
    color: $color-primary;

    &:hover {
      color: $color-primary-hover;
    }
  }

  &--secondary {
    color: $color-secondary-link;

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
