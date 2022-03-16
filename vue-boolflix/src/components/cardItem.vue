<template>
  <div class="card">
    <img :src="`https://image.tmdb.org/t/p/w342${element.poster_path}`" alt="">
    <h3>{{element.original_title}}</h3>
    <h4>{{element.title}}</h4>
    {{element.original_language}} - {{element.vote_average}}
  </div> 
</template>

<script>
export default {
  props:{
    element: Object,
  }
}
</script>

<style lang="scss" scoped>
  .card{
    margin:0 auto;
    color: white;
    
  }
</style>