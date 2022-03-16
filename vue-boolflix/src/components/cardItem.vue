<template>
  <div class="card">
    <img :src="`https://image.tmdb.org/t/p/w342${element.poster_path}`" alt="">
    <div class="info">
      <h4>Title: {{element.title}}</h4>
      <h4>Original title: {{element.original_title}}</h4>
      <p>{{ getFlag(element.original_language) }}</p>
      <p>{{element.vote_average}}</p>
      <p>Overview: {{element.overview}}</p>
    </div>
  </div> 
</template>



<script>
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
export default {
  props:{
    element: Object,
  },
  methods:{
    getFlag(unicode){
      return getUnicodeFlagIcon(unicode);
    }
  }
}
</script>

<style lang="scss" scoped>
  .card{
    margin:0 auto;
    color: white;
    position: relative;
    &:hover .info{
      display: block;
    }
    .info{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: black;
    padding: 50px 30px;
    h4,p{
      padding-bottom: 5px;
    }
  }
  }
  
</style>