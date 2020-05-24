<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="pt-5 col-12">
        <form @submit.prevent="searchingProducts(filter)" class="d-flex justify-content-end pr-5">
          <input
            v-model="filter"
            @keyup="searchingProducts(filter)"
            type="text"
            placeholder="  Buscar..."
            class="text-center border-secondary rounded-pill"
          />
          <a class="fas fa-search m-2" />
        </form>
      </div>

      <div
        id="active"
        class="mt-4 bg-light col-8 col-sm-5 col-md-3 col-lg-2 mb-4 ml-2 rounded"
        v-for="item in productsFiltered"
        :key="item.id"
      >
        <router-link :to="{name:'product',params:{id: item.id }}">
          <div class="card-body">
            <img :src="item.img" :alt="item.name" class="img-card-top img-fluid" />
            <h4 class="card-text text-center h6 text-block">{{item.name}}</h4>
          </div>
        </router-link>
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
    this.getProducts();
  },
  methods: {
    ...mapActions(["getProducts", "searchingProducts"])
  },
  computed: {
    ...mapState(["products"]),
    ...mapGetters(["productsFiltered"])
  }
};
</script>

<style>
#active:hover {
  box-shadow: 2px 2px 2px 2px #999;
}
</style>
