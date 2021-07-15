<template>
  <div id="nav">
    <router-link to="/esu-app/">Home</router-link> |
    <router-link to="/esu-app/about/">About</router-link>
    <div
      class="bg-red-500"
    >
      {{ path }}
    </div>
  </div>
  <router-view/>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();
    const path = computed(() => route.path);
    return { path };
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
