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

<style lang="scss">
@import '~@fortawesome/fontawesome-free/css/all.css';

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

img{
  display: block;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
}
</style>
