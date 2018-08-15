<template>
  <div id="app">
    <router-view>
      <template>
        <IndexPage v-if="isLogin" />
        <Login v-else/>
      </template>
    </router-view>
  </div>
</template>

<script>
  import api from '@/api'
  import Fetch from '@/utils/fetch';
  import Login from "@/components/login";
  import IndexPage from "@/components/indexpage"
  export default {
    name: 'App',
    /* data() {
      return {
        isLogin: false
      }
    }, */
    components: {
      Login,
      IndexPage
    },
    computed: {
      isLogin() {
        return this.$store.state.isLogin;
      }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }

  html,
  body,
  #app {
    width: 100%;
    height: 100%;
  }
</style>