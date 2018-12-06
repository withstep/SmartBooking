<template>
  <div id="reserve">
    <p class="description center">예약 정보을 선택해 주세요.</p>

    <div class="row">
      <div class="col s12 datebox">{{ date + " " + time | moment("YYYY년 MM월 DD일 HH시 mm분") }}</div>
    </div>
    <div class="row">
      <div class="col s12">
        <form method="post" @submit.prevent="onSubmit">
          <input type="hidden" name="date" v-model="date">
          <input type="hidden" name="time" v-model="time">
          <div class="row">
            <div class="input-field col s12">
              <input
                type="text"
                ref="name"
                name="name"
                id="name"
                v-model="name"
                placeholder="이름"
                autofocus
              >
              <label for="name" class="active">이름</label>
            </div>
            <div class="input-field col s12">
              <input
                type="tel"
                ref="phone"
                name="phone"
                id="phone"
                v-model="phone"
                placeholder="휴대폰번호(숫자만 입력)"
              >
              <label for="phone" class="active">휴대폰번호</label>
            </div>
          </div>
          <div class="container">
            <div class="nextbtn">
              <button type="submit" class="btn" v-bind:disabled="isSubmit">예약</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- Preloader -->
    <div class="preloader-wrapper big" v-bind:class="{ active : isSubmit }">
      <div class="spinner-layer spinner-red-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../main";
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
    };
  },
  methods: {
    onSubmit: function() {
      var vm = this;
      if (this.name === "") {
        M.toast({ html: "이름을 입력해 주세요." });
        this.$refs.name.focus();
        return false;
      }
      if (this.phone === "") {
        M.toast({ html: "휴대폰번호를 입력해 주세요." });
        this.$refs.phone.focus();
        return false;
      }
      if (this.phone.replace(/\D/g, "") === "") {
        M.toast({ html: "전화번호 형식이 맞지 않습니다." });
        this.$refs.phone.focus();
        return false;
      }
      var datetime = this.$moment(this.date + " " + this.time).format(
        "YYYY년 MM월 DD일 HH시 mm분"
      );
      if (!confirm(datetime + " 예약을 접수 하시겠습니까?")) {
        return false;
      }
      this.isSubmit = true;
      db.collection("booking")
        .add({
          date: this.date.toString(),
          time: this.time.toString(),
          name: this.name,
          phone: this.phone.toString()
        })
        .then(function(docRef) {
          var datetime = vm
            .$moment(vm.date + " " + vm.time)
            .format("YYYY년 MM월 DD일 HH시 mm분");
          M.toast({
            html: datetime + " 예약접수 완료",
            completeCallback: function() {
              vm.isSubmit = false;
              vm.$router.push("/");
            }
          });
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
      return false;
    }
  }
};
</script>

<style scoped>
.preloader-wrapper {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
