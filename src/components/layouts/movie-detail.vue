<template>
<div>
  <movieDetail :movieDetail="movieDetail"/>
  <slide :category="getCategory"/>
  </div>
</template>

<script>
import slide from "../components/slide.vue"
import movieDetail from "../components/info.vue"

export default {
    name: `movieDetailPage`,
    components:{slide, movieDetail},
    methods: {
      show () {
        console.log(this.$route);
      }
    },
    computed:{
      movieDetail () {
        return this.$route.params;
      },
      getCategory () {
        return this.$route.params.category;
      }
    }
}
</script>

<style>

</style>