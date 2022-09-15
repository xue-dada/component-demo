<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Movie v-for="movie in moives" :key="movie.id" :title="movie.title" :rating="movie.rating"></Movie>
  </div>
</template>

<script>
import Movie from "@/components/Movie";

export default {
  name: 'App',
  data: function () {
    return {
      moives: [
        {id: 1, title: "金刚狼1", rating:8.1}
      ]
    }
  },
  components: {
    Movie
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
