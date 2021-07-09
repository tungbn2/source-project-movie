<template>
  <div>
      <div class="login-box">
          <span class="exit" @click="close"><i class='bx bx-x-circle' ></i></span>
      <h2>Checkout Form</h2>

      <div class="text-box">
        <i class="bx bxs-user"></i>
        <input
          type="email"
          name=""
          id="input"
          class="form-control"
          value=""
          required="required"
          placeholder="Name on Card"
        />
      </div>

      <div class="text-box">
        <i class='bx bx-money' ></i>
        <input
          type="number"
          name=""
          id="input"
          class="form-control"
          value=""
          required="required"
          placeholder="Credit card number"
        />
      </div>

      <input type="button" class="btn" value="Checkout" @click="updateAccount" />
    </div>
  </div>
</template>

<script>
export default {
    name: `checkOut`,

    methods: {
        
    updateAccount (){
        let data = {};
        data.id = this.$store.state.user.uid;
        data.account = `premium`;
        this.$store.dispatch (`changeAccount`, data )
        this.$emit(`checkOut`)
     },
     close(){
         this.$emit(`checkOut`)
     },
     show(){
       console.log(this.$store.state.user.uid);
     },
    },
}
</script>

<style>

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
    width: 500px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    background-color: rgba(0,0,0,0.8);
    border-radius: 10px;
    padding:20px;
    text-align: center;
    z-index: 99;
}

.login-box h2 {
    float: left;
    font-size: 1.5rem;
    border-bottom: 6px solid #c0392b;
    margin-top: 50px;
    padding: 0;
    transition: all 0.3s;
}

.login-box h2:hover {
    border-color: #38cff5;
    transform: scale(1.05);
}

.text-box {
    width: 100%;
    overflow: hidden;
    font-size: 20px;
    padding: 8px 0;
    margin: 0;
    border-bottom: 1px solid #c0392b;
    transition: all 0.3s;
}

.text-box i {
    width: 26px;
    float:left;
    text-align: center;
}

.text-box input {
    border: none;
    outline: none;
    background:none;
    color: wheat;
    font-size: 1.25rem;
    width: 80%;
    float: left;
    margin: 0 20px;
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
    padding: 5px;
    font-size: 1.25rem;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 10px;
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
    display:block;
    margin-top: 10px;
    margin-bottom: 20px;
    cursor: pointer;
    transition: all 0.3s ease-in;
}

.login-box a:hover {
    color: #c0392b;
    padding: 5px;
    border: 1px solid #c0392b;
    border-radius: 10px;
    transform: translateY(-2px);
}

@media only screen and (max-width: 500px) {
    .login-box {
        width: 70%;
    }
    .text-box i{
        display: none;
    }
}

</style>