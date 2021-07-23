<template>
  <!--eslint-disable max-len-->
  <div class="home max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="font-raleway mt-4 font-extrabold text-3xl">
      Schedule:
    </div>

    <div class="container flex flex-col flex-wrap gap-4 p-4">
      <div class="flex flex-col flex-shrink-0 gap-4 mx-auto">
        <div
          class="rounded-lg w-full bg-gray-300 flex flex-col flex-shrink justify-items-start flex-1 mx-auto p-4"
          :class="{'bg-blue-200 border-blue-400 border-2': isToday(new Date(day))}"
          v-for="(content, day) in schedule"
          :key="day"
        >
          <span class="font-raleway font-semibold text-2xl">
            {{ day }}
          </span>
          <span
            v-for="event in content"
            :key="event.time"
            class="self-start justify-start text-left"
          >
            <span class="font-bold">{{ event.time }}</span> - {{ event.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
  <!--eslint-enable max-len-->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import data from '@/data.json';

export default defineComponent({
  components: {},
  setup() {
    const { schedule } = data;

    const isToday = (someDate: Date) => {
      const today = new Date();
      return (
        someDate.getDate() === today.getDate()
        && someDate.getMonth() === today.getMonth()
        && someDate.getFullYear() === today.getFullYear()
      );
    };

    return {
      data,
      schedule,
      isToday,
    };
  },
});
</script>
