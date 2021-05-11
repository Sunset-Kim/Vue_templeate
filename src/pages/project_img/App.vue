<template>
    <div id="app">
        <app-subheader></app-subheader>
        <app-submain>
            <img src="../../assets/header/slide02.jpg" alt="" />
            <h1 slot="title">Latest Project</h1>
            <h2 slot="subtitle">Project ><span>Main Project</span></h2>
        </app-submain>
        <app-subfunding></app-subfunding>
        <app-subdesc></app-subdesc>
        <app-best></app-best>
        <app-contact></app-contact>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppSubheader from '../../components/AppSubheader'
import AppSubmain from '../../components/AppSubmain'
import AppSubfunding from '../../components/AppSubfunding'
import AppSubdesc from '../../components/AppSubdesc'
import AppBest from '../../components/AppBest'
import AppContact from '../../components/AppContact'
import AppFooter from '../../components/AppFooter'

export default {
    name: 'App',
    components: {
        AppSubheader,
        AppSubmain,
        AppSubfunding,
        AppSubdesc,
        AppBest,
        AppContact,
        AppFooter,
    },
}
</script>

<style>
#app-best {
    padding-bottom: 13rem;
}
</style>
