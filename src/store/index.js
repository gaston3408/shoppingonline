import Vue from 'vue'
import Vuex from 'vuex'
import {db , firebase} from '../main'
import router from '../router'




Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    user:{},

    products:[],
    filter:'',
    product:{},
  },
  mutations: {

    setUser(state,payload){
      state.user = payload
    },

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
      },

      loginUser({commit},user){
        if(user){
          const dataUser = {
            name: user.displayName,
            email: user.email,
            uid: user.uid,
            picture: user.photoURL
          }
          commit('setUser',dataUser)
          //el parametro user viene del main
        }else{
          commit('setUser', null)
        }

      },

      signOut({commit}){
        firebase.auth().signOut()
        commit('setUser', null )
        router.push({name: 'start'})
      },
    },
    getters:{
      productsFiltered(state){
        let productsFilter = state.products.filter(item=> item.name.toLowerCase().indexOf(state.filter) >= 0 )
        return productsFilter
      },

      authUser(state){
        if(state.user === '' || state.user === null || state.user === 'undefined'){
          return false
        }else{ return true}
      }
    }
})
