import Vue from 'vue';
import axios from 'axios';

const state = Vue.observable({
  search : '',
  findedFilms : [],
  findedSeries : [],
});

export default state;

export function searchFilm(){
  axios.get('https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&', {
    params: {
      query : state.search
    }
  })
  .then( res => {
    state.findedFilms = res.data.results;
    console.log(state.findedFilms)
  })
  
  axios.get('https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&', {
    params : {
    query : state.search
    }
  })
  .then( res => {
    state.findedSeries = res.data.results;
    console.log(state.findedSeries)
  })

}