<template>
  <div class="nav-wrapper">
      <div class="container">
        <div class="nav">
          <router-link tag="a" to="/" exacthref="# " class="logo">
            <i class="bx bx-movie-play bx-tada main-color"></i>F1<span
              class="main-color"
              >i</span
            >x
          </router-link>
          <ul class="nav-menu" id="nav-menu">
            <router-link  tag="li" to="/" exact><a >Home </a></router-link>
            <router-link  tag="li" to="/series" exact><a >Series </a></router-link>
            <router-link  tag="li" to="/movie" exact><a >Movie </a></router-link>
            <router-link  tag="li" to="/premium"  v-if="getUserAccount == `premium`" exact><a>Premium </a></router-link>
            
            <li><a href="#">About</a></li>
            <li v-if="getUserName== ``">
              <a href="#" class="btn btn-hover" 
              @click="changeStatus(`login`)">
                <span>Sign in</span>
              </a>
            </li>
            <li v-if="getUserName!=``" class="dropdown">
              <a href="#" class="btn btn-hover dropdown-btn">
                <span>Hi, {{ getUserName }}</span>
              </a>
              <div class="dropdown-content">
                <router-link tag="a" :to="{name: `userProfile`}">Profile</router-link>
                <router-link tag="a" :to="{name: `adminMonitor`}"
                v-if="getUserAccount == `admin`"
                >Admin</router-link>
              </div>
            </li>
            <li >
            <span v-if="getUserName!=``" class="sign-out" @click="signOut">
              <i class='bx bx-log-out-circle'></i>
            </span>
            </li>
          </ul>
          <!-- MOBILE MENU TOGGLE -->
          <div class="hamburger-menu" id="hamburger-menu">
            <div class="hamburger"></div>
          </div>
        </div>
      </div>
      <loginCont />
    </div>
</template>

<script>
import loginCont from "../components/login.vue";

export default {
  name: `navBar`,
  components: {
    loginCont,
  },
  data() {
    return {};
  },
  methods: {
    changeStatus(status) {
      this.$store.commit(`changeStatus`, status);
    },
    signOut() {
      // this.getUserName = null;
      // this.getUserAccount = null;
      this.$router.push ({name: `home` })
      this.$store.dispatch(`signOut`);
    },
    show(){
      console.log(this.$store.state.userInfor);
    }
  },
  computed: {
    getUserName () {
      return this.$store.state.user.displayName;
    },
    getUserId(){
       return this.$store.state.user.uid;
    },
    getUserAccount () {
        let userInfor = this.$store.state.userInfor;
        return userInfor.account;
    }
  },
};
</script>

<style scope>
.sign-out {
  font-size: 1.5rem;
  color: #c0392b;
  margin-left: -5px;
  margin-right: -5px;
  transition: all 0.2s ease-in-out;
}
.sign-out:hover {
  transform: scale(1.2);
  font-weight: 700;
}

/* ----------dropdown----------- */

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  z-index: 1;
}

.dropdown-content a {
  color: rgb(255, 255, 255);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  outline: none;
  border-radius: 15px;
  transition: all 0.2s ease-in-out;
}

/* thay đổi màu background khi hover vào đường dẫn */
.dropdown-content a:hover {
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.8),
    rgba(68, 5, 5, 0.2)
  );
  text-shadow: 1px 1px 2px 2px white;
}
/* hiển thị nội dung dropdown khi hover */
.dropdown:hover .dropdown-content {
  display: block;
}
</style>