<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
</script>
<template>
  <Button>Primary</Button>
  <Button type="secondary" size="lg">secondary</Button>
  <Button type="info" size="sm">Info</Button>
  <Button is-disabled>disabled</Button>
</template>
