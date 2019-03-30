<template>
  <ul>
    <li @click="goPage('buy')" class="buy-book">买书</li>
    <li @click="goPage('add')" class="add-book">加书</li>
    <li @click="goPage('list')" class="list-book">看书</li>
  </ul>
</template>
<style scoped>
ul {
  padding: 10px;
  color: burlywood;
  font-size: 16px;
}
li {
  line-height: 30px;
  border-bottom: 1px solid #e1e1e1;
}
</style>
<script>
export default {
  methods: {
    /**
     * 跳转
     */
    goPage(url) {
      this.$router.push({
        name: url
      });
    },
  }
};
</script>
