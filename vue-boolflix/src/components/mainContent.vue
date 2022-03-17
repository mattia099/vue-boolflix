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
    }
    .card-wrapper{
      background-color: #141414;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap:20px;
      padding-top: 40px;
    }
  }
</style>
