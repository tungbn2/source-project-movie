<template>
  <div>
    <!-- login -->
    <div v-if="loginStatus == `login`" class="login-box">
      <span class="exit" @click="changeStauts(`none`)"><i class='bx bx-x-circle' ></i></span>
      <h1>Login</h1>

      <div class="text-box">
        <i class="bx bxs-user"></i>
        <input
          type="email"
          name=""
          class="form-control"
          value=""
          required="required"
          placeholder="Email"
          v-model="signIn.email"
        />
      </div>

      <div class="text-box">
        <i class="bx bxs-lock"></i>
        <input
          type="password"
          name=""
          class="form-control"
          value=""
          required="required"
          placeholder="Password"
          v-model="signIn.password"
        />
      </div>

      <input type="button" class="btn" value="Login" @click="signInMethods" />
      <a href="#" @click="changeStauts(`register`)">Register Now</a>
    </div>
    <!-- end login -->

    <!-- register -->
    <div v-if="loginStatus == `register`" class="login-box">
      <span class="exit" @click="changeStauts(`none`)"><i class='bx bx-x-circle' ></i></span>
      <h1>Register</h1>

      <div class="text-box">
        <i class="bx bx-rename"></i>
        <input
          type="text"
          class="form-control"
          required="required"
          placeholder="Name"
          v-model="register.name"
        />
      </div>

      <div class="text-box">
        <i class="bx bxs-user"></i>
        <input
          type="email"
          name=""
          class="form-control"
          value=""
          v-model="register.email"
          required="required"
          placeholder="Email"
        />
      </div>

      <div class="text-box">
        <i class="bx bxs-lock"></i>
        <input
          type="password"
          name=""
          id="input"
          class="form-control"
          value=""
          v-model="register.password"
          required="required"
          placeholder="Password"
        />
      </div>

      <input type="button" class="btn" value="Register" @click="registerMethods"/>
      <a href="#" @click="changeStauts(`login`)">Login Now</a>
    </div>
    <!-- end register -->
  </div>
</template>

<script>
export default {
  name: `loginCont`,
  data() {
    return {
      signIn: {
        email:``,
        password: ``
      },
      register: {
        email:``,
        name:``,
        password: ``
      }
    }
  },
  computed:{
      loginStatus(){
          return this.$store.state.loginStatus;
      }
  },
  methods: {
      changeStauts (status) {
          this.$store.commit(`changeStatus`, status)
      },
      signInMethods  () {
        this.$store.dispatch (`signIn`, this.signIn);
        // this.$store.dispatch(`getUserInfor`);
        // console.log( this.$store.state.user);
      },
      registerMethods () {
        this.$store.dispatch (`registerUser`, this.register)
      }
  }

};
</script>

<style scoped>
.exit {
  float: right;
  cursor: pointer;
  font-size: 1.25rem;
    transition: all 0.1s ease-in;
}

.exit:hover{
    transform:scale(1.3);
    color: #c0392b;
}
.login-box {
  width: 450px;
  box-shadow: 3px 3px 3px 3px rgba(197, 67, 67, 0.5);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background-color: rgba(10, 7, 7, 0.8);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  z-index: 99;
}

.login-box h1 {
  float: left;
  font-size: 1.5rem;
  border-bottom: 6px solid #c0392b;
  margin-top: 30px;
  margin-bottom: 10px;
  padding: 13px 0;
  transition: all 0.3s;
}

.login-box h1:hover {
  border-color: #38cff5;
  transform: scale(1.05);
}

.text-box {
  width: 100%;
  overflow: hidden;
  font-size: 20px;
  padding: 8px 0;
  margin: 8px 0;
  border-bottom: 1px solid #c0392b;
  transition: all 0.3s;
}

.text-box i {
  width: 26px;
  float: left;
  text-align: center;
}

.text-box input {
  border: none;
  outline: none;
  background: none;
  color: wheat;
  font-size: 1.25rem;
  width: 80%;
  float: left;
  margin: 0 10px;
}

.text-box:hover {
  border-color: #38cff5;
  transform: scale(1.05);
}

.login-box .btn {
  width: 100%;
  background: none;
  border: 2px solid #c0392b;
  color: white;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 5px;
  font-size: 1.25rem;
  cursor: pointer;
  margin: 10px 0;
  border-radius: 10px;
  display: block;
  text-align: center;
  transition: all 0.3s;
}

.login-box .btn:hover {
  border-color: #38cff5;
  transform: scale(1.05);
}

.login-box a {
  text-decoration: none;
  color: white;
  font-size: 1.1rem;
  display: block;
  margin-top: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in;
}

.login-box a:hover {
 color:#38cff5;
  transform: scale(1.2);
}

@media only screen and (max-width: 500px) {
  .login-box {
    width: 70%;
  }
  .text-box i {
    display: none;
  }
}
</style>