<template>
  <svg width="100%" height="100%" viewBox="0 0 100 100">
    <line x1="0" y1="50" x2="100" y2="50" stroke-width="8" stroke="currentColor" />
    <line x1="50" y1="0" x2="50" y2="100" stroke-width="8" stroke="currentColor" />
  </svg>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'TestComponent',
  setup() {
    const count = ref(1)
    return {
      count,
    }
  },
}
</script>
<style lang="scss" scoped>
</style>