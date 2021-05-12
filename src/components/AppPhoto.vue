<template>
  <div id="app-photo">
        <div class="title-group">
            <div class="title-top">Company History</div>
            <div class="title-main">We Are Trusted Crowdfunding</div>
            <div class="title-sub">Agency In Since 1990</div>
        </div>

        <div class="photo-container">
            <div class="wrap">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="photo-item">
                            <div class="photo-img">
                                <img src="" alt="">
                            </div>
                            <div class="photo-text">
                                <div class="label-year label-170 btn-primary">
                                    <span>1990</span>
                                </div>
                                <p>
                                    Sed perspicis unde omnis iste natus error sit voluptatem accusanti dolmque laudantium totam rem aperia
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="photo-item">
                            <div class="photo-img">
                                <img src="" alt="">
                            </div>
                            <div class="photo-text">
                                <div class="label-year label-170 btn-primary">
                                    <span>1992</span>
                                </div>
                                <p>
                                    Sed perspicis unde omnis iste natus error sit voluptatem accusanti dolmque laudantium totam rem aperia
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="photo-item">
                            <div class="photo-img">
                                <img src="" alt="">
                            </div>
                            <div class="photo-text">
                                <div class="label-year label-170 btn-primary">
                                    <span>1990</span>
                                </div>
                                <p>
                                    Sed perspicis unde omnis iste natus error sit voluptatem accusanti dolmque laudantium totam rem aperia
                                </p>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>

        <!-- 배경화면 -->
        <div class="app-bg">
            <div class="bg-top"></div>
            <div class="bg-bottom"></div>
        </div>

        
  </div>
</template>

<script>
export default {

}
</script>

<style>
#app-photo {
    padding: 13rem 0;
}
#app-photo {
    position: relative;
}
#app-photo .app-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
#app-photo .app-bg .bg-top {
    height: 50%;

}
#app-photo .app-bg .bg-bottom {
    height: 50%;
    background: #f6f3f1;
}

.photo-item {
    box-shadow: 2px 2px 4px rgba(0,0,0,.15);
    margin-bottom: 4rem;
}


.photo-img {
    height: 28rem;
    background: #000;
}
.photo-text {
    text-align: center;
    padding: 4rem 3.5rem;
    background: white;
}
.photo-text .label-year {
    margin-bottom: 2.5rem;
}
.photo-text .label-year span {
    position: relative;
}
.photo-text .label-year span::before,
.photo-text .label-year span::after {
    content: '';
    position: absolute;
    width: 2.5rem;
    height: .2rem;
    background: white;
    top: 50%;
    transform: translateY(-50%);
}

.photo-text .label-year span::before {
    left: -50%;
}
.photo-text .label-year span::after {
    right: -55%;
}
.photo-text p {
    font-size: 1.5rem;
    line-height: 2.8rem;
    color: var(--text-sub);

}

</style>