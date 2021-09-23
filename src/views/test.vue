<template>
    <div class="container">
        <h1>test 页面</h1>
        <div><img src="../imgs/test.jpg"></div>
        <div>{{message}}</div>
    </div>
</template>

<script>
import '@/styles/test.scss'
import '@/utils/request.js'
export default {
  name: "Test",
  data() {
      return {
          message: "Test page"
      }
  }
}
</script>

