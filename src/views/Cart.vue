<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div v-if="cart == ''"  class="text-center col-10 col-sm-10 col-lg-5 bg-light m-2 rounded shadow-sm">
        <p class=" h2 p-4">Su carrito esta vacio</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div
        v-for="item in cart"
        :key="item.id"
        class="col-10 col-sm-10 col-lg-5 bg-light m-2 rounded row shadow-sm justify-content-between"
      >
        <div class="col-12 col-sm-5 col-md-3 col-lg-4 p-3">
          <img :src="item.img" alt="producto" class="img-thumbnail " />
        </div>
        <div class="col-12 col-sm-7 col-md-9 col-lg-8 ">
          <div class="row">
            <h5 class="pt-3 col-10" style="height: 50px">{{item.name}}</h5>
            <button type="button" class="close col-1" aria-label="Close"  @click="deleteOfCart(item)"  >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <p class="pt-2" style="height: 60px">{{item.description}}</p>
          <div class=" justify-content-center  card-footer d-flex bg-light">
            <p class=" mt-2 h4">${{item.price}}</p>            
          </div>
          </div>
      </div  >
      <div v-if="totalCart !== 0 " class="card p-0 col-10 col-sm-10 col-lg-5 bg-light m-2 rounded row shadow-sm justify-content-center">
          <div class="card-header m-1">
            <h4 class="text-center">RESUMEN</h4>
          </div>
          <div>
            <div>
              <div class="pt-2 ">
                <p class="row justify-content-around">
                  <strong>SUBTOTAL :</strong>
                  <span class="">${{totalCart}}</span>
                </p>
              </div>
              <div class="">
                <p class="row justify-content-around"><strong>ENVIO :</strong><span class="ml-4">${{this.shipping}}</span></p>
              </div>
            </div>
          </div>
          <div class="card-footer row m-1">
            <div class="col-6 ">
              <p class="h3 text-center">$ {{totalCart + this.shipping}}</p>
            </div>
            <div class="col-6 text-center">
              <a class="btn btn-primary rounded-pill pl-4 pr-4" href="https://www.mercadopago.com.ar/"  >COMPRAR</a>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState , mapActions } from "vuex";
export default {
  name: "cart",
  data() {
    return {
      shipping: 100,
    }
  },

  methods:{
  ...mapActions(["deleteOfCart","cartProducts"]),


  },
  computed: {
    ...mapState(["cart","totalCart"]),
    
  
  }
};
</script>