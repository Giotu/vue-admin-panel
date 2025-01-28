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
    <div class="card__content">
      <div class="card__header">
        <h3 v-if="title" class="card__title">{{ title }}</h3>
        <p v-if="description" class="card__description">{{ description }}</p>
      </div>
      <img v-if="imageUrl" :src="imageUrl" alt="Card image" class="card__image" />
      <div class="card__body">
        <slot></slot>
      </div>
      <div v-if="$slots.footer" class="card__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: 4px 6px 20px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.card__image {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
}

.card__content {
  padding: 1.5rem;
}

.card__header {
  margin-bottom: 1rem;
}

.card__title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.card__description {
  font-size: 0.875rem;
  color: var(--color-disabled-text);
}

.card__body {
  margin: 1rem 0;
}

.card__footer {
  border-top: 1px solid var(--color-secondary);
  padding-top: 1rem;
  margin-top: 1rem;
}
</style>
