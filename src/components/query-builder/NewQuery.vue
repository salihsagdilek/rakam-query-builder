<template>
  <custom-drop-down trigger="click" @visible-change="resetQueryBuilder" :hide-on-click="false"
                    ref="newQueryComponent"
                    v-if="selectedTables.length">
    <el-button type="primary">add query <i class="el-icon-circle-plus"></i></el-button>
    <el-dropdown-menu slot="dropdown">
      <div class="new-query-content">
        <template v-if="selectedColumn">
          <header class="new-query-header">
            <el-button @click.prevent="resetQueryBuilder" type="primary" icon="el-icon-arrow-left">
              {{selectedColumn.label}}
            </el-button>
          </header>
          <section class="new-query-body">
            <el-row :gutter="20">
              <el-col :span="9">
                <el-select v-model="selectedAction" value-key="id" filterable placeholder="Select action"
                           :popper-append-to-body="false">
                  <el-option
                    v-for="action in filteredActions"
                    :key="action.id"
                    :label="action.label"
                    :value="action">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="15" v-if="selectedAction">
                <component :is="`el-${valueElement.type}`" v-model="value"
                           v-bind="valueElement.options"
                           v-if="valueElement.type"></component>
              </el-col>
            </el-row>
          </section>
          <footer class="new-query-footer">
            <el-button-group>
              <el-button type="primary" @click.prevent="closeNewQueryComponent">Cancel <i class="el-icon-error"></i>
              </el-button>
              <el-button type="danger" v-if="selectedAction" @click.prevent="createQuery">Apply <i
                class="el-icon-success"></i>
              </el-button>
            </el-button-group>
          </footer>
        </template>
        <template v-else>
          <el-select v-model="selectedColumn" value-key="id" filterable placeholder="Select Column"
                     :popper-append-to-body="false">
            <el-option
              v-for="column in filteredColumns"
              :key="column.id"
              :label="column.label"
              :value="column">
            </el-option>
          </el-select>
        </template>
      </div>
    </el-dropdown-menu>
  </custom-drop-down>
</template>

<script>

  import { ValueElementBuilder } from '@/utils/value-element-builder'
  import { QueryBuilder } from '@/utils/query-builder'

  import { mapState, mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'new-query',
    computed: {
      selectedColumn: {
        get () {
          return this.$store.state.queryBuilder.newQueryData.selectedColumn
        },
        set (value) {
          this.$store.commit('queryBuilder/setSelectedColumn', value)
        }
      },
      selectedAction: {
        get () {
          return this.$store.state.queryBuilder.newQueryData.selectedAction
        },
        set (value) {
          this.$store.commit('queryBuilder/setSelectedAction', value)
        }
      },
      value: {
        get () {
          return this.$store.state.queryBuilder.newQueryData.value
        },
        set (value) {
          this.$store.commit('queryBuilder/setSelectedValue', value)
        }
      },
      ...mapState({
        selectedTables: state => state.queryBuilder.selectedTables
      }),
      ...mapGetters({
        filteredColumns: 'queryBuilder/filteredColumns',
        filteredActions: 'queryBuilder/filteredActions'
      }),
      valueElement () {
        let element = new ValueElementBuilder(this.selectedAction.source, this.selectedAction.options)
        return element.get()
      },
    },
    methods: {
      createQuery () {
        let data = {
          column: this.selectedColumn.label
        }
        let source = this.selectedAction.source
        if (source) {
          if (source === 'list') {
            data.target = `'${this.value.join('\',')}'`
          } else {
            data.target = this.value
          }
        }
        let qb = new QueryBuilder(this.selectedAction.value, data)
        this.addQuery({value: qb.get(), concat: 'AND'})
        this.closeNewQueryComponent()
      },
      closeNewQueryComponent () {
        this.$refs.newQueryComponent.visible = false
      },
      ...mapMutations({
        resetQueryBuilder: 'queryBuilder/resetQueryData',
        addQuery: 'queryBuilder/addQuery'
      })
    }
  }
</script>
<style lang="scss" src="./new-query.scss"></style>
