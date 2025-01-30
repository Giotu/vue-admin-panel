<script setup lang="ts">
interface Props {
  tabs: { name: string; label: string }[];
  selectedTab?: string;
}

defineProps<Props>();

const emit = defineEmits<{
  updateTab: [name: string];
}>();
</script>

<template>
  <div class="tabs">
    <div class="tab-nav">
      <span
        v-for="tab in tabs"
        :key="tab.name"
        :class="['tab-nav--item', { 'tab-nav--item_active': tab.name === selectedTab }]"
        @click="emit('updateTab', tab.name)"
      >
        {{ tab.label }}
      </span>
    </div>
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tab-nav {
  display: flex;
  gap: 0.5rem;

  &--item {
    padding: 1rem;
    border: 1px solid $color-primary;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: $color-primary-hover;
      color: white;
    }

    &_active {
      background-color: $color-primary;
      color: white;
    }
  }
}

.tab-content {
  padding: 1rem;
  border: 1px solid $color-secondary;
  border-radius: 0 0 6px 6px;
}
</style>
