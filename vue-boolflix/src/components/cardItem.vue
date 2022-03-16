<template>
  <ul>
    <li>
      {{element.original_title}} - {{element.title}} - {{element.original_language}} - {{element.vote_average}}
    </li>
  </ul>
</template>

<script>
export default {
  props:{
    element: Object,
  }
}
</script>

<style lang="scss" scoped>

</style>