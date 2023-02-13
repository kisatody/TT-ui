// 整个包的入口
// 统一导出
import Button from '../components/Button.vue'
import Dialog from '../components/Dialog.vue'
import Input from '../components/Input.vue'
import Checkbox from '../components/Checkbox.vue'
import Radio from '../components/Radio.vue'
import RadioGroup from '../components/RadioGroup.vue'
import Switch from '../components/Switch.vue'
import CheckboxGroup from '../components/CheckboxGroup.vue'
import Form from '../components/Form.vue'
import FormItem from '../components/FormItem.vue'

const components = {
  Button,
  Dialog,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  CheckboxGroup,
  Form,
  FormItem
}
// 定义install方法
const install = (Vue, opts = {}) => {
  Object.keys(components).forEach(component => {
    Vue.component(components[component].name, components[component])
  })
}

// auto install
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue) // 通过use方式全部引入
// }
export default {
  install,
  ...components
}
