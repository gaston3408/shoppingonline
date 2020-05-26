<template>
  <div class="container-fluid mt-5 bg-light py-5">
    <div class="row justify-content-center mt-5 mb-5 py-5">
      <div class="card col-md-7 col-lg-5 col-10 py-5 shadow-lg">
        <h1 class="card-title text-center">
          <span class="h3" v-if="!registro">INGRESO</span>
          <span class="h3" v-if="registro">REGISTRO</span>
        </h1>
        <div class="card-body">
          <button class="btn-danger btn-block py-3 mb-3 rounded" @click="google">
            <i class="fab fa-google mr-3"></i>GOOGLE
          </button>
          <button class="btn-info btn-block py-3 rounded" @click="facebook">
            <i class="fab fa-facebook mr-3"></i>FACEBOOK
          </button>
        </div>
        <div class="card-footer bg-white mt-3">
          <button class="btn btn-dark btn-block" @click="registro = !registro">
            <span v-if="!registro">¿No tienes cuenta? Registrate</span>
            <span v-if="registro">¿Ya tienes cuenta? Ingresa</span>
          </button>
        </div>
      </div>
      {{user}}
    </div>
  </div>
</template>

<script>
import { firebase, auth, db } from "../main";
import { mapMutations, mapState } from 'vuex';
export default {
  data() {
    return {
      registro: false
    };
  },
  methods: {

    ...mapMutations(['setUser']),

    google() {
      const provider = new firebase.auth.GoogleAuthProvider();
      this.login(provider);
    },

    facebook() {
      const provider = new firebase.auth.FacebookAuthProvider();
      this.login(provider)
    },

//guardar usuarios
    async login(provider) {
      firebase.auth().languageCode = "es";
      try {
        const result = await firebase.auth().signInWithPopup(provider);
        const user = result.user;
        //construir usuario
        const dataUser = {
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          picture: user.photoURL
        };

        this.setUser(dataUser)

        //guardar en firestore
        await db
          .collection("users")
          .doc(dataUser.uid)
          .set(dataUser);



      } catch (error) {
        console.log(error);
      }
    },

  },

    computed: {
      ...mapState(['user'])
    }
  
}
</script>

