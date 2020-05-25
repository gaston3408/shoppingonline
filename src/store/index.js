import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../main'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[],
    filter:'',
    product:{},
  },
  mutations: {

    setProducts(state, payload){
      state.products = payload
    },

    setFilter(state,payload){
      state.filter = payload.toLowerCase();
    },

    setProduct(state,payload){
      state.product = payload
      state.filter= ''
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
      },

      searchingProducts({commit},payload){
        commit('setFilter',payload)
      },

      getProduct({commit},id){
        db.collection('products').doc(id).get()
        .then(res=>{
          let product = res.data()
          product.id = res.id
          commit('setProduct',product)
        }).catch(err=>
          console.log(err))
      }
    },
    getters:{
      productsFiltered(state){
        let productsFilter = state.products.filter(item=> item.name.toLowerCase().indexOf(state.filter) >= 0 )
        return productsFilter
      }
    }
})
