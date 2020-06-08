<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div
        v-for="item in cart"
        :key="item.id"
        class="col-10 col-lg-5 bg-light m-2 rounded row shadow-sm justify-content-between"
      >
        <div class="col-4 col-md-3 col-lg-4 p-3">
          <img :src="item.img" alt="producto" class="img-thumbnail " />
        </div>
        <div class="col-8 col-md-9 col-lg-8 ">
          <div class="row">
            <h5 class="pt-3 col-10" style="height: 50px">{{item.name}}</h5>
            <button type="button" class="close col-1" aria-label="Close"  @click="getNewCart(item.id)" >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <p class="pt-2" style="height: 60px">{{item.description}}</p>
          <div class="row justify-content-between card-footer d-flex bg-light">
            <p class="mt-3 col h4">${{item.price}}</p>
            <button class="btn  btn-primary rounded-pill btn-sm m-2">COMPRAR</button>
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
      
    }
  },

  methods:{
  ...mapActions(["deleteProductCart","cartProducts"]),

  getNewCart(id){
    this.deleteProductCart(id)
    .then(()=>
    this.cartProducts()
    )
  }
  },
  computed: {
    ...mapState(["cart"])
  }
};
</script>