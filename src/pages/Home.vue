<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import Field from '@/components/ui/Field.vue';
import { ref } from 'vue';

const text = ref('');
</script>

<template>
  <Button>Primary</Button>
  <Button type="secondary" size="lg">secondary</Button>
  <Button type="info" size="sm">Info</Button>
  <Button is-disabled>disabled</Button>
  <div style="width: 400px; display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem">
    <Field v-model="text" placeholder="Search here" />
    <Field v-model="text" placeholder="Input your name" size="lg" label="Name:" />
    <Field
      v-model="text"
      placeholder="Input your name"
      size="lg"
      label="Test error"
      :error="text.length < 8"
      error-message="Minimum 8 characters"
    />
  </div>
</template>
