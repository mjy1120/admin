<template>
  <form action="">
    <label for="">
      用户名：
      <input type="text" placeholder="请输入用户名" v-model="name">
    </label>
    <label for="">
      密码：
      <input type="text" placeholder="请输入密码" v-model="password">
    </label>
    <button @click="login">登录</button>
  </form>
</template>

<script>
  import store from "@/store"
  import api from "@/api"
  export default {
    data() {
      return {
        name: '',
        password: ''
      }
    },
    methods: {
      login() {
        api.user.login({
          name: this.name,
          password: this.password
        })
          .then((data) => {
            console.log(data);
            this.$router.replace("/index")
          }).catch((e) => {
            console.log(e.message)
          })
      }
    }
  }
</script>

<style scoped>
  form {
    width: 500px;
    height: 200px;
    border: 1px solid #ccc;
    margin: 100px auto;
    text-align: center;
    background: linear-gradient(rgb(214, 235, 108), rgb(220, 230, 134));
    color: #666;
    border-radius: 50px;
  }

  label {
    display: block;
    margin-top: 30px;
  }

  label input {
    height: 30px;
    background: linear-gradient(rgb(221, 220, 134), rgb(223, 241, 117));
    border: none;
  }

  button {
    width: 45%;
    height: 40px;
    margin: 20px auto 0;
    background: linear-gradient(rgb(208, 219, 107), rgb(228, 238, 83));
    border: none;
  }
</style>