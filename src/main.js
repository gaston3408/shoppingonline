import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import "bootswatch/dist/minty/bootstrap.min.css"
import router from './router'
import store from './store'
import firebase from 'firebase/app';
import 'firebase/firestore';


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


const db = firebase.firestore();

export {db} 


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
