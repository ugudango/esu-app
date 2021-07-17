<template>
<!--eslint-disable max-len-->
  <div class="w-32 rounded-lg flex flex-col items-center py-4 cursor-pointer"
    :class="[`bg-gradient-to-${direction}`, `from-${startColor}`, `to-${stopColor}`]"
    @click="$router.push({ name: 'Group Page', params: { groupId: name}})"
  >
    <icon
      svg-color="white"
      svg-style="width:48px;height:48px"
    >
      {{ icon }}
    </icon>

    <span class="font-raleway font-bold text-gray-50 mt-4 select-none">
      {{ capitalCase(name) }}
    </span>
  </div>
<!--eslint-enable max-len-->
</template>

<script lang="ts">
import { capitalCase } from 'change-case-all';
import { defineComponent } from 'vue';
import { mdiFlashCircle } from '@mdi/js';
import Icon from './util/Icon.vue';

export default defineComponent({
  components: {
    Icon,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    startColor: {
      type: String,
      required: true,
    },
    stopColor: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: 'br',
    },
    icon: {
      type: String,
      default: 'mdiAccountMultiple',
    },
  },
  setup() {
    return { mdiFlashCircle, capitalCase };
  },
});
</script>
