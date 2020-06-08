<template>
  <div id="app">
    <Nav class="shadow-sm fixed-top"/>
      <router-view class="pt-5"/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import {mapActions ,mapState} from 'vuex'

export default {
  name: 'app',
  components:{
    Nav
  },
mounted(){
  this.getProducts();
  this.getCart();
  },
methods:{
  ...mapActions(['getProducts','cartProducts']),

  getCart(){
    if(this.user){
      this.cartProducts()
    }
  }
  
},
computed:{
  ...mapState(['user'])
}

}
</script>