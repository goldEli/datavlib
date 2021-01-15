<template>
  <div class="dv-loading">
    <svg :width="width" :height="height" viewBox="0 0 50 50" preserveAspectRatio="xMidYMid meet">
      <circle
        cx="25"
        cy="25"
        r="22"
        fill="none"
        stroke-width="3"
        :stroke="insideColor"
        stroke-dasharray="34"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 25 25;360 25 25"
          :dur="`${dur}s`"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          :values="outsideColorAnimate"
          :dur="`${+dur*2}s`"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx="25"
        cy="25"
        r="12"
        fill="none"
        stroke-width="3"
        stroke="#02bcfe"
        stroke-dasharray="19"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="360 25 25;0 25 25"
          :dur="`${dur}s`"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          :values="insideColorAnimate"
          :dur="`${+dur*2}s`"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
    <div class="dv-loading-content">
      <slot />
    </div>
  </div>
</template>
<script>
import { computed } from 'vue'
export default {
  name: 'DvLoading',
  props: {
    width: {
      type: Number,
      default: 50,
    },
    height: {
      type: Number,
      default: 50,
    },
    outsideColor: {
      type: String,
      default: '#3be6cb',
    },
    insideColor: {
      type: String,
      default: '#02bcfe',
    },
    dur: {
      type: String,
      default: '2',
    },
  },
  setup(ctx) {
    const { outsideColor, insideColor } = ctx
    const outsideColorAnimate = computed(
      () => `${outsideColor};${insideColor};${outsideColor}`
    )
    const insideColorAnimate = computed(
      () => `${insideColor};${outsideColor};${insideColor}`
    )
    return {
      outsideColorAnimate,
      insideColorAnimate,
    }
  },
}
</script>
<style lang="scss" scoped>
</style>