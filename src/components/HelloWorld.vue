<template>
  <div class="hello">
    <p class="description center">예약 날짜를 선택해 주세요.</p>
    <div class="container">
      <FunctionalCalendar
        v-model="calendarData"
        :configs="calendarConfigs"
        v-on:choseDay="clickDay"
      ></FunctionalCalendar>
    </div>
    <div class="container">
      <div class="nextbtn">
        <button type="button" class="btn" @click="nextStep">다음</button>
      </div>
    </div>
  </div>
</template>

<script>
import FunctionalCalendar from "vue-functional-calendar";
export default {
  name: "HelloWorld",
  components: {
    FunctionalCalendar
  },
  data() {
    return {
      calendarData: {},
      calendarConfigs: {
        sundayStart: true,
        isDatePicker: true,
        isDateRange: false,
        isMultiple: false,
        calendarsCount: 1,
        changeMonthFunction: false,
        changeYearFunction: false,
        dayNames: ["일", "월", "화", "수", "목", "금", "토"],
        monthNames: [
          "1월",
          "2월",
          "3월",
          "4월",
          "5월",
          "6월",
          "7월",
          "8월",
          "9월",
          "10월",
          "11월",
          "12월"
        ],
        isModal: false,
        applyStylesheet: true
      },
      selectedDate: this.$moment(new Date(), "YYYY/MM/DD")
    };
  },
  methods: {
    clickDay: function(data) {
      this.selectedDate = data;
    },
    nextStep: function() {
      var date = this.$moment(this.selectedDate, "YYYY/MM/DD").format(
        "YYYY-MM-DD"
      );
      if (
        confirm(
          this.$moment(date).format("YYYY년 MM월 DD일") +
            " 예약을 선택하셨습니다.\n다음으로 계속 진행하시겠습니까?"
        )
      ) {
        this.$router.push({
          name: "SelectedHour",
          query: {
            date: date
          }
        });
      }
    }
  }
};
</script>

<style scoped>
</style>

<style lang="css">
.styles-conditional-class.main-container {
  margin: 0 !important;
}
.styles-conditional-class .functional-calendar {
  min-width: auto !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
.styles-conditional-class .functional-calendar .calendar-for {
  max-width: auto !important;
  min-width: auto !important;
}
</style>
