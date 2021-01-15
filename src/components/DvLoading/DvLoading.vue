<template>
  <div class="dv-loading">
    <svg width="200" height="200" viewBox="0 0 50 50">
      <circle
        cx="25"
        cy="25"
        r="22"
        fill="none"
        stroke-width="3"
        stroke="#3bebcb"
        stroke-dasharray="34"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 25 25;360 25 25"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          values="#3bebcb;#02bcfe;#3bebcb"
          dur="4s"
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
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          values="#02bcfe;#3bebcb;#02bcfe"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </div>
</template>
<script>
export default {
  name: 'DvLoading',
}
</script>
<style lang="scss" scoped>
</style>