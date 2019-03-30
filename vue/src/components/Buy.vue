<template>
  <div class="box">
    <div class="back" @click="goHome">回到首页></div>
      <h3>商品列表</h3>
    <ul class="list">
      <li v-for="item in bookList" :key="item.id">
        <div class="name">{{item.book_name}}</div>
        <div class="price">￥{{item.price}}</div>
        <div class="add" @click="addGoods(item.id)">加入购物车</div>
      </li>
    </ul>
    <h3>购物车</h3>
    <ul class="cart" v-if="cartList.length>0">
      <li>
        <div class="name">书名</div>
        <div class="price">单价</div>
        <div class="num">数量</div>
        <div class="option">操作</div>
      </li>
      <li v-for="item in cartList" :key="item.id">
        <div class="name">{{item.name}}</div>
        <div class="price">￥{{item.price}}</div>
        <div class="num">{{item.num}}</div>
        <div class="option">
          <p @click="addGoods(item.id)">+</p>
          <p @click="deleteGoods(item.id)">-</p>
        </div>
      </li>
    </ul>
    <div class="tips" v-else>暂无商品</div>

    <h3>结算台</h3>
    <div class="total-box">
      <div>数量：{{totalNum}}</div>
      <div>总价：{{totalPrice}}</div>
      <div @click='commitOrder()'>结算</div>
    </div>
  </div>
</template>
<style scoped>
.back{
  padding: 10px;
}
ul {
  padding: 0 10px;
}
p {
  margin: 0;
  transform: scale(1.5);
}
li {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #e1e1e1;
}
h3 {
  padding: 0 10px;
}
.name {
  flex: 2;
}
.price {
  flex: 1;
}
.cart {
  margin-top: 20px;
}
.num {
  width: 40px;
}
.tips {
  text-align: center;
  font-size: 16px;
  line-height: 50px;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
}
.option {
  display: flex;
  justify-content: space-around;
  width: 60px;
}
.total-box {
  display: flex;
  padding: 10px;
  justify-content: space-between;
}
</style>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      bookList: "dataList",
      cartList: "cartList",
      totalPrice: "totalCount",
      totalNum: "totalNum"
    })
  },
  methods: {
    ...mapActions(["getList"]),
    ...mapMutations(["addGoods", "deleteGoods",'clearCart']),
    commitOrder(){
        alert('结算成功')
        this.clearCart()
        this.$router.push({
            name:'index'
        })
    },
     goHome() {
      this.$router.push({
        name: "index"
      });
    }
  },
  mounted() {
    this.getList();
  }
};
</script>

