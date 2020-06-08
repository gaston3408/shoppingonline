import Vue from 'vue'
import Vuex from 'vuex'
import {db , firebase} from '../main'
import router from '../router'




Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    user:{},

    cart:[],

    error:null,

    products:[],
    filter:'',
    product:{},
  },
  mutations: {

    setCart(state, payload){
      state.cart = payload
    },

    setError(state,payload){
      state.error = payload
    },

    setUser(state,payload){
      state.user = payload
      state.error = null
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

    //Products...

    getProducts({commit}){
      let products = []
      try{
        db.collection('products').get()
        .then(res => {
          res.forEach(item =>{
            let product= item.data()
            product.id = item.id
            product.added = false
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
      //iniciando carrito de compras
      addCart({commit},productId){
        if(!this.state.user){
          router.push({name: 'entry'})
        }else{
        db.collection('carts').add({idUser: this.state.user.uid ,idProduct:productId })
        .then(()=> this.dispatch('cartProducts'))
        }

      },

      async cartProducts({commit},state){
        let cart = []
        
        const res = await db.collection('carts').where('idUser','==',this.state.user.uid).get()
        
        let getCart = res.forEach(item => {
            let product = item.data()
            this.state.products.forEach(item2 =>{
            if (product.idProduct == item2.id){
              item2.added=true
              cart.push( item2 )
            }
          })
        })
        commit('setCart', cart)
  
      },

      async deleteProductCart({commit},productId){
        
        try{
          const res = await db.collection('carts').get()
          let response = res.forEach(item => {
            let product= item.data()
            product.id = item.id
            if(product.idProduct == productId){
              db.collection('carts').doc(product.id).delete()   
            }
          })
        }catch(error){
          console.log(error)
        }


        },
      

      
      //User...

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
        commit('setCart', null )
        router.push("/")
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
