<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  text: string;
}

defineProps<Props>();

const isVisible = ref(false);
</script>

<template>
  <div class="tooltip-container" @mouseenter="isVisible = true" @mouseleave="isVisible = false">
    <slot></slot>
    <Transition name="fade">
      <div v-if="isVisible" class="tooltip">
        {{ text }}
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.tooltip-container {
  position: relative;
  display: inline-block;
}

.tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 6px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
  max-width: 300px;
  width: max-content;
  word-wrap: break-word;
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) scale(0.8);
}
</style>
