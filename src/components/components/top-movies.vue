<template>
  <div class="hero-slide">
    <div class="carousel-nav-center">
      <carousel :autoplay="true" :nav="false" :items = "2" :dots = "false" :loop="true" :autoplayHoverPause = "true" :responsive = "responsive"> 
<!-- Movie Item -->
          <div class="movie-item">
            <img src="./img/series/supergirl.jpg" alt="" />
            <div class="movie-item-content">
              <div class="movie-item-title">Supergirl</div>
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
          </div>
          <!-- End Movie Item -->
          <!-- Movie Item -->
          <div class="movie-item">
            <img src="./img/movies/captain-marvel.png" alt="" />
            <div class="movie-item-content">
              <div class="movie-item-title">Captain Marvel</div>
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
          </div>
          <!-- End Movie Item -->
          <!-- Movie Item -->
          <div class="movie-item">
            <img src="./img/cartoons/demon-slayer.jpg" alt="" />
            <div class="movie-item-content">
              <div class="movie-item-title">Demon Slayer</div>
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
          </div>
          <!-- End Movie Item -->
          <!-- Movie Item -->
          <div class="movie-item">
            <img src="./img/movies/blood-shot.jpg" alt="" />
            <div class="movie-item-content">
              <div class="movie-item-title">Bloodshot</div>
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
          </div>
          <!-- End Movie Item -->
          <!-- Movie Item -->
          <div class="movie-item">
            <img src="./img/series/wanda.png" alt="" />
            <div class="movie-item-content">
              <div class="movie-item-title">Wanda Vision</div>
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
          </div>
          <!-- End Movie Item -->
          <!-- Movie Item -->
          <div class="movie-item">
            <img src="./img/movies/bat-man.jpg" alt="" />
            <div class="movie-item-content">
              <div class="movie-item-title">The Dark Knight</div>
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
          </div>
          <!-- End Movie Item -->
          
      </carousel>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  name: `top-movies`,
  components: { carousel },
  data() {
      return {
          responsive: {
              500: {
              items: 3,
          },
          1280: {
            items: 4,
        },
        1600: {
            items: 6,
        },},
      }
  },
};
</script>

<style>
</style>