<template>
<!--eslint-disable max-len-->
  <div class="home max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div
      class="container flex flex-col justify-center items-center flex-wrap gap-4 p-4"
    >
      <person-card
        v-for="person in people"
        :key="person.number"
        :name="person.name"
        :phone="person.phone"
        :fb="person.facebook"
      />
    </div>
  </div>
<!--eslint-enable max-len-->
</template>

<script lang="ts">
import { capitalCase } from 'change-case-all';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import PersonCard from '@/components/PersonCard.vue';
import data from '@/data.json';

export default defineComponent({
  components: {
    PersonCard,
  },
  setup() {
    const route = useRoute();
    const group = route.params.groupId ? route.params.groupId : 'electro-1';
    const people = data.people.filter((person) => person.group === group);
    return { group, people };
  },
});
</script>
