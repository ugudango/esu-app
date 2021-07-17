<template>
  <svg
    :color="svgColor"
    :style="svgStyle"
    :viewBox="svgViewBox"
  >
    <path fill="currentColor" :d="mdi[icon]"/>
  </svg>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import * as mdi from '@mdi/js';

export default defineComponent({
  props: {
    svgColor: {
      type: String,
      default: 'black',
    },
    svgStyle: {
      type: String,
      default: 'width:24px;height:24px',
    },
    svgViewBox: {
      type: String,
      default: '0 0 24 24',
    },
  },
  setup(_, { slots }) {
    const icon = ref('mdiAccountBox');

    if (slots.default
    && typeof slots.default()[0].children === 'string'
    && slots.default()[0].children !== null) {
      icon.value = (slots.default()[0].children as string).trim();
    }

    return { icon, mdi };
  },
});
</script>
