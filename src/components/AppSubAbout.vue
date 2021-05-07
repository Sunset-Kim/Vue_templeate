<template>
  <div id="app-sub-about">
      <div class="about-top">
        <div class="wrap">
            <div class="col-lg-5 col-md-12">
                <div class="about-img">
                    <div class="about-img-box">
                        <img class="img-main" src="../assets/about/about-main.jpg" alt="">
                        <img class="img-typo" src="../assets/subpage/About.png" alt="">
                        <img class="img-effect" src="../assets/subpage/effect.png" alt="">
                    </div>
                    <!-- 텍스트효과 -->
                </div>
            </div>
        
            <div class="col-lg-1 col-md-0"></div>

            <div class="col-lg-6 col-md-12">
                <div class="about-text">
                    <div div class="title-group">
                        <div class="title-top">Latest News</div>
                        <div class="title-main">Every Update</div>
                        <div class="title-sub">News & Blog</div>
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
                    <div class="text-desc">
                        <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo invtore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo ipsams voluptatem quia voluptas sit aspernatur aut odit aut fugie
                        </p>
                        <p>
                            Aperiam, eaque ipsa quae ab illo invtore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo ipsams voluptatem
                        </p>
                    </div>
                    <a class="btn-190 btn-secondary btn-main-ef">
                        learn more
                    </a>
                </div>
            </div>
      </div>
      </div>
      
    <div class="about-bottom">
        <div class="wrap">

            <div class="col-lg-6 col-md-12">

                <div class="about-text">
                    <div div class="title-group">
                        <div class="title-top">Features Projects</div>
                        <div class="title-main">We Offer Awesome</div>
                        <div class="title-sub">Product For Business</div>
                    </div>
                    <div class="text-desc">
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusante um doloremque laudantium totam rem aperiam, eaque ipsa quis autem vel eum iure reprehenderit qui in ea voluptate velit esse autem vel eum iure reprehenderit qui in ea voluptate velit esse quam 
                        </p>
                    </div>
                    <div class="icon-desc">

                        <div class="icon-desc-item">
                            <div class="icon-img">
                                <img src="../assets/category/dish.png" alt="">
                            </div>
                            <div class="icon-text">
                                <h4>Raising Food</h4>
                                <p>Sed ut perspiciatis unde omnis iste natus error </p>
                            </div>
                        </div>

                        <div class="icon-desc-item">
                            <div class="icon-img">
                                <img src="../assets/category/computer.png" alt="">
                            </div>
                            <div class="icon-text">
                                <h4>Web Design</h4>
                                <p>Sed ut perspiciatis unde omnis iste natus error </p>
                            </div>
                        </div>

                        <div class="icon-desc-item">
                            <div class="icon-img">
                                <img src="../assets/category/stethoscope.png" alt="">
                            </div>
                            <div class="icon-text">
                                <h4>Medical & Health</h4>
                                <p>Sed ut perspiciatis unde omnis iste natus error </p>
                            </div>
                        </div>

                        <div class="icon-desc-item">
                            <div class="icon-img">
                                <img src="../assets/category/open-book.png" alt="">
                            </div>
                            <div class="icon-text">
                                <h4>Technology</h4>
                                <p>Sed ut perspiciatis unde omnis iste natus error </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
            <div class="col-lg-1 col-md-0"></div>

            <div class="col-lg-5 col-md-12">
                <div class="about-img">
                    <div class="about-img-box">
                        <img class="img-main" src="../assets/about/about-main.jpg" alt="">
                        <img class="img-typo" src="../assets/subpage/Features.png" alt="">
                        <img class="img-effect" src="../assets/subpage/effect.png" alt="">
                    </div>
                    <!-- 텍스트효과 -->
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
#app-sub-about {
    padding: 13rem 0;
}
#app-sub-about .wrap {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
}
.about-img,
.about-text {
    padding-bottom: 8rem;
}
/* about img */
.about-img {
    display: flex;
    height: 100%;
    align-items: flex-end;
}
.about-img-box {
    position: relative;
    width: 100%;
    height: 100%;
}
.img-main {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.img-effect,
.img-typo {
    position: absolute;
}
.about-top .img-typo {
    left: -20%;
    top: 50%;
    transform: translateY(-50%);
    animation: utd 6s infinite alternate;
    animation-fill-mode: both;
}
.about-top .img-effect {
    left: -10%;
    bottom: -10%;
    z-index: -1;
}

@keyframes utd {
    0%{
        transform: translateY(-70%);
    }
    100% {
        transform: translateY(-30%);
    }
}
/* about text */
#app-sub-about .title-group {
    text-align: left;
    margin-bottom: 4rem;
}
.btn-text-group {
    line-height: 5rem;
    margin-bottom: 4rem;
}
.btn-text-group span{
    font-size: 2.4rem;
    margin-right: 2rem;
}
.btn-text-group span strong {
    font-size: 3rem;
    color: var(--primary);
}
.text-desc p{
    font-size: 1.5rem;
    line-height: 2.8rem;
    color: var(--text-sub);
    margin-bottom: 2.5rem;
}
.text-desc p:last-child {
    margin-bottom: 0;
}
.text-desc {
    margin-bottom: 4rem;
}

/* icon-desc */
.icon-desc {
    display: flex;
    flex-wrap: wrap;
}
.icon-desc-item {
    display: flex;
    width: 50%;
    align-items: center;
    margin-bottom: 4rem;
}
.icon-desc-item:nth-child(odd) {
    padding-right: 4rem;
}
.icon-desc-item .icon-img {
    flex-basis: 50px;
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    margin-right: 2rem;
}
.icon-desc-item .icon-img img {
    width: 100%;
    height: 100%;
}
.icon-desc-item .icon-text h4 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
}
.icon-desc-item .icon-text p {
    font-size: 1.5rem;
    line-height: 2.8rem;
    color: var(--text-sub);
}
@media screen and (max-width: 640px) {
    .icon-desc-item {
    width: 100%;
}
.icon-desc-item:nth-child(odd) {
    padding-right: 0;
}
}
/* img */
.about-bottom .img-typo {
    right: -20%;
    top: 50%;
    transform: translateY(-50%);
    animation: utd 6s infinite alternate;
    animation-fill-mode: both;
}
.about-bottom .img-effect {
    right: -10%;
    bottom: -10%;
    z-index: -1;
}
</style>