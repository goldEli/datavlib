<template>
  <div class="dv-container" :ref="refName">
    <template v-if="ready">
      <slot />
    </template>
  </div>
</template>
<script>
import { ref, getCurrentInstance, onMounted, onUnmounted, nextTick } from 'vue'
import { debounce } from '../../utils'
export default {
  name: 'DvContainer',
  props: {
    options: Object,
  },
  setup() {
    const refName = 'dv-container'
    const width = ref(0)
    const height = ref(0)
    const originWidth = ref(0)
    const originHeight = ref(0)
    const ready = ref(false)
    let context, dom, observer

    const initSize = () => {
      return new Promise((resolve) => {
        nextTick(() => {
          // 大屏真实尺寸
          dom = context.$refs[refName]
          if (
            context.options &&
            context.options.width &&
            context.options.height
          ) {
            width.value = context.options.width
            height.value = context.options.height
          } else {
            width.value = dom.clientWidth
            height.value = dom.clientHeight
          }
          // 获取画布尺寸
          originWidth.value = window.screen.width
          originHeight.value = window.screen.height
          resolve()
        })
      })
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
    const onResize = async () => {
      await initSize()
      updateScale()
    }

    const initMutaionObserver = () => {
      observer = new MutationObserver(onResize)
      observer.observe(dom, {
        attributes: true,
        attributeFilter: ['style'],
        attributeOldValue: true,
      })
    }
    const removeMutaionObserver = () => {
      if (observer) {
        observer.disconnect()
        observer.takeRecords()
        observer = null
      }
    }

    onMounted(async () => {
      ready.value = false
      context = getCurrentInstance().ctx
      await initSize()
      updateSize()
      updateScale()
      window.addEventListener('resize', debounce(onResize, 1000))
      initMutaionObserver()
      ready.value = true
    })
    onUnmounted(() => {
      window.removeEventListener('resize', onResize)
      removeMutaionObserver()
    })
    return {
      refName,
      ready,
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
