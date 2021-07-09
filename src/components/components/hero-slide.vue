<template>
  <div class="carousel-nav-center">
    <carousel
      :autoplay="true"
      :nav="true"
      :items="1"
      :dots="true"
      :loop="true"
      :navText="navText"
      :autoplayHoverPause="true"
    >
      <template slot="prev"><span class="prev">prev</span></template>

      <!-- Slide Item -->
      <div v-for="item in dataMovies" :key="item.id">
      <div class="hero-slide-item">
        <img v-bind:src="item.banner" alt="" />
        <div class="overlay"></div>
        <div class="hero-slide-item-content">
          <div class="item-content-wrapper">
            <div class="item-content-title top-down delay-2">
              {{ item.title }} 
            </div>
            <div class="movie-infos top-down delay-4">
              <div class="movie-info">
                <i class="bx bx-star"></i>
                <span>{{ item.star }}</span>
              </div>
              <div class="movie-info">
                <i class="bx bx-time"></i>
                <span>{{ item.time }}</span>
              </div>
              <div class="movie-info">
                <span>{{ item.quality }}</span>
              </div>
              <div class="movie-info">
                <span>{{ item.ageAccepted }}</span>
              </div>
            </div>
            <div class="item-content-description top-down delay-6">
              {{ item.description }}
            </div>
            <div class="item-action top-down delay-8">
              <router-link tag="a" 
              :to="{
                name: `movieDetail`,
                params: { category: item.category, movieId: item.id },
              }"
              class="btn btn-hover">
                <i class="bx bxs-right-arrow"></i>
                <span>Read More ...</span>
                </router-link>
            </div>
          </div>
        </div>
      </div>
      </div>
      <!-- end Slide Item -->

      <!-- Slide Item -->
      <div class="hero-slide-item">
        <img v-bind:src="dataMovies[0].img" alt="" />
        <div class="overlay"></div>
        <div class="hero-slide-item-content">
          <div class="item-content-wrapper">
            <div class="item-content-title top-down delay-2">
              {{ dataMovies[0].title }}
            </div>
            <div class="movie-infos top-down delay-4">
              <div class="movie-info">
                <i class="bx bx-star"></i>
                <span>{{ dataMovies[0].star }}</span>
              </div>
              <div class="movie-info">
                <i class="bx bx-time"></i>
                <span>{{ dataMovies[0].time }}</span>
              </div>
              <div class="movie-info">
                <span>{{ dataMovies[0].quality }}</span>
              </div>
              <div class="movie-info">
                <span>{{ dataMovies[0].ageAccepted }}</span>
              </div>
            </div>
            <div class="item-content-description top-down delay-6">
              {{ dataMovies[0].description }}
            </div>
            <div class="item-action top-down delay-8">
              <router-link tag="a" 
              :to="{
                name: `movieDetail`,
                params: { category: dataMovies[0].category, movieId: dataMovies[0].id },
              }"
              class="btn btn-hover">
                <i class="bx bxs-right-arrow"></i>
                <span>Read More ...</span>
                </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- end Slide Item -->


      <template slot="next"><span class="next"></span></template>
    </carousel>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: `heroSlide`,
  components: { carousel },
  data() {
    return {
      navText: [
        "<i class='bx bxs-chevron-left' ></i>",
        "<i class='bx bxs-chevron-right' ></i>",
      ],
    };
  },
  computed: {
    dataMovies (){
      let heroMovie = [];
      let data = this.$store.state.dataMovies;
      for (let i = 0; i<5; i++){
        heroMovie.push(data[i]);
      }
      return heroMovie;
    }
  },
};
</script>

<style>
</style>