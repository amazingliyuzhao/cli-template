<template>
<div class="loadingTop">
    <span class="loads"></span>
    <span class="load-text">{{msg}}</span>
</div>
</template>

<script>

export default {
  data () {
    return {
      msg: '正在加载...'
    }
  },
  methods: {
    initPage () {
    }
  },
  created () {
    this.initPage();
  }
}
</script>
<style lang="scss">
@import './loading.scss';
</style>