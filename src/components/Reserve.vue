<template>
  <div id="reserve">
    <form method="post" @submit.prevent="onSubmit" >
    <input type="hidden" name="date" v-model="date">
    <input type="hidden" name="time" v-model="time">
    <div class="row">
      <div class="input-field col s12">
        <input type="text" ref="name" name="name" id="name" v-model="name" placeholder="이름" autofocus>
        <label for="name" class="active">이름</label>
      </div>
      <div class="input-field col s12">
        <input type="tel" ref="phone" name="phone" id="phone" v-model="phone" placeholder="휴대폰번호(숫자만 입력)">
        <label for="phone" class="active">휴대폰번호</label>
      </div>
    </div>
    <div class="container">
      <div class="nextbtn">
        <button type="submit" class="btn">예약</button>
      </div>
    </div>
    </form>
    <!-- Preloader -->
    <div class="preloader-wrapper big" v-bind:class="{ active : isSubmit }">
      <div class="spinner-layer spinner-red-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
    <!-- Modal Structure -->
    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../main"
export default {
  name: "Reserve",
  computed: {
    date: function() {
      return this.$route.query.date;
    },
    time: function() {
      return this.$route.query.time;
    }
  },
  data: function() {
    return {
      name: "",
      phone: "",
      isSubmit: false
    }
  },
  methods: {
    onSubmit: function() {
      var vm = this;
      if (this.name === "") {
        M.toast({html: "이름을 입력해 주세요."});
        this.$refs.name.focus();
        return false;
      }
      if (this.phone === "") {
        M.toast({html: "휴대폰번호를 입력해 주세요."});
        this.$refs.phone.focus();
        return false;
      }
      if (this.phone.replace(/\D/g, "") === "") {
        M.toast({html: "전화번호 형식이 맞지 않습니다."});
        this.$refs.phone.focus();
        return false;
      }
      this.isSubmit = true;
      db.collection("booking").add({date: this.date.toString(), time: this.time.toString(), name: this.name, phone: this.phone.toString()}).then(function(docRef) {
        // console.log("Document written with ID: ", docRef.id);
        vm.isSubmit = false;
        var elem = document.querySelectorAll(".modal");
        var instance = M.Modal.getInstance(elem);
        console.log(instance);
      }).catch(function(error) {
        console.error("Error adding document: ", error);
      });
      return false;
    }
  }
}
</script>

<style scoped>
#reserve {
  margin-top: 50px;
}
.preloader-wrapper {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
<style>
div.nextbtn {
  position: fixed;
  bottom: 30px;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
}
</style>
