<template>
  <div>
    <div class="container">
      <svg width="500" height="200" viewBox="0 0 500 200">
        <rect
          x="0"
          y="0"
          width="100"
          height="50"
          fill="red"
          transform="translate(10, 0) rotate(30) skewX(30)"
        />
      </svg>
    </div>
    <div class="container">
      <svg width="440" height="440" viewBox="0 0 440 440">
        <circle cx="220" cy="220" r="180" stroke-width="20" stroke="#d1d3d7" fill="transparent" />
        <circle
          class="circle"
          cx="220"
          cy="220"
          r="180"
          stroke-width="20"
          stroke="#00a5e0"
          fill="transparent"
          transform="matrix(0,-1,1,0,0,440)"
        />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SvgAnimation',
}
</script>
<style lang="scss" scoped>
.container {
  svg {
    border: 1px solid grey;
  }
}
.circle {
  animation: circle 5s linear infinite;
}
@keyframes circle {
  from {
    stroke-dasharray: 0 1131;
  }
  to {
    stroke-dasharray: 1131 0;
  }
}
</style>
