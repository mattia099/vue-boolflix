<template>
  <div class="card-wrapper">
    <cardItem class="film" v-for="film in getFilms" :key="film.id" :element="film" />
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
      return state.series;
    }
  },
    
}

</script>

<style lang="scss" scoped>
  .card-wrapper{
    background-color: #141414;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:20px;
    padding-top: 40px;
}
</style>
