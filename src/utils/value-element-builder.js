const elementMapper = new Map()
elementMapper.set('string', 'input')
elementMapper.set('list', 'select')

export class ValueElementBuilder {
  constructor (source, options) {
    this.options = options
    this.element = {
      type: elementMapper.get(source),
      options: {}
    }
    this.createOptions()
  }

  createOptions () {
    if (this.element.type === 'select') {
      this.element.options = {
        multiple: true,
        filterable: true,
        allowCreate: true,
        popperAppendToBody: false,
        defaultFirstOption: true,
        popperClass: 'hide'
      }
    }
  }

  get () {
    return this.element
  }
}
