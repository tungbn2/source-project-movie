<template>
  <div>
    <!-- Update-moniter -->
    <div class="section">
      <div class="container">
        <div class="section-details">
          <div class="row">
            <div class="col-12 col-md-12 col-sm-12">
              <div class="section-header">Update</div>
              <div class="input-detail">
                <form action="#">
                  <div class="form-group row">

                    <div class="col-12 col-md-12 col-sm-12 input-area">
                      <label for="">Movie Name: </label>
                      <input
                        type="text"
                        class="form-control"
                        name="title"
                        v-model="addMovieData.title"
                        aria-describedby="helpId"
                        placeholder="Movie Name"
                      />
                    </div>

                    <div class="col-12 col-md-12 col-sm-12 input-area">
                      <label for="">Movie Image: </label>
                      <input
                        type="text"
                        class="form-control"
                        name="img"
                        v-model="addMovieData.img"
                        aria-describedby="helpId"
                        placeholder="Movie Image"
                      />
                    </div>

                    <div class="col-12 col-md-12 col-sm-12 input-area">
                      <label for="">Movie Banner: </label>
                      <input
                        type="text"
                        class="form-control"
                        name="banner"
                        v-model="addMovieData.banner"
                        aria-describedby="helpId"
                        placeholder="Movie Banner"
                      />
                    </div>

                    <div class="col-12 col-md-12 col-sm-12 input-area">
                      <label for="">Movie Description: </label>
                      <textarea
                        class="form-control"
                        name="description"
                        cols="30"
                        rows="1"
                        v-model="addMovieData.description"
                        placeholder="Movie Description"
                      ></textarea>
                    </div>

                    <div class="col-12 col-md-12 col-sm-12 input-area">
                      <label class="input-group-text" for="inputGroupSelect01"
                        >Category:
                      </label>
                      <select class="custom-select" id="inputGroupSelect01" v-model="addMovieData.category">
                        <option selected>Choose...</option>
                        <option value="movie">Movie</option>
                        <option value="series">Series</option>
                        <option value="premium">Premium</option>
                      </select>
                    </div>


                    <div class="col-6 col-md-6 col-sm-3 input-area">
                      <label for="">Age Accepted: </label>
                      <input
                        type="text"
                        class="form-control"
                        name="ageAccepted"
                        v-model="addMovieData.ageAccepted"
                        aria-describedby="helpId"
                        placeholder="Age Accepted"
                      />
                    </div>

                    <div class="col-6 col-md-6 col-sm-3 input-area">
                      <label for="">Movie Quality: </label>
                      <input
                        type="text"
                        class="form-control"
                        name="quality"
                        v-model="addMovieData.quality"
                        aria-describedby="helpId"
                        placeholder="Movie Quality"
                      />
                    </div>

                    <div class="col-6 col-md-6 col-sm-3 input-area">
                      <label for="">Movie Rate: </label>
                      <input
                        type="number"
                        class="form-control"
                        name="star"
                        v-model="addMovieData.star"
                        aria-describedby="helpId"
                        placeholder="Movie Rate"
                      />
                    </div>

                    <div class="col-6 col-md-6 col-sm-3 input-area">
                      <label for="">Movie Time: </label>
                      <input
                        type="number"
                        class="form-control"
                        name="time"
                        v-model="addMovieData.time"
                        aria-describedby="helpId"
                        placeholder="Movie Time"
                      />
                    </div>

                    <div class="col-12 col-md-12 col-sm-12 input-area">
                      <label for="">Movie Link: </label>
                      <input
                        type="text"
                        class="form-control"
                        name="watchHTML"
                        v-model="addMovieData.watchHTML"
                        aria-describedby="helpId"
                        placeholder="Movie Link"
                      />
                    </div>

                  </div>
                  <div class="submit">
                    <a class="btn btn-submit" @click="updateMovie">Update Movie</a>
                    <a class="btn btn-submit" @click="deleteMovie">Delete Movie</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Update-moniter -->
  </div>
</template>

<script>
export default {
  name: `updateMonitor`,
  data() {
    return {
    //   addMovieData: {
    //     ageAccepted: ``,
    //     category: `movie`,
    //     description: ``,
    //     banner:``,
    //     img: ``,
    //     quality: ``,
    //     star: ``,
    //     time: ``,
    //     title: ``,
    //     watchHTML: ``,
    //   },
    };
  },
  computed: {
      addMovieData () {
        return this.$store.state.movieInfor;
      }
  },
  methods: {
    addMovie () {
      for (let item in this.addMovieData) {
        if (this.addMovieData[item] == ``){
          this.statusAddMovie = false;
          alert (`check data in ${item}`);
          break;
        } else { this.statusAddMovie = true}
      }
      if (this.statusAddMovie) {
          this.$store.dispatch(`addMovie`,this.addMovieData )
      }
      this.addMovieData = {
        ageAccepted: ``,
        category: `movie`,
        description: ``,
        banner:``,
        img: ``,
        quality: ``,
        star: ``,
        time: ``,
        title: ``,
        watchHTML: ``,
      }
      // 
    },
    updateMovie () {
        let data = {};
        data.id = this.$route.params.id;
        data.data = this.addMovieData;
        this.$store.dispatch (`updateMovie`, data);
    },
    deleteMovie(){
     if (confirm(`Do you want to delete this movie ?`)){
        let id = this.$route.params.id;
      this.$store.dispatch (`deleteMovie`,id)
     }
    }
  },
   created () {
      let id = this.$route.params.movieId;
      this.$store.dispatch (`getMovieInfor`, id);
      if (!this.$store.state.user) {alert(`please login`)}
    }
};
</script>

<style>