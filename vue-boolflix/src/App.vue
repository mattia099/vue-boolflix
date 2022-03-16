<template>
  <div id="app">
    <mainHeader />
    <mainContent />
  </div>
</template>

<script>

import mainHeader from './components/mainHeader.vue'
import mainContent from './components/mainContent.vue'


export default {
  name: 'App',
  components: {
    mainHeader,
    mainContent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
