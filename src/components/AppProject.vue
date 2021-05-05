<template>
  <div id="app-project">
      <div class="title-group">
            <div class="title-top">
                Features Projects
            </div>
            <div class="title-main">
                We've Take A Mission To 
            </div>
            <div class="title-sub">
                Solve The Project
            </div>
        </div>

        <div class="project-container">
            <div class="wrap">
                <div class="project-item">
                    <div class="project-img">
                        <img src="" alt="">
                    </div>
                    <div class="project-text">
                        <h2 class="project-name">
                            Reference Pico-Neo2<br>
                            Condition New
                        </h2>
                        <div class="project-progress">
                            <div class="progress-title">
                                <span>
                                    $2535
                                </span>
                                <span>
                                    85%
                                </span>
                            </div>
                            <div class="progress-bg">
                                <div class="progress-bar"></div>
                            </div>
                            <div class="project-info">
                                <div class="author">
                                    <div class="author-img">
                                        <img src="" alt="">
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

                <div class="project-item">
                    <div class="project-img">
                        <img src="" alt="">
                    </div>
                    <div class="project-text">
                        <h2 class="project-name">
                            Reference Pico-Neo2<br>
                            Condition New
                        </h2>
                        <div class="project-progress">
                            <div class="progress-title">
                                <span>
                                    $2535
                                </span>
                                <span>
                                    85%
                                </span>
                            </div>
                            <div class="progress-bg">
                                <div class="progress-bar"></div>
                            </div>
                            <div class="project-info">
                                <div class="author">
                                    <div class="author-img">
                                        <img src="" alt="">
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

                <div class="project-item">
                    <div class="project-img">
                        <img src="" alt="">
                    </div>
                    <div class="project-text">
                        <h2 class="project-name">
                            Reference Pico-Neo2<br>
                            Condition New
                        </h2>
                        <div class="project-progress">
                            <div class="progress-title">
                                <span>
                                    $2535
                                </span>
                                <span>
                                    85%
                                </span>
                            </div>
                            <div class="progress-bg">
                                <div class="progress-bar"></div>
                            </div>
                            <div class="project-info">
                                <div class="author">
                                    <div class="author-img">
                                        <img src="" alt="">
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

                <div class="project-item">
                    <div class="project-img">
                        <img src="" alt="">
                    </div>
                    <div class="project-text">
                        <h2 class="project-name">
                            Reference Pico-Neo2<br>
                            Condition New
                        </h2>
                        <div class="project-progress">
                            <div class="progress-title">
                                <span>
                                    $2535
                                </span>
                                <span>
                                    85%
                                </span>
                            </div>
                            <div class="progress-bg">
                                <div class="progress-bar"></div>
                            </div>
                            <div class="project-info">
                                <div class="author">
                                    <div class="author-img">
                                        <img src="" alt="">
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
</template>

<script>
export default {

}
</script>

<style>
#app-project {
    padding: 13rem 0;
}
.project-container .wrap{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
}
.project-item {
    display: flex;
    width: 570px;
    height: 270px;
    margin-bottom: 3rem;
}
.project-item:hover .project-name{
    color: var(--primary);
}
.project-item:hover .project-img img{
    transform: scale(1.1);
}
.project-item:nth-child(odd) {
    margin-right: 3rem;
}
.project-img {
    flex-basis: 250px;
    flex-shrink: 0;
    background: var(--text-dark);
    overflow: hidden;
}
.project-img img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: .3s ease-in-out;
}
.project-text {
    flex-grow: 1;
    background: #f6f3f1;
    padding: 3rem;
}
.project-name {
    font-size: 2.2rem;
    font-weight: bold;
    line-height: 3rem;
    margin-bottom: 3rem;
    transition: 0.3s ease-in-out;
}
.progress-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
}
.progress-title span:first-child {
    color: var(--primary);
    font-weight: bold;
    font-size: 1.8rem;
}
.progress-title span:first-child::before {
    content: 'Rasied';
    color: #696969;
    font-size: 1.5rem;
}
.progress-title span:last-child {
    color: inherit;
    font-weight: 800;
}
.progress-bg {
    position: relative;
    width: 100%;
    height: 5px;
    background: #e0e3e1;
    margin-bottom: 3rem;
}
.progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 85%;
    background: var(--primary);
}
.project-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.author {
    display: flex;
    align-items: center;
}
.author-img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 1rem;
    background: #000;
    overflow: hidden;
}
.author-img img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
}
.day i {
    color: var(--primary)
}
</style>