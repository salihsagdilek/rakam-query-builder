<template>
  <span>
    <el-select placeholder="" class="query-concat" v-model="immutableQuery.concat" v-if="concatBtn">
      <el-option label="AND" value="AND"/>
      <el-option label="OR" value="OR"/>
    </el-select>
    <el-tag
      :key="query.value"
      closable
      @close="removeQuery(query)">
      {{query.value}}
    </el-tag>
  </span>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'query-tag',
    props: {
      query: {reqired: true},
      concatBtn: {}
    },
    data () {
      return {
        immutableQuery: {...this.query}
      }
    },
    methods: {
      ...mapMutations({
        removeQuery: 'queryBuilder/removeQuery',
        updateQuery: 'queryBuilder/updateQuery'
      })
    },
    watch: {
      immutableQuery: {
        deep: true,
        handler: function (newValue) {
          this.updateQuery({newValue, oldValue: this.query})
        }
      }
    }
  }
</script>

<style lang="scss" src="./query-tag.scss">

</style>
