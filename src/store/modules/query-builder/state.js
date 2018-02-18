export const defaultQueryData = {
  selectedColumn: null,
  selectedAction: null,
  value: null
}

export const state = {
  data: {
    tables: [],
    columns: [],
    actions: [],
  },
  selectedTables: [],
  newQueryData: {...defaultQueryData},
  queries: [{
    value: '"account_id"=\'dsadasd\'',
    concat: null,
  }],
}
