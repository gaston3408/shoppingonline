<template>
<div class="container-fluid">
  <Carrousel/>
  <div class="mt-2  p-0">
    <div class="row  justify-content-center">
      <div class="pt-5 col-12">
        <form @submit.prevent="searchingProducts(filter)" class="d-flex justify-content-end container">
          <input
            v-model="filter"
            @keyup="searchingProducts(filter)"
            type="text"
            placeholder="  Buscar..."
            class="text-center  rounded "
          />
          <a class="fas fa-search m-2" />
        </form>
      </div>

      <div
        id="active"
        class="mt-4 p-0 bg-light col-4 m-3 col-sm-5 col-md-5 col-lg-3 rounded text-center"
        v-for="item in productsFiltered"
        :key="item.id"
      >
        <router-link :to="{name:'product',params:{id: item.id }}" >
          <div class=" img-content">
            <img id="image" :src="item.img" :alt="item.name" class="m-0 img-fluid img-card rounded-top">       
          </div>
        </router-link> 
          
            <div class="container mb-3 mt-4">
              <h4 class=" col-12 card-title  h6  text-uppercase text">{{item.name}}</h4>
              <p class="text-center h4 col-12 text">${{item.price}}</p>
            </div>
            </div>
      </div>
    </div>
    <Footer class="mt-5"/>
  </div>
</template>

<script>
import Carrousel from '../components/Carrousel.vue'
import Footer from '../components/Footer.vue'
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: "start",
  components:{
    Carrousel,
    Footer
  },
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
  box-shadow: 2px 2px 5px 5px rgb(188, 190, 188);
}

@media (max-width: 500px) {
  .text {
    font-size: 10px;
  }
}
#footer {
      background-color: rgba(0, 0, 0, 0.795);
      box-shadow: 0px 1px 17px 27px  rgba(0, 0, 0, 0.795)
    }
    .icon:hover {
        color: white
    }
    @media (max-width: 768){
        .title {
            margin-left: 0
        }
    }

</style>
