import Vue from 'vue'
import Notice from '@/components/Notice'
import Modal from '@/components/Modal'

const notices = []
function createNotice(Component, props) {
  const Ctor = Vue.extend(Component)
  const comp = new Ctor({ propsData: props })
  comp.$mount()
  notices.push(comp.$el)
  let bottom = 5
  notices.forEach(item => (bottom += item.offsetHeight + 5))
  comp.$el.style.bottom = bottom + 'px'
  document.body.appendChild(comp.$el)
  comp.posRemove = () => {
    notices.splice(notices.indexOf(comp.$el), 1)
    const removeHeight = comp.$el.offsetHeight + 5
    notices.forEach(item => {
      item.style.bottom = parseInt(item.style.bottom) - removeHeight + 'px'
    })
    document.body.removeChild(comp.$el)
    comp.$destroy()
  }
  return comp
}

function createConfirm(Component, props) {
  const Ctor = Vue.extend(Component)
  const comp = new Ctor({ propsData: props })
  comp.$mount()
  document.body.appendChild(comp.$el)
  return comp
}

export default function install(Vue) {
  Vue.prototype.$notice = function(options) {
    return createNotice(Notice, options)
  }
  Vue.prototype.$confirm = function(options) {
    return createConfirm(Modal, options)
  }
}
