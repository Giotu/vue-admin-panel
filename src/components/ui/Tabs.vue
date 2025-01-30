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

<style scoped>
.tab-nav {
  display: flex;
  gap: 0.5rem;
}

.tab-nav--item {
  padding: 1rem;
  border: 1px solid var(--color-primary);
  cursor: pointer;
  transition: all 0.3s;
}

.tab-nav--item:hover {
  background-color: var(--color-primary-hover);
  color: white;
}

.tab-nav--item_active {
  background-color: var(--color-primary);
  color: white;
}

.tab-content {
  padding: 1rem;
  border: 1px solid var(--color-secondary);
  border-radius: 0 0 6px 6px;
}
</style>
