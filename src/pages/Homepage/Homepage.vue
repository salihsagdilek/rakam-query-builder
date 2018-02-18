<template>
  <div>
    <query-tables/>
    <query-tag :query="query" :concatBtn="!!index" v-for="(query, index) in queries" :key="query.value"/>
    <new-query/>
  </div>
</template>

<script>
  import QueryTables from '@/components/query-builder/QueryTables'
  import QueryTag from '@/components/query-builder/QueryTag'
  import NewQuery from '@/components/query-builder/NewQuery'

  import { mapState } from 'vuex'

  export default {
    name: 'homepage',
    computed: {
      ...mapState({
        queries: state => state.queryBuilder.queries
      })
    },
    components: {
      QueryTables,
      QueryTag,
      NewQuery
    }
  }
</script>
<style lang="scss" src="./homepage.scss"></style>
