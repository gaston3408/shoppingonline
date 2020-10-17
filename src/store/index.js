import Vue from 'vue'
import Vuex from 'vuex'
import {db , firebase} from '../main'
import router from '../router'




Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    user:{},

    cart:[],
    
    totalCart: 0,

    added: false,

    error:null,

    products:[],
    filter:'',
    product:{},
  },
  mutations: {

    setCart(state, payload){
      state.cart = payload
    },

    setTotalCart(state , payload){
      state.totalCart = payload
    },

    setAdded(state, payload){
      state.added = payload
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
            products.push( product )
            commit('setProducts',products)
          })
          
        })
        
      } catch ( error ) { console.log(error) }  
      },

      searchingProducts({commit},payload){
        commit('setFilter', payload)
      },

      getProduct({commit},id){
        this.dispatch('addedOrRemoved', id)

        db.collection('products').doc(id).get()
        .then(res=>{
          let product = res.data()
          product.id = res.id
          commit('setProduct',product)
          
        }).catch(err=>
          console.log(err))
      },
      //iniciando carrito de compras
      addCart({commit},product){
        let cart = this.state.cart
        console.log(cart)
        if(!this.state.user){
          router.push({name: 'login'})
        }else{
        db.collection('carts').add({idUser: this.state.user.uid ,idProduct:product.id }),
          cart.push(product)
          commit('setCart',cart)
          this.dispatch('addedOrRemoved',product.id)
          this.dispatch('getSubtotal')
      }

      },
      addedOrRemoved({commit},id){
        let added = false
        this.state.cart.forEach(element => {
          if(element.id == id){
            added = true
          }
        });
        commit('setAdded', added)
      },

      async cartProducts({commit},state){
        let cart = []
        
        const res = await db.collection('carts').where('idUser','==',this.state.user.uid).get()
        
        let getCart = res.forEach(item => {
            let product = item.data()
            this.state.products.forEach(item2 =>{
            if (product.idProduct == item2.id){
              cart.push( item2 )
            }
          })
        })
        commit('setCart', cart)
        this.dispatch('getSubtotal')
      },

      //subtotal Cart
      getSubtotal({commit},state){
        let subtotal = 0
        this.state.cart.forEach(element => {
          subtotal += element.price 
        })
        commit('setTotalCart', subtotal)
      },
      
      //eliminar de base de datos
      async deleteProductCart({commit},element){
        //let cart=[]
        let productUser = await db.collection('carts').where('idUser','==',this.state.user.uid).get()
            let res = productUser.forEach(item=>{
              let product = item.data()
                product.id = item.id
              if(element.id == product.idProduct){
                console.log('ok')
                db.collection('carts').doc(product.id).delete()
              }
            })
        },
      //eliminar de carrito
      deleteOfCart({commit},element){
        let cart = []
        this.state.cart.forEach(item=>{
          if(item.id == element.id){
            this.dispatch('deleteProductCart',element)
          }else{
            cart.push(item)
          }
        })
        commit('setCart',cart)
        this.dispatch('addedOrRemoved', element.id)
        this.dispatch('getSubtotal')
        
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
        let productsFilter = state.products.filter(item=> item.name.toLowerCase().indexOf(state.filter) >= 0 || item.category.toLowerCase().indexOf(state.filter) >= 0 )
        return productsFilter
      },

      authUser(state){
        if(state.user === '' || state.user === null || state.user === 'undefined'){
          return false
        }else{ return true}
      }
    }
})
