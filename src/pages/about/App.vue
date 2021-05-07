<template>
    <div id="app">

        <h1>About페이지</h1>

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
