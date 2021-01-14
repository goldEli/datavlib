<template>
  <svg class="icon" :style="{...style}">
    <use :href="iconName" />
  </svg>
</template>
<script>
export default {
  name: 'Icon',
  props: {
    name: String,
    style: Object,
  },
  setup(ctx) {
    const iconName = '#' + ctx.name
    return {
      iconName,
    }
  },
}
</script>
<style lang="scss" scoped>
.icon {
  width: 100%;
  height: 100%;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
