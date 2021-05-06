<template>
    <div id="app-about">
        <div class="bg-group">
            <div class="left"></div>
            <div class="right"></div>
        </div>
        <div class="wrap">
            <div class="col-lg-6 col-md-12">
                <div class="about-left">
                    <div class="about-img">
                        <img
                            src="../assets/about/about-main.jpg"
                            alt="aboutimg"
                        />
                        <div class="text-img">
                            <img src="../assets/about/text.png" alt="About" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 col-md-12">
                <div class="about-right">
                    <div class="title-group">
                        <div class="title-top">Who We Are</div>
                        <div class="title-main">
                            We’ve 25+ Years<br />
                            Of Experienced In
                        </div>
                        <div class="title-sub">Crowd Founding</div>
                    </div>

                    <div class="about-title-sub">
                        <span>
                            <strong>36k</strong>
                            Our Global Partner
                        </span>
                        <button class="btn-160 btn-primary btn-main-ef">
                            join with us
                        </button>
                    </div>

                    <ul class="icon-desc-list">
                        <li class="icon-desc-item">
                            <div class="icon-img">
                                <img src="../assets/about/Icon1.png" alt="" />
                            </div>
                            <div class="icon-desc">
                                <h4>Crowdfounding</h4>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus
                                    error voluptatem accusantium doloremque
                                </p>
                            </div>
                        </li>

                        <li class="icon-desc-item">
                            <div class="icon-img">
                                <img src="../assets/about/icon2.png" alt="" />
                            </div>
                            <div class="icon-desc">
                                <h4>Highest Success Rates</h4>
                                <p>
                                    Quis autem vel eum iure reprehenderit quin
                                    ea voluptate velit esse quam nihil molestiae
                                </p>
                            </div>
                        </li>
                    </ul>

                    <a class="btn-190 btn-secondary btn-main-ef" href="/"
                        >learn more</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
#app-about {
    position: relative;
    padding-bottom: 13rem;
    color: var(--text-dark);
}
#app-about .bg-group {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    left: 0;
    top: 0;
}
#app-about .bg-group .left {
    flex-basis: 40%;
    background: var(--primary) url(../assets/about/Bg-pattern.png);
}
#app-about .bg-group .right {
    flex-basis: 60%;
}
#app-about .wrap {
    display: flex;
    flex-wrap: wrap;
}
.about-left {
    display: flex;
    height: 100%;
    align-items: flex-end;
    margin: 0 auto;
}
.about-img {
    position: relative;
}
.about-img > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.text-img {
    position: absolute;
    left: -20%;
    top: 20%;
    z-index: 99;
    animation: utd 2s infinite alternate;
}
@keyframes utd {
    0% {
        transform: translateY(-20%);
    }
    100% {
        transform: translateY(0);
    }
}

.about-right .title-group {
    text-align: left;
    margin-bottom: 4.5rem;
}
.about-right .title-top::after {
    display: none;
}
.about-title-sub {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5rem;
}
.about-title-sub span {
    letter-spacing: -0.005em;
    font-size: 2.4rem;
    line-height: 3rem;
    font-weight: bold;
}
.about-title-sub strong {
    font-size: 3rem;
    color: var(--primary);
}
/* icon desc */
.icon-desc-item {
    display: flex;
    padding-bottom: 4rem;
    margin-bottom: 4rem;
    border-bottom: 1px solid #e9e9e9;
}
.icon-img {
    margin-right: 2rem;
}
.icon-desc h4 {
    font-size: 2.2rem;
    font-weight: bold;
    margin-bottom: 2rem;
}
.icon-desc p {
    font-size: 1.5rem;
    line-height: 2.8rem;
    color: var(--text-second);
}

@media screen and (max-width: 1024px) {
    #app-about .bg-group {
        display: none;
    }
    .about-left {
        justify-content: center;
    }
    .about-right {
        padding-top: 3rem;
    }
}
@media screen and (max-width: 786px) {
    .about-title-sub {
        display: block;
    }
    .about-title-sub span {
        display: block;
    }
    .about-title-sub button {
        margin-top: 2rem;
    }
}
</style>
