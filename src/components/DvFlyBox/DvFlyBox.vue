<template>
  <div class="dv-fly-box" :ref="refName">
    <svg :width="width" :height="height">
      <defs>
        <path :id="flyBoxPath" :d="path" fill="none" />
        <radialGradient :id="radialGradient" cx="50%" cy="50%" fx="100%" fy="50%" r="50%">
          <stop offset="0%" stop-color="#fff" stop-opacity="1" />
          <stop offset="100%" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <mask :id="flyBoxMask">
          <circle x="0" y="0" :r="starLength" :fill="`url(#${radialGradient})`">
            <animateMotion :dur="`${dur}s`" :path="path" rotate="auto" repeatCount="indefinite" />
          </circle>
        </mask>
      </defs>
      <use :href="`#${flyBoxPath}`" stroke-width="1" :stroke="lineColor" />
      <use :mask="`url(#${flyBoxMask})`" :href="`#${flyBoxPath}`" stroke-width="3" :stroke="starColor" />
    </svg>
    <div class="dv-fly-box-content">
      <slot />
    </div>
  </div>
</template>
<script>
import { ref, onMounted, getCurrentInstance, computed } from 'vue'
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
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
    const flyBoxPath = uuidv4()
    const radialGradient = uuidv4()
    const flyBoxMask = uuidv4()
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
      flyBoxPath,
      flyBoxMask,
      radialGradient,
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