<template>
  <div class="section">
    <div class="container">
      <div class="section-header">{{ category }} list</div>
      <div class="section-details">
        <div class="row movie-details">
          <!-- Movie Item -->
          <div
            class="col-3 col-md-6 col-sm-12 mt-1"
            v-for="item in dataMovies"
            :key="item.id"
          >
            <router-link
              :to="{name: `movieDetail`, params: {category: item.category, movieId: item.id}}"
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
                      <span>{{ item.ageAccepted }}</span>
                    </div>
                  </div>
                </div>
              </span>
            </router-link>
          </div>

          <!-- End Movie Item -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `listMovies`,
  props: [`category`],
  computed: {
    //get data from vuex
    dataMovies() {
      // let category = this.$props.category;
      let temp = this.$store.state.dataMovies;
      let data = [];
      for (let item of temp) {
        if (item.category == this.$props.category) {
          data.push(item);
        }
      }
      return data;
    },
  },
  methods: {
    likedMovie(id){
      let index = this.$store.state.userInfor.likedMovies.indexOf(id)
      return (index == -1);
    },
    
    show (x) {
      // let data = this.$store.state.userInfor.likedMovies;
      // let index = data.indexOf(`3rHEdHUnV0BXaexIraAm`)
      console.log(x);
    }
  },
};
</script>

<style scoped>
.mt-1 {
  margin-top: 30px;
}
</style>