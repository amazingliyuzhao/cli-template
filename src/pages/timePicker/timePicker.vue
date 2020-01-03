
<template>
  <div>
    <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions"
      value-format="timestamp"
      @change="changeBtn"
      >
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">后面的</span>
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptionsWeekday"
      value-format="timestamp"
      >
    </el-date-picker>
  </div>

</div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions: {
          disabledDate(time) {
            var now = new Date(time)
            var day = now.getDay();
            let isDayOne = day == 1?false:true
            return isDayOne
          },
          firstDayOfWeek:1,
        },
        pickerOptionsWeekday:{
          firstDayOfWeek:1,
          disabledDate(time) {
            return true
          },
        },
        value1: '',
        value2: '',
      };
    },
    methods: {
      changeBtn(time){
        let after = new Date(time);
        this.value2 = after.setDate(after.getDate()+27)
        this.value2 = new Date(this.value2).getTime()
      }
    },
  };
</script>