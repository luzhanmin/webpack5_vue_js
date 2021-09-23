<template>
    <div class="container">
        <h1>home 页面</h1>
        <div><img src="../imgs/home.jpg"></div>
        <div>{{message}}</div>
    </div>
</template>

<script>
import '@/styles/home.scss'
export default {
  name: "Home",
  data() {
      return {
          message: "Home page"
      }
  }
}
</script>

