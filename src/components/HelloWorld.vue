<template>
  <div class="hello">
    <h1></h1>
    <h2>脚手架测试</h2>
    <ul>
      <li>
        <router-link to="/testComponents">组件测试</router-link>
      </li>
      <li>
       <router-link to="/testElement">element测试</router-link>
      </li>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
