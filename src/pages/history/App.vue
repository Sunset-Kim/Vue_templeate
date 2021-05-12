<template>
    <div id="app">
        <app-subheader></app-subheader>
        <app-submain>
            <img src="../../assets/header/slide02.jpg" alt="">
            <h1 slot="title">Company Overview</h1>
            <h2 slot="subtitle">Home > <span>Company Overview</span></h2>
        </app-submain>
        <app-history-about></app-history-about>
        <app-subbanner></app-subbanner>
        <app-tabmenu></app-tabmenu>
        <app-photo></app-photo>
        <app-contact></app-contact>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppSubheader from '../../components/AppSubheader'
import AppSubmain from '../../components/AppSubmain'
import AppHistoryAbout from '../../components/AppHistoryAbout'
import AppSubbanner from '../../components/AppSubbanner'
import AppTabmenu from '../../components/AppTabmenu'
import AppPhoto from '../../components/AppPhoto'
import AppContact from '../../components/AppContact'
import AppFooter from '../../components/AppFooter'

export default {
    name: 'App',
    components: {
        AppSubheader,
        AppSubmain,
        AppHistoryAbout,
        AppSubbanner,
        AppTabmenu,
        AppPhoto,
        AppContact,
        AppFooter
    },
}
</script>

<style>
#app {
}
</style>
