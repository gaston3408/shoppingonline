<template>
  <div class="container-fluid mt-5  ">
    <div class="row  justify-content-center">
      <div class="pt-5 col-12">
        <form @submit.prevent="searchingProducts(filter)" class="d-flex justify-content-end container">
          <input
            v-model="filter"
            @keyup="searchingProducts(filter)"
            type="text"
            placeholder="  Buscar..."
            class="text-center  rounded-pill "
          />
          <a class="fas fa-search m-2" />
        </form>
      </div>

      <div
        id="active"
        class="mt-4 bg-light col-10 m-3 col-sm-5 col-md-5 col-lg-3 rounded text-center"
        v-for="item in productsFiltered"
        :key="item.id"
      >
        <router-link :to="{name:'product',params:{id: item.id }}" >
          <div class="card-body container-fluid ">
            <img id="image" :src="item.img" :alt="item.name" class="img-fluid img-card">       
          </div>
        </router-link> 
          
            <div class="container">
              <h4 class=" col-12 card-title  h6  text-uppercase">{{item.name}}</h4>
              <p class="text-center h4 col-12">${{item.price}}</p>
            </div>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: "start",
  data() {
    return {
      filter: ""
    };
  },
  mounted() {
    //this.getProducts();
    this.scroll()
    
  },
  methods: {
    ...mapActions(["getProducts", "searchingProducts",'getProduct']),

    scroll(){
      window.scrollTo(10000,0)
    }
  },
  computed: {
    ...mapState(["products","user"]),
    ...mapGetters(["productsFiltered"])
  }
};
</script>

<style>
#active:hover {
  box-shadow: 2px 2px 2px 2px rgb(127, 182, 135);
}
</style>
