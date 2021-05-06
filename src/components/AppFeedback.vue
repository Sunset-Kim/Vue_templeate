<template>
    <div id="app-feedback">
        <div class="title-group">
            <div class="title-top">Clients Feedback</div>
            <div class="title-main">356754+ Peoples Say</div>
            <div class="title-sub">About Given</div>
        </div>

        <div class="wrap">
            <div class="feedback-container">
                
                <div class="feedback-item">
                    <div class="feedback-img">
                        <img src="../assets/team/02.jpg" alt="">
                        <span class="label-img">
                            <i class="far fa-comment-dots"></i>
                        </span>
                    </div>
                    <div class="feedback-text">
                        <h4 class="feedback-name">David Michel, <span>CEO & Founder</span></h4>
                        <p>
                            But I must explain to you how all this mistake denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of ter-builder
                        </p>
                        <div class="feedback-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                </div>

                <div class="feedback-item">
                    <div class="feedback-img">
                        <img src="../assets/team/03.jpg" alt="">
                        <span class="label-img">
                            <i class="far fa-comment-dots"></i>
                        </span>
                    </div>
                    <div class="feedback-text">
                        <h4 class="feedback-name">David Michel, <span>CEO & Founder</span></h4>
                        <p>
                            But I must explain to you how all this mistake denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of ter-builder
                        </p>
                        <div class="feedback-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
#app-feedback { 
    padding: 13rem 0;
    background: var(--primary) url('../assets/about/Bg-pattern.png');
}
#app-feedback .title-group {
    color: white;
}
#app-feedback .title-top {
    color: white;
}
#app-feedback .title-top::before,
#app-feedback .title-top::after {
    background: white;
}
.feedback-container {
    display: flex;
    flex-wrap: wrap;
}
.feedback-item {
    position: relative;
    width: 570px;
    padding: 9rem 6rem 5rem 6rem;
    margin-right: 3rem;
    z-index: 10;
}
.feedback-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    z-index: -1;
    clip-path: polygon(0% 14%, 100% 0%, 100% 100%, 0 100%);
}
.feedback-item:last-child {
    margin-right: 0;
}
.feedback-img {
    position: absolute;
    top: 0;
    right: 6rem;
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    background: #000;
    transform: translateY(-50%);
    z-index: 999;
}
.feedback-img img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}
.feedback-name {
    font-size: 1.8rem;
    margin-bottom: 2.5rem;
}
.feedback-name span {
    font-size: 1.5rem;
    color: var(--primary);
}
.feedback-name::before {
    content: '';
    display: inline-block;
    width: 50px;
    height: 2px;
    background: var(--primary);
    vertical-align: middle;
    padding-right: 15px;
}
.feedback-text p {
    font-size: 1.5rem;
    line-height: 2.8rem;
    color: var(--text-sub);
    margin-bottom: 2rem
}
.feedback-rating {
    color: var(--secondary);
}
.feedback-rating i {
    padding-right: .5rem;
}
.feedback-rating i:last-child {
    padding-right: 0;
}
</style>
