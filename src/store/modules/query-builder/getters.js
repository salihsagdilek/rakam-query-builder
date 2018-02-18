export const getters = {
  tables: state => state.data.tables,

  filteredColumns: state => {
    let selectedTableIds = state.selectedTables.map(t => t.id)
    return state.data.columns.filter((column) => selectedTableIds.every(id => column.available_tables.includes(id)))
  },
  filteredActions: state => {
    if (state.newQueryData.selectedColumn) {
      let selectedColumnId = state.newQueryData.selectedColumn.id
      return state.data.actions.filter((action) => action.available_columns.includes(selectedColumnId))
    }
  }
}
