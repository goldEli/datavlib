<template>
  <div class="dv-fly-box" :ref="refName">
    <svg :width="width" :height="height">
      <defs>
        <path id="fly-box-path" :d="path" fill="none" />
        <radialGradient id="radial-gradient" cx="50%" cy="50%" fx="100%" fy="50%" r="50%">
          <stop offset="0%" stop-color="#fff" stop-opacity="1" />
          <stop offset="100%" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <mask id="fly-box-mask">
          <circle x="0" y="0" :r="starLength" fill="url(#radial-gradient)">
            <animateMotion :dur="`${dur}s`" :path="path" rotate="auto" repeatCount="indefinite" />
          </circle>
        </mask>
      </defs>
      <use href="#fly-box-path" stroke-width="1" :stroke="lineColor" />
      <use mask="url(#fly-box-mask)" href="#fly-box-path" stroke-width="3" :stroke="starColor" />
    </svg>
    <div class="dv-fly-box-content">
      <slot />
    </div>
  </div>
</template>
<script>
import { ref, onMounted, getCurrentInstance, computed } from 'vue'
export default {
  name: 'DvFlyBox',
  props: {
    lineColor: {
      type: String,
      default: '#235fa7',
    },
    starColor: {
      type: String,
      default: '#4fd2dd',
    },
    starLength: {
      type: [Number, String],
      default: '50',
    },
    dur: {
      type: [Number, String],
      default: 1,
    },
  },
  setup(ctx) {
    const width = ref(0)
    const height = ref(0)
    const refName = 'dvFlyBox'
    const path = computed(
      () =>
        `M5 5 L${width.value - 5} 5 L${width.value - 5} ${
          height.value - 5
        } L5 ${height.value - 5} Z`
    )
    onMounted(() => {
      const instance = getCurrentInstance()
      const dom = instance.refs[refName]
      width.value = dom.clientWidth
      height.value = dom.clientHeight
    })
    return {
      width,
      height,
      refName,
      path,
    }
  },
}
</script>
<style lang="scss" scoped>
.dv-fly-box {
  position: relative;
  width: 100%;
  height: 100%;
  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .dv-fly-box-content {
    width: 100%;
    height: 100%;
    padding: 5px;
    box-sizing: border-box;
  }
}
</style>