const context = require.context('./', true, /\.vue$/)

export default Vue => {
  context.keys().forEach(key => {
    const component = context(key).default
    Vue.component(component.name, component)
  })
}
