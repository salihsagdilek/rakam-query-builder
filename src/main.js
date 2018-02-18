import 'babel-polyfill'

import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false

import { Button, ButtonGroup, Select, Option, DropdownMenu, Tag, Input, Row, Col } from 'element-ui'
import en from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
locale.use(en)

Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Select)
Vue.use(Option)
Vue.use(DropdownMenu)
Vue.use(Tag)
Vue.use(Input)
Vue.use(Row)
Vue.use(Col)

import customDropDown from '@/components/DropDownClone'
Vue.component(customDropDown.name, customDropDown)

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
