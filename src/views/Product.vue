<template>
  <div id="product" class="container-fluid mt-5">
    <div class="mt-5 mb-5 row justify-content-center">
      <div class="col-lg-10 col-sm-10 col-md-10 ">
        <div class="row bg-light">
          <div class="col-lg-7 col-sm-12 col-md-7 p-0">
            <img :src="product.img" class="d-block card-img" :alt="product.name" />
          </div>

          <div class="col-lg-5 col-sm-12 col-md-5 border">
            <div class="row">
              <div class="col-lg-5 col-sm-5">
                <strong class="h4">EN STOCK</strong>
              </div>
            </div>
            <div class="card-body text-center mt-4 mb-3">
              <h5 class="card-title font-weight-bold h2">{{product.name}}</h5>
              <p class="card-text py-4">{{product.description}}</p>
              <p class="card-text h1">${{product.price}}</p>
            </div>
          </div>
          <div class="container-fluid">
          <div class=" row py-4 bg-primary">
              <div class="col-12">
                <p class="text-white font-weight-bold text-center h3">Todos los medios de pago</p>
              </div>
              <div class="col-12 text-center">
              <i class="fab fa-cc-paypal fa-3x text-white m-3"></i>
              <i class="fab fa-cc-mastercard fa-3x text-white m-3"></i>
              <i class="fab fa-cc-amex fa-3x text-white m-3"></i>
              <i class="fab fa-cc-visa fa-3x text-white m-3"></i>

              </div>
          </div>

          </div>
          <div class="container p-3">
            <div class="row ml-4 ">
              <div class="col-12">
                <h3 class="card-title mb-4">Descripcion</h3>
                <div class="">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste placeat suscipit quis ratione repellat architecto modi delectus aperiam voluptas
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
      id: this.$route.params.id
    };
  },
  mounted() {
    this.getProduct(this.id);
  },
  methods: {
    ...mapActions(["getProduct"])
  },
  computed: {
    ...mapState(["product"])
  }
};
</script>

<style>
</style>