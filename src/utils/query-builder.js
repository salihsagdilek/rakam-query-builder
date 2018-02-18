const defaultOptions = {
  delimiters: ['[[', ']]']
}

export class QueryBuilder {
  constructor (string, data, options) {
    this.string = string
    this.data = data
    this.options = {...defaultOptions, ...options}
    this.query = null
    this.build()
  }

  escape (string) {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
  }

  build () {
    let str = this.string
    for (let query in this.data) {
      let regexp = new RegExp(`${this.escape(this.options.delimiters[0])}\s?${query}\s?${this.escape(this.options.delimiters[1])}`)
      str = str.replace(regexp, this.data[query])
    }
    this.query = str
  }

  get () {
    return this.query
  }
}
