import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../main'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[]
  },
  mutations: {
    setProducts(state, payload){
      state.products = payload
    }
  },
  actions: {
    getProducts({commit}){
      let products = []
      try{
        db.collection('products').get()
        .then(res => {
          res.forEach(item =>{
            let product= item.data()
            product.id = item.id
            products.push( product )
            commit('setProducts',products)
          })
          
        })
      } catch ( error ) { console.log(error) }
      
        
      }
    },
  modules: {
  }
})
