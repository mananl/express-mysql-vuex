<template>
  <div class="box">
    <div class="back" @click="goHome">回到首页></div>
    <div class="content" v-for="item in bookList" :key="item.id" @click='goEdit(item)'>
      <div class="name">{{item.book_name}}</div>
      <div class="sub-info">
        <p>作者：{{item.author||'--'}}</p>
        <p>价格：￥{{item.price}}</p>
      </div>
      <div v-html="item.description||'暂无'"></div>
    </div>
  </div>
</template>
<style scoped>
.box{
  padding-left: 16px;
  
}
.back{
  line-height: 30px;
  /* border-bottom: 1px solid #e1e1e1; */
}
.content{ 
  padding: 10px 10px 10px 0;
  border-bottom: 1px solid #e1e1e1;
}
.content div:last-child{
  color: darkgray;
}
.name{
  font-size: 16px;
  font-weight: bold;
  color: #222;
}
.sub-info{
  display: flex;
  justify-content: space-between;
}
</style>

<script>
import { getBookList } from "../service/service.js";
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      bookList: []
    };
  },
  methods: {
    goHome() {
      this.$router.push({
        name: "index"
      });
    },
    getList() {
      getBookList(
        res => {
          this.bookList = res.data.list || [];
          console.log(res);
        },
        function(err) {
          console.log(err);
        }
      );
    },
    goEdit(obj){
      sessionStorage.setItem('bookInfo',JSON.stringify(obj))
      this.$router.push({
        name:'update'
      })
    }
  },
  mounted() {
    this.getList();
  }
};
</script>