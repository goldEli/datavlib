import Icon from './components/Icon'
import Test from './components/Test'
import SvgAnimation from "./components/SvgAnimation";
import DvLoading from "./components/DvLoading";
import DvFlyBox from "./components/DvFlyBox";
import DvContainer from "./components/DvContainer"
import './iconfont'

export default function (Vue) {
  Vue.use(Test)
  Vue.use(Icon)
  Vue.use(SvgAnimation)
  Vue.use(DvLoading)
  Vue.use(DvFlyBox)
  Vue.use(DvContainer)
}
