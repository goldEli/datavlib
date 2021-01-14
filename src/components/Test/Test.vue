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
        <symbol id="data" viewBox="0 0 1024 1024">
          <svg t="1610610922922" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1540">
            <path
              d="M143.36 174.08a30.72 30.72 0 0 1 30.69952 29.568L174.08 204.8v583.68h706.56a30.72 30.72 0 0 1 30.69952 29.568L911.36 819.2a30.72 30.72 0 0 1-29.568 30.69952L880.64 849.92H143.36a30.72 30.72 0 0 1-30.69952-29.568L112.64 819.2V204.8a30.72 30.72 0 0 1 30.72-30.72z"
              fill="currentColor"
              p-id="1541"
            />
            <path
              d="M797.48608 244.51584a30.72 30.72 0 0 1 44.3392 42.51136l-0.896 0.93696-307.2 307.2a30.72 30.72 0 0 1-42.50624 0.896l-0.93696-0.896L389.12 494.0032l-224.03584 224.04096a30.72 30.72 0 0 1-42.50624 0.896l-0.93696-0.896a30.72 30.72 0 0 1-0.90112-42.51136l0.90112-0.93696 245.76-245.76a30.72 30.72 0 0 1 42.50624-0.896l0.93696 0.896 101.15584 101.15584 285.48096-285.47584z"
              fill="currentColor"
              p-id="1542"
            />
            <path
              d="M819.20512 235.52a30.72 30.72 0 0 1 30.69952 29.568l0.02048 1.152v153.6a30.72 30.72 0 0 1-61.4144 1.152L788.48 419.84V296.96h-122.88a30.72 30.72 0 0 1-30.6944-29.568L634.88 266.24a30.72 30.72 0 0 1 29.57312-30.69952l1.152-0.02048h153.6z"
              fill="currentColor"
              p-id="1543"
            />
          </svg>
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