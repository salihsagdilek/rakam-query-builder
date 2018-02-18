export const actions = {
  async get ({commit}) {
    try {
      let response = await fetch('/static/dummy/sql-data.json')
      commit('setData', await response.json())
    } catch (err) {
      console.log(err)
    }
  }
}
