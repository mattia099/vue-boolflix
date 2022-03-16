<template>
  <header>
    <h1>Boolflix</h1>
    <div class="input-container">
      <input type="text" v-model="search">
      <button @click="setSearch">Search</button>   
    </div>        
  </header>
</template>

<script>

import state from '../store.js';
import { searchFilm } from '../store.js';

export default {
  data() {
    return{
      search: '',
    }
  }, 
  
  methods: {
    setSearch(){
      state.search = this.search;
      searchFilm();
    }
  }
}
</script>

<style lang="scss" scoped>

</style>