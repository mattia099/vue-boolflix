<template>
  <div class="card-wrapper">
    <cardItem v-for="film in getFilms" :key="film.id" :element="film" />
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

</style>
