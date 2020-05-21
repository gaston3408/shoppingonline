<template>
  <div class="container">
    <div class="row justify-content-center">
      <div
        class="mt-4 shadow col-8 col-sm-5 col-md-3 col-lg-2 mb-4 ml-2"
        v-for="item in products"
        :key="item.id"
      >
        <div class="card-body">
          <img :src="item.img" :alt="item.name" class="img-card-top img-thumbnail img-fluid" />
          <h4 class="card-text text-center h6 text-block">{{item.name}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "start",
  mounted() {
    this.getProducts();
  },
  methods: {
    ...mapActions(["getProducts"])
  },
  computed: {
    ...mapState(["products"])
  }
};
</script>

<style>
</style>