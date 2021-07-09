<template>
  <div>
    <div>
      <div class="watch-movie-clip">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-12 col-sm-12">
              <div v-html="watchHTML" class="clip"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <slide :category="getCategory" />
  </div>
</template>

<script>
import slide from "../components/slide.vue";

export default {
  name: `watchMovie`,
  components: { slide },
  methods: {
    show() {
      console.log(this.watchHTML);
    },
  },
  computed: {
    watchHTML() {
      return this.$store.state.movieInfor.watchHTML;
    },
    getCategory() {
      return this.$route.params.category;
    },
  },
};
</script>

<style>
.watch-movie-info {
    margin-top: 20px;
}

.watch-movie-info .item-content-wrap{
    width: 100%;
    padding: 20px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    background: linear-gradient(to right, rgba(44, 3, 3, 0.8), rgba(0,0,0,0.2));
}

.watch-movie-clip .clip {
    margin-top: 50px;
    height: 90vh;
}

.watch-movie-clip .clip iframe {
    border-radius: 15px;
    width: 100%;
    height: 100%;
}

/* responsive */

@media only screen and (max-width: 1280px) {
    .watch-movie-clip .clip {
        height: calc(100vw/16*9);
    }
}

@media only screen and (max-width: 850px) {
    .watch-movie-clip .clip {
        height: calc(100vw/16*9);
    }
}
</style>