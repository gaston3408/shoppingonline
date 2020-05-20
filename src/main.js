import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

var firebase = require("firebase/app");

//require("firebase/auth");
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCS3ET5boFO9KQYfzXVM3wetboBTwoIPpY",
  authDomain: "ventas-5eb5a.firebaseapp.com",
  databaseURL: "https://ventas-5eb5a.firebaseio.com",
  projectId: "ventas-5eb5a",
  storageBucket: "ventas-5eb5a.appspot.com",
  messagingSenderId: "209634879405",
  appId: "1:209634879405:web:b8fcbc448ccd1c4c2e2324"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
