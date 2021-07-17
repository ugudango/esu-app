<template>
<!--eslint-disable max-len-->
  <div class="home max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="font-raleway mt-4 font-extrabold text-3xl">
      Select your group:
    </div>

    <div
      class="container flex flex-row justify-center flex-wrap gap-4 p-4"
    >
      <group-card
        v-for="group in groups"
        :key="group"
        :name="group"
        :icon="getCustomization(group)[0]"
        :start-color="getCustomization(group)[1]"
        :stop-color="getCustomization(group)[2]"
        direction="tr"
      />
    </div>
  </div>
<!--eslint-enable max-len-->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GroupCard from '@/components/GroupCard.vue';
import data from '@/data.json';

export default defineComponent({
  components: {
    GroupCard,
  },
  setup() {
    const groups = [...new Set(data.people.map((person) => person.group))];

    function getCustomization(group: string): [string, string, string] {
      switch (group.trim().split('-')[0]) {
        case 'electro':
          return ['mdiFlashCircle', 'yellow-300', 'yellow-500'];
        case 'constructii':
          return ['mdiWall', 'red-400', 'red-600'];
        case 'mecanica':
          return ['mdiCog', 'indigo-300', 'indigo-600'];
        default:
          return ['mdiAccountMultiple', 'gray-200', 'gray-600'];
      }
    }

    return {
      data, groups, getCustomization,
    };
  },
});
</script>
