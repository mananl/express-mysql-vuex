<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
}
html body {
    margin: 0;
    padding: 0;
}
input,textarea{
    outline: none;
    border: 1px solid #e1e1e1;
    padding: 5px;
}
.back{
  color: cornflowerblue;
}
</style>
