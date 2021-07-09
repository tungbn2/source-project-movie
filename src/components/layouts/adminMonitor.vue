<template>
  <div>
    <!-- admin-moniter -->
    <div class="section">
      <div class="container">
        <div class="section-details">
          <div class="row">
            <div class="col-12 col-md-12 col-sm-12">
              <div class="section-header">Admin</div>
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

                    <div class="col-12 col-md-12 col-sm-12 input-area">
                      <label class="input-group-text" for="inputGroupSelect01"
                        >Status:
                      </label>
                      <select class="custom-select" id="inputGroupSelect01" v-model="movieStatus">
                        <option selected>Choose...</option>
                        <option value="new">New</option>
                        <option value="update">Update</option>
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
                    <a class="btn btn-submit" @click="addMovie">Add Movie</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- admin-moniter -->
  </div>
</template>

<script>
export default {
  name: `adminMonitor`,
  data() {
    return {
      statusAddMovie: false,
      movieStatus: `new`,
      addMovieData: {
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
      },
    };
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
    }
  },
};
</script>

<style scoped>
.user-detail,
.input-detail {
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