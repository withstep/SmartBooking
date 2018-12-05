<template>
  <div class="hello">
    <section class="section">
      <FunctionalCalendar
        v-model="calendarData"
        :configs="calendarConfigs"
        v-on:choseDay="clickDay"
      ></FunctionalCalendar>
    </section>
    <div class="container">
      <div class="nextbtn">
        <button type="button" class="waves-effect waves-light btn" @click="nextStep">다음</button>
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
        sundayStart: false,
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
      this.$router.push({
        name: "SelectedTime",
        query: {
          date: this.$moment(this.selectedDate, "YYYY/MM/DD").format(
            "YYYY-MM-DD"
          )
        }
      });
    }
  }
};
</script>

<style scoped>
section.section {
  display: flex;
  display: -webkit-flex;
  display: -ms-flex;
  align-content: center;
  justify-content: center;
  width: 100%;
}
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
div.nextbtn {
  position: fixed;
  bottom: 30px;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
}
</style>
