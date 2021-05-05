<template>
    <div id="app-subbanner">
        <div class="title-group">
            <div class="title-top">Donate Now</div>
            <div class="title-main">Raise Your Hand To The</div>
            <div class="title-sub">Right Place</div>
        </div>
        <div class="btn-group">
            <a href="/" class="btn-190 btn-secondary btn-main-ef">
                explore more
            </a>
            <a href="/" class="btn-190 btn-outlined btn-main-ef">
                donate now
            </a>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
#app-subbanner {
    background: #323850;
    padding: 13rem 0;
    text-align: center;
}
#app-subbanner .title-group {
    color: var(--text-light);
}
#app-subbanner .title-top {
    color: var(--secondary);
}
#app-subbanner .title-top::before,
#app-subbanner .title-top::after {
    background: var(--secondary);
}
#app-subbanner .btn-group a:first-child {
    margin-right: 1rem;
}
</style>
