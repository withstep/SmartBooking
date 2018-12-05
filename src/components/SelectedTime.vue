<template>
  <div id="selected-time">
    <div class="container">
      <div class="row">
        <div class="col s12 datebox">{{ date }}</div>
        <div class="col s12">
          <vue-clock-picker
            mode="24"
            :defaultHour="defaultHour"
            :defaultMinute="defaultMinute"
            :onHourChange="hourChageHandler"
            :onMinuteChange="minuteChangeHandler"
            :defaultFocused="true"
          ></vue-clock-picker>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="booking-count">{{ bookingCount }}명</div>
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
  name: "SelectedTime",
  components: {
    VueClockPicker
  },
  computed: {
    date: function() {
      return this.$route.query.date;
    }
  },
  data() {
    return {
      defaultHour: new Date().getHours(),
      defaultMinute: 0,
      timeSelected: false,
      selectHour: new Date().getHours(),
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
      })
    },
    hourChageHandler: function(hour) {
      this.selectHour = (hour < 10 ? "0" + hour : hour);
      this.getBookingCount();
    },
    minuteChangeHandler: function(minute) {
      this.selectMinute = (minute < 10 ? "0" + minute : minute);
      this.getBookingCount();
    },
    nextStep: function() {
      var time = [this.selectHour, this.selectMinute].join(":");
      this.$router.push({name: "Reserve", query: {date: this.date, time: time}})
    }
  },
  beforeMount: function() {
    this.selectHour = (this.selectHour < 10 ? "0" + this.selectHour : this.selectHour);
    this.getBookingCount();
  }
};
</script>

<style lang="css" scoped>
.datebox {
  text-align: center;
  margin-top: 10px;
  font-size: 1.6em;
}
div.booking-count {
  margin-top: 425px;
  text-align: center;
  font-size: 1.5em;
}
</style>
<style>
.time-picker-preview {
  display: none;
}
.interval-container {
  text-align: center;
}
.outside-click-container {
  left: 0;
  right: 0;
  margin: auto;
}
.time-picker-modal-container {
  width: auto !important;
}
div.nextbtn {
  position: fixed;
  bottom: 30px;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
}
</style>
