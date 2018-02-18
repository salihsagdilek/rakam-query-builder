import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { queryBuilder } from '@/store/modules/query-builder'

export default new Vuex.Store({
  state: {},
  modules: {
    queryBuilder
  }
})
