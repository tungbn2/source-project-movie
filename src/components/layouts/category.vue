<template>
  <div>
      <slide :category="category"/>
      <listMovies :category="category" />
  </div>
</template>

<script>
import slide from '../components/slide.vue'
import listMovies from "../components/list.vue"

export default {
  components: { slide, listMovies },
    name: `categoryPage`,
    data() {
        return {
            category: this.$route.params.category,
        }
    },
    watch: {
        $route (to) {
            this.category = to.params.category;
        }
    }

}
</script>

<style>

</style>