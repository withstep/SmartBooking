<template>
  <div id="selected-time">
    <p class="description center">예약 분을 선택해 주세요.</p>
    <div class="container">
      <div class="row">
        <div class="col s12 datebox">{{ date + " " + selectHour | moment("YYYY년 MM월 DD일 HH시") }}</div>
        <div class="col s12">
          <vue-clock-picker
            mode="24"
            :defaultStep="1"
            :defaultHour="defaultHour"
            :defaultMinute="defaultMinute"
            :defaultFocused="true"
            :count="bookingCount"
            :onMinuteChange="minuteChangeHandler"
          ></vue-clock-picker>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="nextbtn">
        <button type="button" class="btn" @click="nextStep">다음</button>
      </div>
    </div>
  </div>
</template>

<script>
import VueClockPicker from "vue-clock-picker";
import { db } from "../main";
export default {
  name: "SelectedMinute",
  components: {
    VueClockPicker
  },
  computed: {
    date: function() {
      return this.$route.query.date;
    },
    defaultHour: function() {
      return parseInt(this.$route.query.hour);
    },
    selectHour: function() {
      return this.$route.query.hour;
    }
  },
  data() {
    return {
      defaultMinute: 0,
      timeSelected: false,
      selectMinute: "00",
      bookingMax: 5,
      bookingCount: 0
    };
  },
  methods: {
    getBookingCount: function() {
      var time = [this.selectHour, this.selectMinute].join(":");
      var vm = this;
      db.collection("booking")
        .where("date", "==", this.date)
        .where("time", "==", time)
        .get()
        .then(function(querySnapshot) {
          vm.bookingCount = querySnapshot.size;
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
    },
    hourChageHandler: function(hour) {
      this.selectHour = hour < 10 ? "0" + hour : hour;
      this.getBookingCount();
    },
    minuteChangeHandler: function(minute) {
      this.selectMinute = minute < 10 ? "0" + minute : minute;
      this.getBookingCount();
    },
    nextStep: function() {
      if (this.bookingCount >= this.bookingMax) {
        M.toast({
          html:
            "선택하신 시간에는 " +
            this.bookingMax +
            "명이상 예약 하실 수 없습니다."
        });
      } else {
        var time = [this.selectHour, this.selectMinute].join(":");
        var datetime = this.$moment(this.date + " " + time).format(
          "YYYY년 MM월 DD일 HH시 mm분"
        );
        if (
          confirm(
            datetime + " 예약을 선택했습니다.\n다음으로 계속 진행하시겠습니까?"
          )
        ) {
          this.$router.push({
            name: "Reserve",
            query: { date: this.date, time: time }
          });
        }
      }
    }
  },
  created: function() {
    this.getBookingCount();
  }
};
</script>

<style lang="css" scoped>
div.booking-count {
  margin-top: 425px;
  text-align: center;
  font-size: 1.5em;
}
</style>
