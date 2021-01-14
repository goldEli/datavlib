<template>
  <button class="test">{{count}}</button>
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
.test {
  color: red;
}
</style>