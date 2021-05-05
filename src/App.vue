<template>
    <div id="app">
        <app-header></app-header>
        <app-category></app-category>
        <app-project></app-project>
        <app-about></app-about>
        <app-subbanner></app-subbanner>
        <app-best></app-best>
    </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppCategory from './components/AppCategory'
import AppProject from './components/AppProject'
import AppAbout from './components/AppAbout'
import AppSubbanner from './components/AppSubbanner'
import AppBest from './components/AppBest'

export default {
    name: 'App',
    components: {
        AppHeader,
        AppCategory,
        AppProject,
        AppAbout,
        AppSubbanner,
        AppBest,
    },
}
</script>

<style>
#app {
}
</style>
