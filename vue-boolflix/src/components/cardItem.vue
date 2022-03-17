<template>
  <div class="card">
    <img v-if="element.poster_path" :src="`https://image.tmdb.org/t/p/w342${element.poster_path}`" alt="">
    <img v-else src="https://image.tmdb.org/t/p/w342/t5mbrd79o89pYB8OQ4QPFNkIRPm.jpg" alt="segnaposto">
    <div class="info">
      <h4>Title: {{title}}</h4>
      <h4>Original title: {{originalTitle}}</h4>
      <p>{{ getFlag(element.original_language) }}</p>
      <p><i v-for="n in 5" :key="n" :class=" n <= vote ? 'fa-solid' : 'fa-regular'"  class="fa-star"></i></p>
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
    },
  },

  computed : {
    title(){
      return this.element.name || this.element.title;
    },

    originalTitle(){
      return this.element.original_name || this.element.original_title;
    },

    vote(){
      return Math.ceil( this.element.vote_average/2 );
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
    background: rgba(0, 0, 0, 0.8);
    padding: 50px 30px;
    
    h4,p{
      padding-bottom: 5px;
    }
  }
  }
  
</style>