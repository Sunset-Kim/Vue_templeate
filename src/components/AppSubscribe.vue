<template>
    <div id="app-subscribe">
        <div class="wrap">
            <div class="subscribe-box">
                <div class="title-group">
                    <div class="title-top">Newsletters</div>
                    <div class="title-main">Subscribe Our</div>
                    <div class="title-sub">Newsletters</div>
                </div>
                <div class="input-group">
                    <form action="">
                        <label for="input-email">
                            Get Every Single Update To Join Our Newsletters
                        </label>
                        <div class="input-box">
                            <input
                                type="email"
                                id="input-email"
                                class="input-email"
                                placeholder="Enter Your Email"
                            />
                            <button type="submit" class="btn-enter">
                                <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
#app-subscribe {
    transform: translateY(-13rem);
}
.subscribe-box {
    display: flex;
    align-items: center;
    padding: 6rem;
    background: var(--primary);
    color: var(--text-light);
}
.subscribe-box .title-group {
    text-align: left;
    margin: 0;
    margin-right: 13rem;
    color: var(--text-light);
}
.subscribe-box .title-top {
    color: var(--text-light);
}
.subscribe-box .title-top::before,
.subscribe-box .title-top::after {
    background: var(--text-light);
}
.subscribe-box .title-top::after {
    display: none;
}
/* input group */
.input-group label {
    display: block;
    font-size: 1.8rem;
    line-height: 2.2rem;
    margin-bottom: 2.5rem;
}
.input-box {
    display: inline-block;
    position: relative;
}
.input-email {
    width: 50rem;
    height: 8rem;
    line-height: 8rem;
    border: none;
    padding-left: 3rem;
    font-size: 1.5rem;
    font-weight: bold;
    outline: none;
}
.input-email::placeholder {
    opacity: 1;
    transition: 0.3s ease-in-out;
}
.input-email:focus::placeholder {
    opacity: 0;
}
.btn-enter {
    position: absolute;
    top: 50%;
    right: 2rem;
    width: 5.5rem;
    height: 5rem;
    background: var(--secondary);
    transform: translateY(-50%);
    transition: 0.3s ease-in-out;
}
.btn-enter:hover {
    background: var(--primary);
}

@media screen and (max-width: 1024px) {
    .subscribe-box {
        display: block;
    }
    .subscribe-box .title-group {
        text-align: left;
        margin: 0;
        margin-bottom: 2rem;
    }
}
@media screen and (max-width: 610px) {
    .input-box {
        width: 100%;
    }
    .input-email {
        width: 100%
    }
}
</style>
