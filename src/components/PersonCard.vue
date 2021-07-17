<template>
<!--eslint-disable max-len-->
  <div
    class="w-full flex flex-col bg-gray-200 rounded-lg p-4 items-start"
  >
    <div
      class="text-xl font-raleway font-bold"
    >
      {{ name }}
    </div>
    <div class="flex flex-row items-center mt-2">
      <icon svgColor="gray">mdiPhone</icon>
      <span class="ml-2 mt-1">{{ phone }}</span>
    </div>
    <div class="flex flex-row items-center">
      <icon svgColor="gray">mdiFacebook</icon>
      <a class="text-blue-500 ml-2 mt-1" :href="fb" > Facebook/IG </a>
    </div>
  </div>
<!--eslint-enable max-len-->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import data from '@/data.json';
import Icon from './util/Icon.vue';

export default defineComponent({
  components: {
    Icon,
  },
  props: {
    name: String,
    phone: String,
    fb: String,
  },
  setup() {
    return {};
  },
});
</script>
