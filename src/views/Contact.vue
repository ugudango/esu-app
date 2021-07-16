<template>
  Oh no! {{ random }}
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
      random: Math.random(),
    };
  },
});
</script>
