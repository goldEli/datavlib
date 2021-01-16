<template>
  <div>
    <div class="container">
      <svg width="400" height="400">
        <defs>
          <mask id="test-mask">
            <rect x="5" y="5" width="390" height="390" fill="red" />
            <circle r="50" cx="150" cy="150" />
          </mask>
          <linearGradient id="test-linear-gradient">
            <stop offset="0%" stop-color="red" />
            <stop offset="50%" stop-color="yellow" />
            <stop offset="100%" stop-color="blue" />
          </linearGradient>
        </defs>
        <rect x="5" y="5" width="390" height="390" fill="url(#test-linear-gradient)" />
      </svg>
    </div>
    <div class="container">
      <svg width="400" height="400">
        <circle cx="0" cy="0" r="20" fill="red" stroke="black" stroke-width="1">
          <animate
            attributeName="cx"
            attributeType="XML"
            from="0"
            to="100"
            dur="2s"
            repeatCount="1"
            fill="freeze"
          />
          <animate
            attributeName="cy"
            attributeType="XML"
            from="0"
            to="100"
            dur="2s"
            repeatCount="1"
            fill="freeze"
          />
        </circle>
      </svg>
    </div>
    <div class="container">
      <svg width="400" height="400">
        <rect x="0" y="0" width="100" height="100" fill="red">
          <set attributeName="x" attributeType="XML" to="10" begin="1s" />
          <set attributeName="x" attributeType="XML" to="20" begin="2s" />
          <set attributeName="x" attributeType="XML" to="30" begin="3s" />
          <set attributeName="x" attributeType="XML" to="40" begin="4s" />
          <set attributeName="x" attributeType="XML" to="50" begin="5s" />
        </rect>
      </svg>
    </div>
    <div class="container">
      <div class="container-line">
        <svg class="line" viewBox="0 0 400 400" p-id="5399" width="400" height="400">
          <line x1="0" y1="100" x2="400" y2="100" />
        </svg>
      </div>
    </div>
    <div class="container">
      <svg
        t="1610672826590"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="5399"
        width="200"
        height="200"
      >
        <path
          class="logo"
          d="M311.114667 371.242667L471.146667 169.098667a52.106667 52.106667 0 0 1 81.706666 0l160.032 202.144 153.152-65.632a52.106667 52.106667 0 0 1 71.541334 58.474666l-89.44 430.933334a112.416 112.416 0 0 1-110.08 89.568H285.941333a112.416 112.416 0 0 1-110.08-89.568l-89.429333-430.933334a52.106667 52.106667 0 0 1 71.541333-58.474666l153.152 65.632zM512 220.608L355.648 418.101333a52.106667 52.106667 0 0 1-61.376 15.552l-140.544-60.234666 84.8 408.586666a48.416 48.416 0 0 0 47.402667 38.581334h452.138666a48.416 48.416 0 0 0 47.402667-38.581334l84.8-408.586666-140.544 60.234666a52.106667 52.106667 0 0 1-61.376-15.552L512 220.608z"
          p-id="5400"
        />
      </svg>
    </div>
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
import { onMounted } from 'vue'
export default {
  name: 'SvgAnimation',
  setup() {
    onMounted(() => {
      // const dom = document.getElementsByClassName('logo')[0]
      // console.log(dom.getTotalLength(), 123)
    })
  },
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
.logo {
  fill: none;
  stroke-width: 10;
  stroke: black;
  animation: logo 10s linear 1 forwards;
}
@keyframes logo {
  0% {
    fill: white;
    stroke-dasharray: 3000;
    stroke-dashoffset: 3000;
  }
  50% {
    fill: white;
    stroke-dasharray: 3000;
    stroke-dashoffset: 0;
  }
  75% {
    stroke: white;
    fill: cadetblue;
  }
  100% {
    stroke: white;
    fill: blueviolet;
  }
}
.container-line {
  &:hover .line {
    stroke-dashoffset: 0;
    transition: stroke-dashoffset 2s linear;
  }
}
.line {
  stroke-width: 20;
  stroke: red;
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
}
</style>
