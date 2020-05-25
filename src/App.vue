<template>
  <div id="app">
    <Nav class="shadow-sm fixed-top"/>
      <router-view class="pt-5"/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import {mapActions} from 'vuex'
export default {
  name: 'app',
  components:{
    Nav
  },
mounted(){
  this.getProducts()
  },
methods:{
  ...mapActions(['getProducts'])
  
}

}
</script>