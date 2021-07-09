<template>
  <div class="section" v-if="checkPremium()">
    <div class="container">
      <router-link
        tag="div"
        :to="{ name: `category`, params: { category: category } }"
        class="section-header"
        >{{ category }}</router-link
      >
      <div class="movies-slide carousel-nav-center">
        <carousel
          :items="2"
          :dots="false"
          :loop="true"
          :nav="true"
          :autoplay="true"
          :navText="navText"
          :margin="5"
          :responsive="responsive"
        >
          <template slot="prev"><span class="prev"></span></template>

          <div v-for="item in dataMovies" :key="item.id">
            <!-- Movie Item -->
            <router-link
              :to="{
                name: `movieDetail`,
                params: { category: item.category, movieId: item.id },
              }"
            >
              <span class="movie-item">
                <img :src="item.img" alt="" />
                <div class="movie-item-content">
                  <div class="movie-item-title">{{ item.title }}</div>
                  <div class="movie-infos">
                    <div class="movie-info">
                      <i class="bx bx-star"></i>
                      <span>{{ item.star }}</span>
                    </div>
                    <div class="movie-info">
                      <i class="bx bx-time"></i>
                      <span>{{ item.time }} mins</span>
                    </div>
                    <div class="movie-info">
                      <span>{{ item.quality }}</span>
                    </div>
                    <div class="movie-info">
                      <span>16+</span>
                    </div>
                  </div>
                </div>
              </span>
            </router-link>
            <!-- End Movie Item -->
          </div>

          <div>
            <!-- Movie Item -->
            <router-link
              :to="{
                name: `movieDetail`,
                params: {
                  category: dataMovies[0].category,
                  movieId: dataMovies[0].id,
                },
              }"
            >
              <span class="movie-item">
                <img :src="dataMovies[0].img" alt="" />
                <div class="movie-item-content">
                  <div class="movie-item-title">{{ dataMovies[0].title }}</div>
                  <div class="movie-infos">
                    <div class="movie-info">
                      <i class="bx bx-star"></i>
                      <span>9.5</span>
                    </div>
                    <div class="movie-info">
                      <i class="bx bx-time"></i>
                      <span>120 mins</span>
                    </div>
                    <div class="movie-info">
                      <span>HD</span>
                    </div>
                    <div class="movie-info">
                      <span>16+</span>
                    </div>
                  </div>
                </div>
              </span>
            </router-link>
            <!-- End Movie Item -->
          </div>

          <template slot="next"><span class="next"></span></template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "slide",
  components: { carousel },
  data() {
    return {
      responsive: {
        500: {
          items: 2,
        },
        1280: {
          items: 4,
        },
        1600: {
          items: 6,
        },
      },

      navText: [
        "<i class='bx bxs-chevron-left' ></i>",
        "<i class='bx bxs-chevron-right' ></i>",
      ],
    };
  },
  props: [`category`],
  computed: {
    //get data from vuex
    dataMovies() {
      let temp = this.$store.state.dataMovies;
      let data = [];
      let i = 0;
      for (let item of temp) {
        if ((item.category == this.$props.category) & (i < 5)) {
          i++;
          data.push(item);
        }
      }
      return data;
    },
  },
  methods:{
    checkPremium(){
      let account = this.$store.state.userInfor.account;
      let category = this.$props.category
      if ((account != `premium`&& category == `premium`)){
        return false
      } else {return true}
    }
  }
};
</script>

<style scoped>
.section-header{
  cursor: pointer;
}
</style>