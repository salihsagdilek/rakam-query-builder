import { defaultQueryData } from './state'

export const mutations = {
  setData (state, payload) {
    state.data = payload
  },
  setSelectedTables (state, payload) {
    state.selectedTables = payload
  },
  setSelectedColumn (state, payload) {
    state.newQueryData.selectedColumn = payload
  },
  setSelectedAction (state, payload) {
    state.newQueryData.selectedAction = payload
  },
  setSelectedValue (state, payload) {
    state.newQueryData.value = payload
  },
  addQuery (state, payload) {
    state.queries.push(payload)
  },
  removeQuery (state, payload) {
    state.queries.splice(state.queries.indexOf(payload), 1)
  },
  updateQuery (state, payload) {
    state.queries[state.queries.indexOf(payload.oldValue)] = payload.newValue
  },
  resetQueryData (state) {
    state.newQueryData = {...defaultQueryData}
  }
}
