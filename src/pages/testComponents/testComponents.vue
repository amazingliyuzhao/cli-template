<template>
<div>
  按钮组件
  <br>
  <br>
  <my-button class="mb20" type="light" size="normal" :disabled="isDisabled" @click="handleClick('light')">按钮</my-button>
  <my-button class="mb20" type="primary" size="normal" :disabled="isDisabled" @click="handleClick('light')">按钮</my-button>
  <my-button class="mb20" type="plain" size="normal" :disabled="isDisabled" @click="handleClick('light')">按钮</my-button>
  <my-button class="mb20" type="light" size="normal" :disabled="Disabled" @click="handleClick('light')">按钮</my-button>
  <br>
  <my-button class="mb20" type="light" size="large" :disabled="isDisabled" @click="handleClick('light')">按钮</my-button>
  <my-button class="mb20" type="primary" size="large" :disabled="isDisabled" @click="handleClick('light')">按钮</my-button>
  <my-button class="mb20" type="plain" size="large" :disabled="isDisabled" @click="handleClick('light')">按钮</my-button>
  <my-button class="mb20" type="light" size="large" :disabled="Disabled" @click="handleClick('light')">按钮</my-button>
  <br>
  <br>
  <br>
  loading组件
  <loading></loading>
    <!-- <confirm v-if="confirmFlag" :config="confirmConfig"></confirm> -->
    <!-- <testLoadig></testLoadig> -->

</div>
</template>
<script>
import loading from '../../components/loading/loading';
import myButton from '../../components/button/button';
import testLoadig from '../../components/testLoading/testLoading'
export default{
    data() {
        return {
          isDisabled:false,
          Disabled:true
        }
    },
    components:{
        loading,
        myButton
        // testLoadig
    },
    methods: {
handleClick(){
  console.log(1)
}
    },
    mounted () {

    }
}
</script>