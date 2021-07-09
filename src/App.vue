<template>
  <div id="app">
    <navBar />
     <div>
       <!-- <mainPage />
       <categoryPage />
       <movieDetailPage /> -->
      <transition name="slide">
        <router-view :key="$route.path"></router-view>
      </transition>
     </div>

    <footerApp />
  </div>
</template>

<script>
// import component

import navBar from "./components/layouts/nav-bar.vue";
import footerApp from "./components/layouts/footer.vue";


export default {
  name: 'App',
  components: {
   navBar, 
   footerApp,

  },

  created() {
    this.$store.dispatch (`getDataMovies`)
  },
}
</script>

<style>
@import url("./CSS/app.css");
@import url("./CSS/grid.css");

/* /transition */

.slide-leave-active {
  transition: opacity 1s ease;
  opacity: 0;
  animation: slide-out 1s ease-out forwards;
}

.slide-leave {
  opacity: 1;
  transform: translateX(0)
}

@keyframes slide-out {
  0%{
    transform: translateX(0);
  }
  100% {
    transform: translateX(30px);
  }
}
</style>
