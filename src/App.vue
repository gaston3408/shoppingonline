<template>
  <div id="app">
    <Nav class="shadow-sm fixed-top"/>
      <router-view class="pt-5"/>
      <div>
        <a href="https://api.whatsapp.com/send?phone=542235763408">
          <img    
              src=".\images\whatsapp (2).png"
              class="rounded-circle m-3 fixed-bottom "
              width="60"
              height="60"
            />
          </a>
      </div>
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