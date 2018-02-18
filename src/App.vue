<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'App',
    created () {
      this.getQueryData()
    },
    methods: {
      ...mapActions({
        getQueryData: 'queryBuilder/get'
      })
    }
  }
</script>

<style src="element-ui/lib/theme-chalk/index.css"></style>
