<template>
<div>
  <div class="section">
      <div class="container">
        <div class="pricing">
          <div class="pricing-header">
            F1<span class="main-color">i</span>x pricing
          </div>
          <div class="pricing-list">
            <div class="row">
              <div class="col-4 col-md-12 col-sm12">
                <div class="pricing-box">
                  <div class="pricing-box-header">
                    <div class="pricing-name">Basic</div>
                    <div class="pricing-price">Free</div>
                  </div>
                  <div class="pricing-box-content">
                    <p>Originals</p>
                    <p>Swich plans anytime</p>
                    <p><del>65+ top Live</del></p>
                    <p><del>TV Channels</del></p>
                  </div>
                  <div class="pricing-box-action" @click="changeStatus()">
                    <a href="#" class="btn btn-hover">
                      <span>Register Now</span>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-4 col-md-12 col-sm12">
                <div class="pricing-box hightlight">
                  <div class="pricing-box-header">
                    <div class="pricing-name">Premium</div>
                    <div class="pricing-price">$35.99<span>/month</span></div>
                  </div>
                  <div class="pricing-box-content">
                    <p>Originals</p>
                    <p>Swich plans anytime</p>
                    <p>65+ top Live</p>
                    <p><del>TV Channels</del></p>
                  </div>
                  <div class="pricing-box-action" @click="changeStatus()">
                    <a class="btn btn-hover">
                      <span>Register Now</span>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-4 col-md-12 col-sm12">
                <div class="pricing-box">
                  <div class="pricing-box-header">
                    <div class="pricing-name">VIP</div>
                    <div class="pricing-price">$65.99<span>/month</span></div>
                  </div>
                  <div class="pricing-box-content">
                    <p>Originals</p>
                    <p>Swich plans anytime</p>
                    <p>65+ top Live</p>
                    <p>TV Channels</p>
                  </div>
                  <div class="pricing-box-action" @click="changeStatus()">
                    <a class="btn btn-hover">
                      <span>Register Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <checkOut v-if="checkout" @checkOut="checkOut"/>
</div>
</template>

<script>
import checkOut from "../components/checkout.vue"

export default {
    name: `pricing`,
    components:{checkOut,},
    data() {
      return {
        checkout: false,
      }
    },
    methods: {
      show(){
        console.log();
      },
      changeStatus(){
        let data = {};
        data.id = this.$store.state.user.uid;
        if (data.id == ``){
          alert (`please login/register`)
        } else {
          this.checkout = true;
        }
      },
      checkOut() {
        this.checkout = false;
      }
    },
}
</script>

<style>

</style>