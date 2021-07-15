<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import { useRoute } from 'vue-router';

interface NavbarRoute {
  name: string;
  displayName: string;
}

export default defineComponent({
  props: {
    routes: Object as PropType<NavbarRoute>,
  },
  setup(props) {
    const route = useRoute();
    const path = computed(() => route.path);
    return { path };
  },
});
</script>
