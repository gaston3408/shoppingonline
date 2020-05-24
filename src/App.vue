<template>
  <div id="app">
    <Nav/>
    <router-view/>
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