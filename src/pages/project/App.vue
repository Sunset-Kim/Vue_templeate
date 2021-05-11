<template>
    <div id="app">
        <app-subheader></app-subheader>
        <app-submain>
            <img src="../../assets/header/slide02.jpg" alt="" />
            <h1 slot="title">Latest Project</h1>
            <h2 slot="subtitle">Project ><span>Main Project</span></h2>
        </app-submain>
        <app-category></app-category>
        <app-subproject></app-subproject>
        <app-contact></app-contact>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppSubheader from '../../components/AppSubheader'
import AppSubmain from '../../components/AppSubmain'
import AppCategory from '../../components/AppCategory'
import AppSubproject from '../../components/AppSubproject'
import AppContact from '../../components/AppContact'
import AppFooter from '../../components/AppFooter'

export default {
    name: 'App',
    components: {
        AppSubheader,
        AppSubmain,
        AppCategory,
        AppSubproject,
        AppContact,
        AppFooter,
    },
}
</script>

<style>
#app {
}
</style>
