<template>
  <div id="navBar ">
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-lg row">
        <router-link to="/">
          <i class="far fa-gem fa-2x col"></i>
        </router-link>
        <router-link to="/">
          <a class="navbar-brand display-1 col text-fluid">TUTIENDA.COM</a>
        </router-link>
        <div class="d-flex justify-content-end col">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

        <div class="collapse navbar-collapse justify-content-end col" id="navbarNav">
          <ul class="navbar-nav mr-4">
            <li>
              <router-link :to="{name:'cart'}" v-if="authUser">
                <a class="nav-link text-primary">Carrito</a>
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-primary"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Catalogo</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Ropa femenina</a>
                <a class="dropdown-item" href="#">Ropa masculina</a>
                <a class="dropdown-item" href="#">Ropa deportiva</a>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link is-active text-primary" href="#">Nosotros</a>
            </li>
            <li id="route" class="nav-item">
              <router-link :to="{name:'entry'}" v-if="!authUser">
                <a class="nav-link text-primary">Ingresar</a>
              </router-link>
            </li>
            <li class="nav-item" v-if="authUser">
              <a type="button" class="text-danger nav-link" @click="signOut">Cerrar sesion</a>
            </li>
            <img
              :src="user.picture"
              v-if="authUser"
              class="rounded-circle ml-3"
              width="30"
              height="30"
              alt
            />
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "navBar",
  data() {
    return {
      active: false
    };
  },

  methods: {
    ...mapActions(["signOut"])
  },

  computed: {
    ...mapGetters(["authUser"]),
    ...mapState(["user"])
  }
};
</script>

<style>
</style>