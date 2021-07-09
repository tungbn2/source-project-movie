<template>
  <div>
        <heroSlide />
        <topMovies />
        <!-- slide -->
        <div v-for="(category,index) in categories" :key="index">
        <slide :category="category" />
        </div>
        <pricing />
  </div>
</template>

<script>

import heroSlide from "../components/hero-slide.vue"
import topMovies from "../components/top-movies.vue"
import pricing from "../components/pricing.vue"
import slide from "../components/slide.vue"


export default {
    name:`main-page`,
    components: {
        heroSlide,
        topMovies,
        pricing,
        slide,
    },
   data() {
       return {
         categories: [`movie`, `series`, `premium`]
       }
   },
   methods: {
     addMovie (){
       let test = {test: `ok`}
       this.$store.dispatch(`addMovie`, test )
     },
   },
  computed: {
    dataMovies (){
      return this.$store.state.dataMovies
    }
  },
}
</script>

<style>

</style>