import Vue from 'vue'
import Button from './button.vue'
import ButtonGroup from './button-group.vue'
Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup )
new Vue({
    el: '#app'
});
// import Chai from 'chai'
// import Spies from 'chai-spies'
// Chai.use(Spies)
// const expect = Chai.expect
// {
//     const Constructor = Vue.extend(Button);
//     const button = new Constructor({
//         propsData: {
//             icon: 'setting'
//         }
//     })
//     button.$mount()
//     let useElement = button.$el.querySelector('use')
//     const href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#i-setting')
//     button.$el.remove();
//     button.$destroy();
// }
//
// {
//     const Constructor = Vue.extend(Button);
//     const button = new Constructor({
//         propsData: {
//             icon: 'setting',
//             loading: true
//         }
//     })
//     button.$mount()
//     let useElement = button.$el.querySelector('use')
//     const href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#i-loading')
//     button.$el.remove();
//     button.$destroy();
// }
//
// {
//     let div = document.createElement("div")
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button);
//     const button = new Constructor({
//         propsData: {
//             icon: 'setting'
//         }
//     })
//     button.$mount(div)
//     let svg = button.$el.querySelector('svg')
//     let { order } = window.getComputedStyle(svg)
//     expect(order).to.eq('1')
//     button.$el.remove();
//     button.$destroy();
// }
//
// {
//     const Constructor = Vue.extend(Button);
//     const vm = new Constructor({
//         propsData: {
//             icon: 'setting'
//         }
//     })
//     vm.$mount()
//     let spy = Chai.spy(() => {})
//     vm.$on('click', spy)
//     let button = vm.$el
//     button.click()
//     expect(spy).to.have.been.called()
//     vm.$destroy()
// }
