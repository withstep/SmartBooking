<template>
  <div class='hello'>
    <FunctionalCalendar v-model="calendarData"
    :configs="calendarConfigs"
    v-on:choseDay="clickDay"
    ></FunctionalCalendar>
  </div>
</template>

<script>
import FunctionalCalendar from 'vue-functional-calendar'
export default {
  name: 'HelloWorld',
  components: {
    FunctionalCalendar
  },
  data () {
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
        // markDate: ['2018/10/20', '2018/10/28', '2018/10/16'],
        // markDateMore: [{date: '2018/11/20', className: 'mark1'}, {date: '2018/11/21', className: 'mark2'}],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        isModal: false,
        applyStylesheet: true
      }
    }
  },
  methods: {
    clickDay: function (data) {
      this.$router.push({name: 'SelectedTime', query: {date: data}})
    }
  }
}
</script>

<style>
.styles-conditional-class.main-container {
  margin: 0 !important;
}
.styles-conditional-class .functional-calendar {
  min-width: none !important;
}
.styles-conditional-class .functional-calendar .calendar-for {
  max-width: none !important;
  min-width: none !important;
}
</style>
