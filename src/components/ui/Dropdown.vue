<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  items: string[];
}

defineProps<Props>();

const emit = defineEmits<{
  select: [item: string];
}>();

const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

document.addEventListener('click', (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
});

function clickHandler(item: string) {
  emit('select', item);
  isOpen.value = false;
}
</script>

<template>
  <div ref="dropdownRef" class="dropdown">
    <button class="dropdown-trigger" @click="isOpen = !isOpen">
      <slot name="trigger">Dropdown</slot>
    </button>
    <Transition name="fade">
      <ul v-if="isOpen" class="dropdown-menu">
        <li v-for="item in items" :key="item" class="dropdown-item" @click="clickHandler(item)">
          {{ item }}
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-trigger {
  background: var(--color-primary);
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid var(--color-secondary);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  min-width: 150px;
  list-style: none;
  padding: 0;
  margin-top: 5px;
}

.dropdown-item {
  padding: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
}

.dropdown-item:hover {
  background: var(--color-secondary);
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
