<template>
    <div id="app">
        <app-subheader></app-subheader>
        <app-submain>
            <img src="../../assets/header/slide01.jpg" alt="">
            <h1 slot="title">About</h1>
            <h2 slot="subtitle">Home > <span>About</span></h2>
        </app-submain>
        <app-sub-about></app-sub-about>
        <app-subbanner></app-subbanner>
        <app-count></app-count>
        <app-feedback></app-feedback>
        <app-logoslide></app-logoslide>
        <app-news></app-news>
        <app-contact></app-contact>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppSubheader from '../../components/AppSubheader'
import AppSubmain from '../../components/AppSubmain'
import AppSubAbout from '../../components/AppSubAbout'
import AppSubbanner from '../../components/AppSubbanner'
import AppCount from '../../components/AppCount'
import AppFeedback from '../../components/AppFeedback'
import AppLogoslide from '../../components/AppLogoslide'
import AppNews from '../../components/AppNews'
import AppContact from '../../components/AppContact'
import AppFooter from '../../components/AppFooter'

export default {
    name: 'App',
    components: {
        AppSubheader,
        AppSubmain,
        AppSubAbout,
        AppSubbanner,
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
