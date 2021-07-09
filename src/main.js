import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
import firebase from 'firebase'
import { store } from "./data/data.js"
import VueRouter from 'vue-router'
import {routes} from "./router/router.js"

Vue.use(VueRouter)

const router = new VueRouter ({
  routes //cài thông tin của router
})

router.beforeEach ((to,from,next) => {
  console.log(`ok`);
  next();
})

Vue.config.productionTip = false

// add firebase
const firebaseConfig = {
  apiKey: "AIzaSyBvnzAsUObSEJPnpiDF-SFAW_-E9c9xGME",
  authDomain: "movie-project-2870c.firebaseapp.com",
  projectId: "movie-project-2870c",
  storageBucket: "movie-project-2870c.appspot.com",
  messagingSenderId: "201241030177",
  appId: "1:201241030177:web:57dbabcd7e2c14c3247d60"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

$(document).ready(() => {
  $(`#hamburger-menu`).click(() => {
    $(`#hamburger-menu`).toggleClass(`active`);
    $(`#nav-menu`).toggleClass(`active`);
  });
});