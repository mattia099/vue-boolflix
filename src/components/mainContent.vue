<template>
  <div class="content">
    <input type="text" v-model="search" id="">
    <button @click="searchFilm">Search</button>
    <ul>
      <li v-for="element in findedFilms" :key="element.id">
        {{element.original_title}} - {{element.title}} - {{element.original_language}} - {{element.vote_average}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'mainContent',
  data : function(){
    return {
      search : '',
      findedFilms : []
    }
  },
  props: {
  },
  methods : {
    searchFilm(){
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&', {
        params: {
          query : this.search
        }
      })
      .then( res => {
        this.findedFilms = res.data.results;
        console.log(this.findedFilms)
      })
      
    }
  },
  mounted(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
