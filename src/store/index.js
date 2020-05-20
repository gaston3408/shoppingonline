import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../main'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[]
  },
  mutations: {
  },
  actions: {
    getProducts({commit}){
      try{
        db.collection('products').get()
        .then(res => {
          res.forEach(item =>{
            console.log(item.data())
          })
          
        })

      }catch(error){
        console.log(error)
      }
        
      }
    },
  modules: {
  }
})
