<script setup lang="ts">
interface Props {
  title: string;
  description?: string;
  imageUrl?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="card">
    <div class="card--content">
      <div class="card--header">
        <h3 v-if="title" class="card--title">{{ title }}</h3>
        <p v-if="description" class="card--description">{{ description }}</p>
      </div>
      <img v-if="imageUrl" :src="imageUrl" alt="Card image" class="card--image" />
      <div class="card--body">
        <slot></slot>
      </div>
      <div v-if="$slots.footer" class="card--footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  background: white;
  border-radius: $border-radius;
  box-shadow: 4px 6px 20px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &--image {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
  }

  &--content {
    padding: 1.5rem;
  }

  &--header {
    margin-bottom: 1rem;
  }

  &--title {
    font-size: 1.25rem;
    font-weight: 600;
    color: $color-text;
    margin-bottom: 0.5rem;
  }

  &--description {
    font-size: 0.875rem;
    color: $color-disabled-text;
  }

  &--body {
    margin: 1rem 0;
  }

  &--footer {
    border-top: 1px solid $color-secondary;
    padding-top: 1rem;
    margin-top: 1rem;
  }
}
</style>
