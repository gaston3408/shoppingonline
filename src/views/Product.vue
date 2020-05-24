<template>
  <div id="product" class="container-fluid">
    <div class="mt-5 mb-5 row  justify-content-center">
      <div class="col-lg-8 col-sm-10 col-md-10 bg-light">
        <div class="row">
          <div class="col-lg-5 col-sm-12 col-md-5 p-0">
            <img :src="product.img" class="d-block card-img" :alt="product.name" />
          </div>

          <div class="col-lg-7 col-sm-12 col-md-7">
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