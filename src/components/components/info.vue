<template>
  <!-- Movie Detail -->
  <div class="hero-section">
    <!-- Hero Slide -->
    <div class="movie-details movie-info-cont">
      <!-- Slide Item -->
      <div class="hero-slide-item">
        <img :src="movieInfor.banner" alt="" />
        <div class="overlay"></div>
        <div class="hero-slide-item-content">
          <div class="item-content-wrapper">
            <div class="item-content-title">{{ movieInfor.title }}</div>
            <div class="movie-infos">
              <div class="movie-info">
                <i class="bx bx-star"></i>
                <span>{{ movieInfor.star }}</span>
              </div>
              <div class="movie-info">
                <i class="bx bx-time"></i>
                <span>{{ movieInfor.time }} mins</span>
              </div>
              <div class="movie-info">
                <span>{{ movieInfor.quality }}</span>
              </div>
              <div class="movie-info">
                <span>{{ movieInfor.ageAccepted }}</span>
              </div>
            </div>
            <div class="item-content-description">
              {{ movieInfor.description }}
            </div>
            <div class="item-action" v-if="getUserName != ``">
              <router-link
                tag="a"
                :to="{ name: `watchMovie`, params: params }"
                class="btn btn-hover"
              >
                <i class="bx bxs-right-arrow"></i>
                <span>Watch Now</span>
              </router-link>
              <span class="btn btn-hover ml-1" @click="addLikeMovie()">
                <i class="bx bxs-heart"></i><span> add favourite</span>
              </span>

              <router-link
                tag="span"
                :to="{name:`updateMonitor`, params:{id: id}}"
                class="btn btn-hover hover"
                @click="addLikeMovie()"
                v-if="getUserAccount == `admin`"
              >
              <i class="bx bxl-vuejs"></i>
                <span> Update </span>
                </router-link>
              
            </div>
            <div
              v-if="getUserName == ``"
              class="mt-1 item-action"
              @click="changeStatus(`login`)"
            >
              <h2>Pls log-in to watch</h2>
            </div>
          </div>
        </div>
      </div>
      <!-- end Slide Item -->
    </div>
  </div>
  <!-- End Movie Detail -->
</template>

<script>
export default {
  name: `movieDetail`,
  methods: {
    show() {
      console.log(this.id);
    },
    changeStatus(status) {
      this.$store.commit(`changeStatus`, status);
    },
    addLikeMovie() {
      let user = this.$store.state.user
      console.log(user);
      this.$store.dispatch(`getUserInfor`, user);
      this.$store.dispatch(`addLikeMovie`, this.$route.params.movieId);
      // alert (`like ok`)
      // console.log (this.$route.params.movieId)
    },
  },
  computed: {
    movieInfor() {
      return this.$store.state.movieInfor;
    },
    id () {
      return this.$route.params.movieId;
    },
    params() {
      return this.$route.params;
    },
    getUserName() {
      return this.$store.state.user.displayName;
    },
    getUserAccount() {
      let userInfor = this.$store.state.userInfor;
      return userInfor.account;
    },
  },
  created() {
    let id = this.$route.params.movieId;
    this.$store.dispatch(`getMovieInfor`, id);
    if (!this.$store.state.user) {
      alert(`please login`);
    }
  },
};
</script>

<style scope>
.ml-1 {
  margin-left: 20px;
  cursor: pointer;
}

.mt-1 {
  cursor: pointer;
}

.mt-1:hover {
  color: brown;
}

.hover {
  cursor: pointer;
  margin-top: 20px;
}

.movie-info-cont{
  border-radius: 15px;
}
</style>