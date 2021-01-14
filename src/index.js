import Icon from './components/Icon'
import Test from './components/Test'
import SvgAnimation from "./components/SvgAnimation";
import './iconfont'

export default function (Vue) {
  Vue.use(Test)
  Vue.use(Icon)
  Vue.use(SvgAnimation)
}
