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
      <div class="nextbtn">
        <button type="button" class="waves-effect waves-light btn" @click="nextStep">다음</button>
      </div>
    </div>
  </div>
</template>

<script>
import VueClockPicker from "vue-clock-picker";
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
      defaultMinute: new Date().getMinutes(),
      timeSelected: false,
      hour: new Date().getHours(),
      minute: new Date().getMinutes()
    };
  },
  methods: {
    hourChageHandler: function(hour) {
      this.hour = hour;
    },
    minuteChangeHandler: function(minute) {
      this.minute = minute;
    },
    nextStep: function() {}
  }
};
</script>

<style lang="css" scoped>
.datebox {
  text-align: center;
  margin-top: 10px;
  font-size: 1.6em;
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
</style>
