<script setup lang="ts">
import { ref } from 'vue';
import { ULink } from '@/components';

interface SidebarItem {
  label: string;
  to: string;
}

const sidebarItems = ref<SidebarItem[]>([{ label: 'Dashboard', to: '/' }]);
</script>

<template>
  <div class="layout">
    <aside class="layout--sidebar">
      <slot name="sidebar">
        <nav>
          <ul>
            <li v-for="item in sidebarItems" :key="item.label">
              <ULink :to="item.to">{{ item.label }}</ULink>
            </li>
          </ul>
        </nav>
      </slot>
    </aside>
    <main class="layout--content">
      <slot></slot>
    </main>
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  min-height: 100vh;

  &--sidebar {
    position: relative;
    width: 250px;
    background-color: $color-secondary;
    color: white;
    padding: 1rem;
    overflow: hidden;
    transition: width 0.2s ease;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }

  &--content {
    flex: 1;
    padding: 1rem;
  }
}
</style>
