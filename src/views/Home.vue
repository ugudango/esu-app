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
        :name="capitalCase(group)"
        :icon="getCustomization(group)[0]"
        :start-color="getCustomization(group)[1]"
        stop-color="gray-700"
        direction="tr"
      />
    </div>
  </div>
<!--eslint-enable max-len-->
</template>

<script lang="ts">
import { capitalCase } from 'change-case-all';
import { defineComponent } from 'vue';
import GroupCard from '@/components/GroupCard.vue';
import data from '@/data.json';

export default defineComponent({
  components: {
    GroupCard,
  },
  setup() {
    const groups = [...new Set(data.people.map((person) => person.group))];

    function getCustomization(group: string): [string, string] {
      switch (group.trim().split('-')[0]) {
        case 'electro':
          return ['mdiFlashCircle', 'yellow-400'];
        case 'constructii':
          return ['mdiWall', 'red-400'];
        case 'mecanica':
          return ['mdiCog', 'green-300'];
        default:
          return ['mdiAccountMultiple', 'gray-200'];
      }
    }

    return {
      data, groups, capitalCase, getCustomization,
    };
  },
});
</script>
