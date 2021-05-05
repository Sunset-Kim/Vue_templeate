<template>
    <div id="app">
        <app-header></app-header>
        <app-category></app-category>
        <app-project></app-project>
        <app-about></app-about>
    </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppCategory from './components/AppCategory'
import AppProject from './components/AppProject'
import AppAbout from './components/AppAbout'

export default {
    name: 'App',
    components: {
        AppHeader,
        AppCategory,
        AppProject,
        AppAbout,
    },
}
</script>

<style>
#app {
}
</style>
