import Vue from 'vue'
import App from './App.vue'
import './assets/fonts/iconfont.css'
import tButton from './components/Button.vue'
import tDialog from './components/Dialog.vue'
import tInput from './components/Input.vue'
import tSwitch from './components/Switch.vue'
import tRadio from './components/Radio.vue'
import tRadioGroup from './components/RadioGroup.vue'
import tCheckbox from './components/Checkbox.vue'
import tCheckboxGroup from './components/CheckboxGroup.vue'
import tForm from './components/Form.vue'
import tFormItem from './components/FormItem.vue'
Vue.component(tButton.name, tButton)
Vue.component(tDialog.name, tDialog)
Vue.component(tInput.name, tInput)
Vue.component(tSwitch.name, tSwitch)
Vue.component(tRadio.name, tRadio)
Vue.component(tRadioGroup.name, tRadioGroup)
Vue.component(tCheckbox.name, tCheckbox)
Vue.component(tCheckboxGroup.name, tCheckboxGroup)
Vue.component(tForm.name, tForm)
Vue.component(tFormItem.name, tFormItem)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
