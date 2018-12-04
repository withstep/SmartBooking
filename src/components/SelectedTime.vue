<template>
  <div id="selected-time">
    <vue-clock-picker
    mode="24" :defaultHour="defaultHour"
    :defaultMinute="defaultMinute"
    :onTimeChange="timeChangeHandler"
    >
    </vue-clock-picker>
  </div>
</template>

<script>
import VueClockPicker from 'vue-clock-picker'
export default {
  name: 'SelectedTime',
  components: {
    VueClockPicker
  },
  computed: {
    date: function () {
      return this.$route.query.date
    }
  },
  data () {
    return {
      defaultHour: new Date().getHours(),
      defaultMinute: new Date().getMinutes()
    }
  },
  methods: {
    timeChangeHandler () {
      console.log('time handler')
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
}
#app {
  display: flex;
  margin-top: 50px;
  justify-content: center;
}
</style>
