<script setup lang="ts">
import {
  UTabs,
  UInput,
  UButton,
  Avatar,
  UCard,
  UCheckbox,
  URadioButton,
  UTooltip,
  UModal,
  UDropdown,
} from '@/components';

import { ref } from 'vue';

const text = ref('');
const checked = ref(false);
const group = ref([]);
const radio = ref('');
const tabs = ref([
  { name: 'tab1', label: 'Tab 1' },
  { name: 'tab2', label: 'Tab 2' },
]);

const selectedTab = ref('tab1');
const modalOpen = ref(false);
</script>

<template>
  <div style="display: flex; gap: 1rem; margin: 1rem; align-items: center; flex-wrap: wrap">
    <UButton>Primary</UButton>
    <UButton type="secondary" size="lg">secondary</UButton>
    <UButton type="info" size="sm">Info</UButton>
    <UButton is-disabled>disabled</UButton>
    <UInput v-model="text" placeholder="Search here" />
    <UInput v-model="text" placeholder="Input your name" size="lg" label="Name:" />
    <UInput
      v-model="text"
      placeholder="Input your name"
      size="lg"
      label="Test error"
      :error="text.length < 8"
      error-message="Minimum 8 characters"
    />
    <UCard
      title="Monkey"
      description="Monkey selfie copyright dispute"
      image-url="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Macaca_nigra_self-portrait_large.jpg/800px-Macaca_nigra_self-portrait_large.jpg"
    >
      <template #footer>
        <UButton type="info">more details</UButton>
      </template>
    </UCard>

    <Avatar imageUrl="https://avatar.iran.liara.rds" alt="User 1" size="sm" />
    <Avatar imageUrl="https://avatar.iran.liara.run/public" alt="User 2" size="md" />
    <Avatar imageUrl="https://avatar.iran.liara.run/public" alt="User 3" size="lg" />

    <Avatar placeholder="John Doe" size="sm" />
    <Avatar placeholder="Jane Smith" size="md" />
    <Avatar placeholder="Alex" size="lg" />

    <Avatar shape="square" />

    <Avatar bg-color="#4a5568" text-color="#cbd5e0" placeholder="Alexey" shape="square" />

    <UDropdown :items="['Item 1', 'Item 2', 'Item 3']" @select="console.log($event)" />

    <UCheckbox v-model="checked" label="Checkbox" name="checkbox" value="1" />
    {{ checked }}

    <UCheckbox v-model="group" value="option1" label="Option 1" name="group" />
    <UCheckbox v-model="group" value="option2" label="Option 2" name="group" />
    {{ group }}

    <URadioButton id="1" v-model="radio" label="Radio 1" name="radio" value="1" size="lg" />
    <URadioButton id="2" v-model="radio" label="Radio 2" name="radio" value="2" />
    <URadioButton
      id="3"
      v-model="radio"
      label="Radio 3"
      name="radio"
      value="3"
      size="sm"
      disabled
    />
    {{ radio }}

    <UTabs :tabs="tabs" :selected-tab="selectedTab" @update-tab="selectedTab = $event">
      <div v-if="selectedTab === 'tab1'">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis voluptates ab ad omnis velit
        molestias. Distinctio possimus et nisi ex?
      </div>
      <div v-if="selectedTab === 'tab2'">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, delectus?
      </div>
    </UTabs>

    <span>
      <UTooltip
        text="Lorem ipsum is a dummy or placeholder text commonly used in graphic design,
        publishing, and web development to fill empty spaces in a layout that does not yet have content."
        >Lorem, ipsum
      </UTooltip>
      dolor sit amet consectetur adipisicing elit. At, nulla. Sed illum similique vitae asperiores!
    </span>

    <UModal v-model="modalOpen" title="Modal title" />
  </div>
</template>
