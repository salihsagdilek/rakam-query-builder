<template>
  <el-select v-model="selectedTables" value-key="id" multiple placeholder="Select tables">
    <el-option
      v-for="table in tables"
      :key="table.id"
      :label="table.label"
      :value="table">
    </el-option>
  </el-select>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'query-tables',
    computed: {
      selectedTables: {
        get () {
          return this.$store.state.queryBuilder.selectedTables
        },
        set (value) {
          this.$store.commit('queryBuilder/setSelectedTables', value)
        }
      },
      ...mapGetters({
        tables: 'queryBuilder/tables'
      })
    }
  }
</script>

<style scoped>

</style>
