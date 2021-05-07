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
        <app-feedback></app-feedback>
        <app-logoslide></app-logoslide>
        <app-news></app-news>
        <app-contact></app-contact>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from '../../components/AppHeader'
import AppCategory from '../../components/AppCategory'
import AppProject from '../../components/AppProject'
import AppAbout from '../../components/AppAbout'
import AppSubbanner from '../../components/AppSubbanner'
import AppBest from '../../components/AppBest'
import AppSubscribe from '../../components/AppSubscribe'
import AppTeam from '../../components/AppTeam'
import AppCount from '../../components/AppCount'
import AppFeedback from '../../components/AppFeedback'
import AppLogoslide from '../../components/AppLogoslide'
import AppNews from '../../components/AppNews'
import AppContact from '../../components/AppContact'
import AppFooter from '../../components/AppFooter'

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
        AppFeedback,
        AppLogoslide,
        AppNews,
        AppContact,
        AppFooter
    },
}
</script>

<style>
#app {
}
</style>
