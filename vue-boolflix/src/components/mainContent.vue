<template>
  <div class="">
    <h2>Film</h2>
    <div class="card-wrapper">
      <cardItem  v-for="film in getFilms" :key="film.id" :element="film" />
    </div>

    <h2>Serie TV</h2>
    <div class="card-wrapper">
      <cardItem  v-for="serie in getSeries" :key="serie.id" :element="serie" />
    </div>
  </div>
</template>

<script>

import state from '../store.js' 
import cardItem from './cardItem.vue'
export default {
  components:{
    cardItem
  },
  computed:{
    getFilms(){
      return state.findedFilms;
    },

    getSeries(){
      return state.findedSeries;
    }
  },
    
}

</script>

<style lang="scss" scoped>
  div{
    background-color: #141414;
    h2{
      color: white;
      text-align: center;
      padding-top: 40px;
      text-transform: uppercase;
    }
    .card-wrapper{
      background-color: #141414;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(342px, auto));
      gap:40px;
      padding-top: 40px;
      max-width: 1500px;
      margin: 0 auto;
    }
  }
</style>
