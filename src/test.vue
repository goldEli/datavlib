<template>
  <div>
    <svg width="100%" height="100%" viewBox="0 0 100 100">
      <line x1="0" y1="50" x2="100" y2="50" stroke-width="8" stroke="currentColor" />
      <line x1="50" y1="0" x2="50" y2="100" stroke-width="8" stroke="currentColor" />
    </svg>
    <svg width="500" height="200" viewBox="0 0 50 20" style="border: 1px solid #000000">
      <rect x="20" y="10" width="10" height="5" style="stroke:#000000; fill: none" />
    </svg>
    <svg 
      width="500" 
      height="200" 
      viewBox="0 0 200 200" 
      style="border: 1px solid #000000"
      preserveAspectRatio="xMinYMid meet"
    >
      <rect x="200" y="100" width="100" height="50" stroke-width="10" style="stroke:#000000; fill: none" />
    </svg>
  </div>
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