<script setup lang="ts">
import { computed, ref, watch } from 'vue';

interface Props {
  imageUrl?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  placeholder?: string;
  shape?: 'round' | 'square';
  bgColor?: string;
  textColor?: string;
}

const props = defineProps<Props>();

const { imageUrl, alt = 'User avatar', size = 'md', placeholder = '', shape = 'round' } = props;

const initials = computed(() => {
  if (!placeholder) return 'Me';
  const words = placeholder.trim().split(/\s+/);
  return words
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? '')
    .join('');
});

const isImageError = ref(false);

watch(
  () => imageUrl,
  () => {
    isImageError.value = false;
  },
);

const handleImageError = () => {
  isImageError.value = true;
};
</script>

<template>
  <div
    class="avatar"
    :class="[`avatar_${size}`, `avatar_${shape}`]"
    :style="{ backgroundColor: bgColor, color: textColor }"
  >
    <img
      v-if="imageUrl && !isImageError"
      :src="imageUrl"
      :alt="alt"
      class="avatar--image"
      @error="handleImageError"
    />
    <span v-else class="avatar--placeholder"
      ><slot name="placeholder">
        {{ initials }}
      </slot></span
    >
  </div>
</template>

<style scoped>
.avatar {
  overflow: hidden;
  background-color: var(--color-primary);
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  user-select: none;
}

.avatar_sm {
  width: 2rem;
  height: 2rem;
  font-size: 0.875rem;
}

.avatar_md {
  width: 3rem;
  height: 3rem;
  font-size: 1rem;
}

.avatar_lg {
  width: 4rem;
  height: 4rem;
  font-size: 1.25rem;
}

.avatar_round {
  border-radius: 50%;
}

.avatar--image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar--placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
