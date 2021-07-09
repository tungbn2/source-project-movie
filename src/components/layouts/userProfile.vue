<template>
  <div>
        <!-- user details -->
    <div class="section">
      <div class="container">
        <div class="section-details">
          <div class="row">
            <div class="col-12 col-md-12 col-sm-12">
              <div class="section-header">Hi, {{userInfor.name}}</div>
              <div class="user-detail">
                <p><span>Name:</span>  {{userInfor.name}}</p>
                <p><span>E-mail:</span>  {{userInfor.email}}</p>
                <p><span>Account:</span>  {{userInfor.account}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- user details -->
  
    <!-- list liked movie -->
    <div class="section">
    <div class="container">
      <div class="section-header">Liked Movies</div>
      <div class="section-details">
        <div class="row movie-details">
          <!-- Movie Item -->
          <div
            class="col-3 col-md-6 col-sm-12"
            v-for="item in getLikedMovies"
            :key="item.id"
          >
            <router-link
              :to="{name: `movieDetail`, params: {category: item.category, movieId: item.id}}"
            >
              <a href="#" class="movie-item">
                <img :src="item.img" alt="" />
                <i class="bx bx-heart movie-item-heart"></i>
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
              </a>
            </router-link>
          </div>

          <!-- End Movie Item -->
        </div>
      </div>
    </div>
  </div>
    <!-- end list liked movie -->
  </div>
</template>

<script>
export default {
  name: `userProfile`,
  methods: {
    show() {
      console.log(this.getLikedMovies);
    }
  },
  computed: {
    userId() {
      return this.$store.state.user.uid;
    },
    userInfor () {
      return this.$store.state.userInfor;
    },
    getLikedMovies () {
      let likedMovieId = this.userInfor.likedMovies;
      if (likedMovieId != []) {
        this.$store.commit (`getLikedMovies`, likedMovieId);
      }
      
      return this.$store.state.LikedMovies;
    },
  },
};
</script>

<style scope>
/* button{
margin-top: 100px;
} */

.user-detail,
.input-detail {
  margin-top: 50px;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.8),
    rgba(85, 17, 17, 0.2)
  );
  border-radius: 20px;
  margin-bottom: 40px;
  padding: 20px;
  line-height: 2rem;
  box-shadow: 2px 2px 2px 2px rgba(212, 62, 62, 0.8);
  justify-items: center;
  position: relative;
}

.user-detail {
  font-size: 1.25rem;
  line-height: 2.5rem;
}

.user-detail p {
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.user-detail p:hover {
  color: rgba(212, 62, 62, 0.8);
}

.user-detail span {
  display: inline-block;
  width: 120px;
  text-transform: uppercase;
  font-weight: 700;
}

.input-area {
  line-height: 2.5rem;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.input-area input,
.input-area textarea,
.input-area select {
  line-height: 2.5rem;
  width: 60%;
  background: none;
  outline: none;
  border: none;
  border-bottom: 1px solid rgba(212, 62, 62, 0.8);
  font-family: "Times New Roman", Times, serif;
  font-size: 1.2rem;
  color: white;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

option {
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0.8);
}

.input-area input:focus,
.input-area textarea:focus {
  outline: none;
  border: none;
  border-bottom: 3px solid rgba(65, 230, 216, 0.8);
  border-radius: 10px;
  transform: translateY(-2px);
}

label {
  display: inline-block;
  width: 22%;
}

.submit {
  display: flex;
  justify-content: center;
}
.btn-submit {
  margin-top: 30px;
  transition: all 0.2s ease-in-out;
}

.btn-submit:hover {
  transform: translateY(-2px);
  font-size: 1.5rem;
  cursor: pointer;
}

.btn-submit::before {
  z-index: -1;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: var(--main-color);
  transition: 0.3s ease-in-out;
}

.btn-submit:hover::before {
  width: 100%;
}

@media only screen and (max-width: 850px) {
  label {
    display: block;
    width: 100%;
  }
}
</style>