<template>
  <div class="dv-container" :ref="refName">
    <slot />
  </div>
</template>
<script>
import { ref, getCurrentInstance, onMounted } from 'vue'
export default {
  name: 'DvContainer',
  props: {
    options: Object,
  },
  setup(ctx) {
    const refName = 'dv-container'
    const width = ref(0)
    const height = ref(0)
    const originWidth = ref(0)
    const originHeight = ref(0)
    let context, dom

    const initSize = () => {
      // 大屏真实尺寸
      if (context.options && context.options.width && context.options.height) {
        width.value = context.options.width
        height.value = context.options.height
      } else {
        width.value = dom.clientWidth
        height.value = dom.clientHeight
      }
      // 获取画布尺寸
      originWidth.value = window.screen.width
      originHeight.value = window.screen.height
    }

    const updateSize = () => {
      if (width.value && height.value) {
        dom.style.width = width.value + 'px'
        dom.style.height = height.value + 'px'
      } else {
        dom.style.width = originWidth.value + 'px'
        dom.style.height = originHeight.value + 'px'
      }
    }

    const updateScale = () => {
      // 视口宽高
      const currentWidth = document.body.clientWidth
      const currentHeight = document.body.clientHeight
      // 真实宽高
      const realWidth = width.value || originWidth.value
      const realHeight = width.height || originHeight.value
      const scaleX = currentWidth / realWidth
      const scaleY = currentHeight / realHeight
      dom.style.transform = `scale(${scaleX}, ${scaleY})`
    }
    const onResize = () => {
      updateSize()
      updateScale()
    }

    onMounted(() => {
      context = getCurrentInstance().ctx
      dom = context.$refs[refName]
      initSize()
      updateSize()
      updateScale()
      window.addEventListener('resize', onResize)
    })
    onUnmounted(() => {
      window.removeEventListener('resize', onResize)
    })
    console.log(ctx.options)
    return {
      refName,
    }
  },
}
</script>
<style lang="scss" scoped>
.dv-container {
  font-size: 34px;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  transform-origin: left top;
  z-index: 999;
}
</style>
