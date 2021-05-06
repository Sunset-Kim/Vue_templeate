<template>
    <div id="app-contact">
        <div class="wrap">
            <div class="contact-container">
                <span> Become Our <strong>Premium</strong> Partner ? </span>
                <a class="btn-190 btn-tertiary btn-main-ef" href="/"
                    >contact us</a
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
#app-contact {
    padding: 4rem 0;
    background: var(--secondary);
    color: var(--text-dark);
}
#app-contact .wrap {
    height: 100%;
}
.contact-container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
.contact-container span {
    font-size: 5.5rem;
    line-height: 6rem;
}
.contact-container span strong {
    font-weight: 900;
}
#app-contact .btn-190 {
    margin-top: 4rem;
}
@media screen and (max-width: 1024px) {
    .contact-container span {
        font-size: 4rem;
        line-height: 4.5rem;
    }
}

@media screen and (max-width: 786px) {
    .contact-container span {
        font-size: 3.6rem;
        line-height: 4.2rem;
    }
}
</style>
