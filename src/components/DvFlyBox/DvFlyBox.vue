<template>
  <div class="dv-fly-box">
    <svg width="400" height="400">
      <defs>
        <path id="fly-box-path" d="M5 5 L395 5 L395 395 L5 395 Z" fill="none" />
        <mask id="fly-box-mask">
          <circle x="0" y="0" r="100" fill="white">
            <animateMotion
              dur="3s"
              path="M5 5 L395 5 L395 395 L5 395 Z"
              rotate="auto"
              repeatCount="indefinite"
            />
          </circle>
        </mask>
      </defs>
      <use href="#fly-box-path" stroke-width="1" stroke="#235fa7" />
      <use mask="url(#fly-box-mask)" href="#fly-box-path" stroke-width="3" stroke="#4fd2dd" />
    </svg>
  </div>
</template>
<script>
export default {
  name: 'DvFlyBox',
  setup(ctx) {},
}
</script>
<style lang="scss" scoped>
</style>