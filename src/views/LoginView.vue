<template>
    <h2>登入頁面</h2>
    <div class="container">
        <div class="row justify-content-center">
            <h1 class="h3 mb-3 font-weight-normal">
            請先登入
            </h1>
            <div class="col-8">
            <form id="form" class="form-signin" @submit.prevent="login">
                <div class="form-floating mb-3">
                <input v-model="user.username" type="email" class="form-control" id="username"
                    placeholder="name@example.com" required autofocus>
                <label for="username">Email address</label>
                </div>
                <div class="form-floating">
                <input v-model="user.password" type="password" class="form-control" id="password"
                    placeholder="Password" required>
                <label for="password">Password</label>
                </div>
                <button class="btn btn-lg btn-primary w-100 mt-3" type="button" @click="login">
                登入
                </button>
            </form>
            </div>
        </div>
        <p class="mt-5 mb-3 text-muted">
            &copy;  六角學院
        </p>
        </div>
</template>

<script>
import axios from 'axios'
console.log(import.meta.env)
const { VITE_URL } = import.meta.env
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      if (this.user.username !== '' && this.user.password !== '') {
        const url = `${VITE_URL}/v2/admin/signin`
        axios.post(url, this.user)
          .then((res) => {
            const { token, expired } = res.data
            console.log(token, expired)
            document.cookie = `hexToken=${token}; expires=${new Date(expired)};`
            this.$router.push('/admin/products')
          })
          .catch((err) => {
            console.log(err)
            alert('登入不正確')
          })
      } else {
        alert('請輸入帳號和密碼')
      }
    }
  },
  mounted () {
    console.log(this.$router, this.$route)
  }
}
</script>
