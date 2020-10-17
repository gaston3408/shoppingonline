<template>
  <div class="container-fluid mt-3 bg-light py-5">
    <div class="row justify-content-center mt-5 mb-5 py-5">
      <div class="card col-md-7 col-lg-5 col-12 py-5 shadow-lg">
        <h1 class="card-title text-center">
          <span class="h3" v-if="!registro">INGRESO</span>
          <span class="h3" v-if="registro">REGISTRO</span>
        </h1>
        <div class="card-body">
          <button class="btn-danger btn-block py-2 mb-3 rounded" @click="google">
            <i class="fab fa-google mr-3"></i>GOOGLE
          </button>
          <button class="btn-info btn-block btn-md py-2 rounded" @click="facebook">
            <i class="fab fa-facebook mr-3"></i>FACEBOOK
       git    </button>
          <div class="mt-3" v-if="error">
            <div class="alert alert-warning" role="alert">{{error}}</div>
          </div>
        </div>
        <div class="card-footer bg-white mt-3">
          <button class="btn btn-dark btn-sm btn-block" @click="registro = !registro">
            <span v-if="!registro">¿No tienes cuenta? Registrate</span>
            <span v-if="registro">¿Ya tienes cuenta? Ingresa</span>
          </button>
        </div>
      </div>
    </div>
    {{user}}
  </div>
</template>

<script>
import { firebase, auth, db } from "../main";
import router from "../router";
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      registro: false
    }
  },
    mounted(){
      if(this.user){
        router.push({name:'start'})
      }
    
    },
  methods: {
    ...mapMutations(["setUser", "setError"]),

    google() {
      const provider = new firebase.auth.GoogleAuthProvider();
      this.login(provider);
    },

    facebook() {
      const provider = new firebase.auth.FacebookAuthProvider();
      this.login(provider);
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

        this.setUser(dataUser);

        //guardar en firestore
        await db
          .collection("users")
          .doc(dataUser.uid)
          .set(dataUser);
      } catch (error) {
        if (error.code == "auth/account-exists-with-different-credential") {
          this.setError(
            "La cuenta ya existe con otra entidad. Por favor seleccione la correcta"
          );
          setTimeout( () =>{ this.setError(null) },3000 )
        }
      }
    }
  },

  computed: {
    ...mapState(["user"]),
    ...mapState(['error'])
  }
};
</script>

