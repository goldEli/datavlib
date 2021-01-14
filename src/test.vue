<template>
  <div>
    <svg width="0" height="0">
      <defs>
        <symbol id="more" viewBox="0 0 100 100">
          <circle r="5" cx="20" cy="25" fill="currentColor" />
          <circle r="5" cx="20" cy="50" fill="currentColor" />
          <circle r="5" cx="20" cy="75" fill="currentColor" />
          <line x1="40" y1="25" x2="90" y2="25" stroke-width="8" stroke="currentColor" />1
          <line x1="40" y1="50" x2="90" y2="50" stroke-width="8" stroke="currentColor" />1
          <line x1="40" y1="75" x2="90" y2="75" stroke-width="8" stroke="currentColor" />1
        </symbol>
      </defs>
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