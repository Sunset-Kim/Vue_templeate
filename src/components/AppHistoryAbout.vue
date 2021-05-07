<template>
  <div id="app-history-about">
    <div class="history-about">
        <div class="wrap">
            <div class="col-lg-5 col-md-6 col-sm-6">
                <div class="about-text">
                    <div div class="title-group">
                        <div class="title-top">Features Projects</div>
                        <div class="title-main">We’ve 25+ Years Of Experienced In</div>
                        <div class="title-sub">Crowd Founding</div>
                    </div>

                    <div class="btn-text-group">
                        <span>
                            <strong>36023k</strong>
                            Our Globall Partner
                        </span>
                        <a href="#none" class="btn-160 btn-primary btn-main-ef">
                            join with us
                        </a>
                    </div>

                    <div class="icon-desc">

                        <div class="icon-desc-item">
                            <div class="icon-img">
                                <img src="../assets/category/dish.png" alt="">
                            </div>
                            <div class="icon-text">
                                <h4>Crowdfounding</h4>
                                <p>Quis autem vel eum iure reprehenderit quin ea voluptate velit esse quam nihil molestiae </p>
                            </div>
                        </div>

                        <div class="icon-desc-item">
                            <div class="icon-img">
                                <img src="../assets/category/computer.png" alt="">
                            </div>
                            <div class="icon-text">
                                <h4>Highest Success Rates</h4>
                                <p>Quis autem vel eum iure reprehenderit quin ea voluptate velit esse quam nihil molestiae </p>
                            </div>
                        </div>

                       
                    </div>

                    <a class="btn-190 btn-secondary btn-main-ef" href="#none">Learn more</a>
                </div>
            </div>
            <div class="col-lg-1 col-md-0 col-sm-0"></div>
            <div class="col-lg-3 col-md-3 col-sm-6">
                <div class="history-img">
                    <div class="history-img-lg">
                        <img class="img-main" src="../assets/best/01.jpg" alt="크라우드펀딩이미지1">
                    </div>
                    <div class="history-img-md">
                        <img class="img-main" src="../assets/best/02.jpg" alt="크라우드펀딩이미지2">
                    </div>
                </div>
                
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
                <div class="history-img">
                    <div class="history-img-lg">
                        <img class="img-main" src="../assets/best/03.jpg" alt="크라우드펀딩이미지3">
                        <img class="img-leaf" src="../assets/subpage/leaf.png" alt="">
                    </div>
                </div>
                
            </div>
        </div>
    </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style>
#app-history-about .wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    overflow: hidden;
}
#app-history-about {
    padding: 13rem 0;
}
.about-text {
    padding-bottom: 4rem;
}
.history-about .title-group {
    text-align: left;
}
.history-about .btn-text-group {
    margin-bottom: 1rem;
}
.history-about .icon-desc {
    margin-bottom: 2rem;
}
.history-about .icon-desc-item {
    width: 100%;
    padding-top: 4rem;
    border-bottom: 1px solid #e9e9e9;
}

/* img box */
.history-img-lg {
    position: relative;
    height: 38rem;
    background: #000;
    margin-bottom: 3rem;
}
.history-img-md {
    position: relative;
    height: 31.4rem;
    background: #000;
    margin-bottom: 3rem;
}
.img-main {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
.img-leaf {
    position: absolute;
    right: -20%;
    bottom: -30%;
    z-index: -1;
}
</style>