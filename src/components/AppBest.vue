<template>
    <div id="app-best">
        <div class="title-group">
            <div class="title-top">Popular Project</div>
            <div class="title-main">We’ve Done Many Crowd</div>
            <div class="title-sub">Founding Project</div>
        </div>

        <div class="wrap">
            <div class="best-container">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="best-item">
                        <div class="best-img">
                            <span class="label label-new">New</span>
                            <img src="../assets/best/01.jpg" alt="" />
                        </div>
                        <div class="best-text">
                            <img src="../assets/best/icon1.png" alt="" />
                            <h2 class="project-name">
                                Reference Pico-Neo2<br />
                                Condition New
                            </h2>
                            <div class="project-progress">
                                <div class="progress-title">
                                    <span> $2535 </span>
                                    <span> 85% </span>
                                </div>
                                <div class="progress-bg">
                                    <div class="progress-bar"></div>
                                </div>
                                <div class="project-info">
                                    <div class="author">
                                        <div class="author-img">
                                            <img src="../assets/best/01.jpg" alt="" />
                                        </div>
                                        Somalia
                                    </div>
                                    <div class="day">
                                        <i class="far fa-clock"></i>
                                        7 Days Left
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="best-item">
                        <div class="best-img">
                            <img src="../assets/best/02.jpg" alt="" />
                        </div>
                        <div class="best-text">
                            <img src="../assets/best/icon2.png" alt="" />
                            <h2 class="project-name">
                                Reference Pico-Neo2<br />
                                Condition New
                            </h2>
                            <div class="project-progress">
                                <div class="progress-title">
                                    <span> $2535 </span>
                                    <span> 85% </span>
                                </div>
                                <div class="progress-bg">
                                    <div class="progress-bar"></div>
                                </div>
                                <div class="project-info">
                                    <div class="author">
                                        <div class="author-img">
                                            <img src="../assets/best/01.jpg" alt="" />
                                        </div>
                                        Somalia
                                    </div>
                                    <div class="day">
                                        <i class="far fa-clock"></i>
                                        7 Days Left
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="best-item">
                        <div class="best-img">
                            <span class="label label-hot">hot</span>
                            <img src="../assets/best/03.jpg" alt="" />
                        </div>
                        <div class="best-text">
                            <img src="../assets/best/icon3.png" alt="" />
                            <h2 class="project-name">
                                Reference Pico-Neo2<br />
                                Condition New
                            </h2>
                            <div class="project-progress">
                                <div class="progress-title">
                                    <span> $2535 </span>
                                    <span> 85% </span>
                                </div>
                                <div class="progress-bg">
                                    <div class="progress-bar"></div>
                                </div>
                                <div class="project-info">
                                    <div class="author">
                                        <div class="author-img">
                                            <img src="../assets/best/01.jpg" alt="" />
                                        </div>
                                        Somalia
                                    </div>
                                    <div class="day">
                                        <i class="far fa-clock"></i>
                                        7 Days Left
                                    </div>
                                </div>
                            </div>
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
#app-best {
    padding: 13rem 0 26rem;
    background: #f6f3f1;
}
.best-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.best-item {
    margin-bottom: 2rem;
}
.best-item:hover img {
    transform: scale(1.1);
}

.best-item:hover .project-name {
    color: var(--primary);
}
.best-item:last-child {
    margin-right: 0;
}
.best-img {
    position: relative;
    height: 270px;
    background: var(--text-dark);
    overflow: hidden;
}
.label {
    position: absolute;
    top: 15px;
    right: 15px;
    padding: 0.4rem 0.8rem;
    border-radius: 9rem;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
}
.label-new {
    background: white;
}
.label-hot {
    background: var(--primary);
    color: var(--text-light);
}
.best-img img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s ease-in-out;
}
.best-text {
    position: relative;
    padding: 4rem;
    background: white;
}
.best-text > img {
    position: absolute;
    top: 4rem;
    right: 4rem;
    transition: 0.3s ease-in-out;
}
</style>
