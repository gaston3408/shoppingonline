<template>
  <div id="product" class="container-fluid mt-5">
    <div class="mt-5 mb-5 row justify-content-center">
      <div class="col-lg-10 col-sm-10 col-md-10 ">
        <div class="row bg-light">
          <div class="col-lg-7 col-sm-12 col-md-12 p-0">
            <img id="img" :src="product.img" class="d-block img-fluid" :alt="product.name"/>
          </div>

          <div class="col-lg-5 col-sm-12 col-md-12 ">
            <div class="row">
              <div class="col-lg-5 col-sm-5 m-3">
                <strong class="h4 ">EN STOCK</strong>
              </div>
            </div>
            <div class="card-body text-center m-5">
              <h5 class="card-title font-weight-bold text-uppercase h2">{{product.name}}</h5>
              <p class="card-text py-4 h3">{{product.description}}</p>
              <p class="card-text h1">${{product.price}}</p>
            </div>
            <div class=" row justify-content-center">
              <button class="btn btn-secondary pl-5 pr-5 pt-2 pb-2 col-9 rounded-pill" @click="addCart(product)" v-if="!added">AGREGAR A CARRITO</button>
              <button class="btn btn-secondary pl-5 pr-5 pt-2 pb-2 col-9 rounded-pill" @click="deleteOfCart(product)" v-if="added" >QUITAR DE CARRITO</button>
              <button class="btn btn-info pl-5 pr-5 pt-2 pb-2 mt-3 col-9 rounded-pill mb-3">COMPRAR</button>
          
            </div>
          </div>
          <div class="container-fluid">
          <div class=" row py-5 bg-primary">
              <div class="col-12">
                <p class="text-white font-weight-bold text-center h3">Todos los medios de pago</p>
              </div>
              <div class="col-12 text-center">
              <i class="fab fa-cc-paypal fa-3x text-white m-2"></i>
              <i class="fab fa-cc-mastercard fa-3x text-white m-2"></i>
              <i class="fab fa-cc-amex fa-3x text-white m-2"></i>
              <i class="fab fa-cc-visa fa-3x text-white m-2"></i>

              </div>
          </div>

          </div>
          <div class="container p-3">
            <div class="row m-4 ">
              <div class="col-12">
                <h3 class="card-title mb-4 h2">Descripcion</h3>
                <div class="">
                  <p class="h5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste placeat suscipit quis ratione repellat architecto modi delectus aperiam voluptas
                    neque perspiciatis, ad provident quibusdam enim dicta nam praesentium, consequuntur eius. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur repellendus hic quibusdam consectetur officia 
                    sit, modi beatae libero accusamus odio quod harum nobis tempore fuga! Illo dolor totam voluptate inventore.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "product",
  data() {
    return {
      id: this.$route.params.id,
      
    };
  },
  mounted() {
    this.getProduct(this.id);
    this.scroll()
  },
  methods: {
    ...mapActions(["getProduct",,"addCart","deleteOfCart"]),

    scroll(){
      window.scrollTo(100000,0)
      
    },
  },

  computed: {
    ...mapState(["product","cart",'added']),

  
  }
};
</script>

<style>

</style>