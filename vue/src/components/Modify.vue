<template>
  <div class="box">
    <div class="back" @click="goHome">回到首页></div>
    <div>
      <span>书名：</span>
      <input maxlength="50" v-model="bookName" type="text">
    </div>
    <div>
      <span>价格：</span>
      <input v-model="price" type="number">
    </div>
    <div>
      <span>作者：</span>
      <input v-model="author" type="text">
    </div>
    <div>
      <span>简介：</span>
      <textarea v-model="description" placeholder="请输入简介"></textarea>
    </div>
    <div @click="modifyBook">修改</div>
  </div>
</template>
<style scoped>
.box {
  padding: 10px;
}
.box div:last-child {
  border: 1px solid #e1e1e1;
  justify-content: center;
  margin: auto;
  line-height: 40px;
  background-color: darkturquoise;
  color: #fff;
  width: 80%;
  border-radius: 3px;
}
.box div {
  margin-bottom: 10px;
  display: flex;
}
textarea {
  width: 310px;
  height: 200px;
}
</style>

<script>
import { updateBook } from "../service/service.js";
export default {
  data() {
    return {
      bookName: JSON.parse(sessionStorage.getItem('bookInfo')).book_name||'',
      price: JSON.parse(sessionStorage.getItem('bookInfo')).price||'',
      author:JSON.parse(sessionStorage.getItem('bookInfo')).author||'',
      description: JSON.parse(sessionStorage.getItem('bookInfo')).description||''
    };
  },
  methods: {
    modifyBook() {
      let params = {
        bookName: this.bookName,
        price: this.price,
        description: this.description,
        author: this.author,
        id:JSON.parse(sessionStorage.getItem('bookInfo')).id
      };
      let _this = this;
      updateBook(
        params,
        res => {
          console.log(res);
          if (res.data.code === 0) {
            this.bookName = "";
            this.price = "";
            this.description = "";
            this.author = "";
            alert(res.data.msg);
            this.$router.replace({
                name:'list'
            })
          } else {
            alert(res.data.msg);
          }
        },
        err => {
          console.log(err);
        }
      );
    },
    goHome() {
      this.$router.push({
        name: "index"
      });
    }
  }
};
</script>

