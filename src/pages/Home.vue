<script setup lang="ts">
import Avatar from '@/components/ui/Avatar.vue';
import Button from '@/components/ui/Button.vue';
import Card from '@/components/ui/Card.vue';
import Checkbox from '@/components/ui/Checkbox.vue';
import RadioButton from '@/components/ui/RadioButton.vue';
import Field from '@/components/ui/Field.vue';
import Tabs from '@/components/ui/Tabs.vue';
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
</script>

<template>
  <div style="display: flex; gap: 1rem; margin: 1rem; align-items: center; flex-wrap: wrap">
    <Button>Primary</Button>
    <Button type="secondary" size="lg">secondary</Button>
    <Button type="info" size="sm">Info</Button>
    <Button is-disabled>disabled</Button>
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
    <Card
      title="Monkey"
      description="Monkey selfie copyright dispute"
      image-url="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Macaca_nigra_self-portrait_large.jpg/800px-Macaca_nigra_self-portrait_large.jpg"
    >
      <template #footer>
        <Button type="info">more details</Button>
      </template>
    </Card>

    <Avatar imageUrl="https://avatar.iran.liara.rds" alt="User 1" size="sm" />
    <Avatar imageUrl="https://avatar.iran.liara.run/public" alt="User 2" size="md" />
    <Avatar imageUrl="https://avatar.iran.liara.run/public" alt="User 3" size="lg" />

    <Avatar placeholder="John Doe" size="sm" />
    <Avatar placeholder="Jane Smith" size="md" />
    <Avatar placeholder="Alex" size="lg" />

    <Avatar shape="square" />

    <Avatar bg-color="#4a5568" text-color="#cbd5e0" placeholder="Alexey" shape="square" />

    <Checkbox v-model="checked" label="Checkbox" name="checkbox" value="1" />
    {{ checked }}

    <Checkbox v-model="group" value="option1" label="Option 1" name="group" />
    <Checkbox v-model="group" value="option2" label="Option 2" name="group" />
    {{ group }}

    <RadioButton id="1" v-model="radio" label="Radio 1" name="radio" value="1" size="lg" />
    <RadioButton id="2" v-model="radio" label="Radio 2" name="radio" value="2" />
    <RadioButton id="3" v-model="radio" label="Radio 3" name="radio" value="3" size="sm" disabled />
    {{ radio }}

    <Tabs :tabs="tabs" :selected-tab="selectedTab" @update-tab="selectedTab = $event">
      <div v-if="selectedTab === 'tab1'">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis voluptates ab ad omnis velit
        molestias. Distinctio possimus et nisi ex?
      </div>
      <div v-if="selectedTab === 'tab2'">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, delectus?
      </div>
    </Tabs>
  </div>
</template>
