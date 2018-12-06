<template>
  <div id="selected-time">
    <p class="description center">예약 시간을 선택해 주세요.</p>
    <div class="container">
      <div class="row">
        <div class="col s12 datebox">{{ date | moment("YYYY년 MM월 DD일") }}</div>
        <div class="col s12">
          <vue-clock-picker
            mode="24"
            :defaultStep="0"
            :defaultHour="defaultHour"
            :defaultMinute="defaultMinute"
            :onHourChange="hourChageHandler"
            :defaultFocused="true"
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
      selectMinute: "00"
    };
  },
  methods: {
    hourChageHandler: function(hour) {
      this.selectHour = hour < 10 ? "0" + hour : hour;
    },
    nextStep: function() {
      var datetime = this.$moment(this.date + " " + this.selectHour).format(
        "YYYY년 MM월 DD일 HH시"
      );
      if (
        confirm(
          datetime + " 예약을 하시겠습니까?\n다음으로 계속 진행하시겠습니까?"
        )
      ) {
        this.$router.push({
          name: "SelectedMinute",
          query: { date: this.date, hour: this.selectHour }
        });
      }
    }
  },
  beforeMount: function() {
    this.selectHour =
      this.selectHour < 10 ? "0" + this.selectHour : this.selectHour;
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
