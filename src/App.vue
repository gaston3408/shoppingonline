<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'app',
mounted(){
  this.getProducts()
  },
methods:{
  ...mapActions(['getProducts'])
  
}

}
</script>