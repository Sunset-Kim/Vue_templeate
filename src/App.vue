<template>
  <div id="app">
    <app-header></app-header>
    <app-category></app-category>
    <app-project></app-project>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppCategory from './components/AppCategory'
import AppProject from './components/AppProject';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppCategory,
    AppProject
  }
}
</script>

<style>

#app {

}
</style>
