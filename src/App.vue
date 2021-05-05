<template>
    <div id="app">
        <app-header></app-header>
        <app-category></app-category>
        <app-project></app-project>
        <app-about></app-about>
        <app-subbanner></app-subbanner>
        <app-best></app-best>
        <app-subscribe></app-subscribe>
        <app-team></app-team>
        <app-count></app-count>
    </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppCategory from './components/AppCategory'
import AppProject from './components/AppProject'
import AppAbout from './components/AppAbout'
import AppSubbanner from './components/AppSubbanner'
import AppBest from './components/AppBest'
import AppSubscribe from './components/AppSubscribe'
import AppTeam from './components/AppTeam'
import AppCount from './components/AppCount'

export default {
    name: 'App',
    components: {
        AppHeader,
        AppCategory,
        AppProject,
        AppAbout,
        AppSubbanner,
        AppBest,
        AppSubscribe,
        AppTeam,
        AppCount,
    },
}
</script>

<style>
#app {
}
</style>
