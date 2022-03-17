<template>
  <header>
    <h1>Boolflix</h1>
    <div class="input-container">
      <input type="text" v-model="search" @keypress.enter="setSearch">
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
  header{
    background: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px;
    
    h1{
      color: red;
      
    }
    .input-container{
      display: flex;
      flex-wrap: nowrap;
      input{
        font-size: 16px;
        padding: 5px;
        min-width: 100px;
      }
      button{
        font-size: 16px;
        padding: 5px;
        font-weight: 600;
      }
    }
  }

</style>