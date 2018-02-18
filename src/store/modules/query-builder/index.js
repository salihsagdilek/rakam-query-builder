import { state } from './state'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'

export const queryBuilder = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
