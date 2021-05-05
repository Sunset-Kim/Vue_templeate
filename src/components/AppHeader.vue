<template>
  <div id=#app-header>
      <div class="header-top">
          <div class="header-wrap">
            <div class="top-left">
              <span>
                  <i class="far fa-envelope"></i>
                  suppoert@gmail.com
              </span>
              <span>
                  <i class="fas fa-map-marker-alt"></i>
                  250 Main Street, 2nd Floor, USA
              </span>
            </div>
            <div class="top-right">
                <span>
                    <i class="fas fa-unlock-alt"></i>
                    Login Or Sign up
                </span>
                <ul class="sns-group">
                    <li><a href="/"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="/"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="/"><i class="fab fa-youtube"></i></a></li>
                    <li><a href="/"><i class="fab fa-behance"></i></a></li>
                    <li><a href="/"><i class="fab fa-google-plus-g"></i></a></li>
                </ul>
            </div>
          </div>
          
      </div>

      <nav class="gnb">
          <div class="header-wrap">
            <div class="logo">
                <a href="#">
                    <img src="../assets/Logo.png" alt="로고">
                </a>
            </div>
            <ul class="depth1-menu">
                <li><a href="#none">Header</a></li>
                <li><a href="#none">Project</a></li>
                <li><a href="#none">Events</a></li>
                <li><a href="#none">News</a></li>
                <li><a href="#none">Pages</a></li>
                <li><a href="#none">Contact</a></li>
            </ul>
            <button class="btn-192 btn-secondary btn-main-ef">get a quote</button>
          </div>
      </nav>

      <div class="header-slide-container">
          <div class="header-slide">
              <img src="../assets/header/slide01.jpg" alt="이미지1">
              <div class="header-slide-text">
                  <div class="wrap">
                      <div class="top-text">
                        Crowd Founding
                      </div>
                      <div class="bold-text">
                          Change World
                      </div>
                      <div class="regular-text">
                          Better Future
                      </div>
                      <div class="btn-group">
                          <button class="btn-192 btn-secondary btn-main-ef">Explore More</button>
                          <button class="btn-192 btn-outlined btn-main-ef">Donate Now</button>
                      </div>
                  </div>
                  
              </div>
          </div>
          <div class="header-pagination">
              <button class="btn-prev btn-pagination">
                  <i class="fas fa-chevron-left"></i>
              </button>
              <button class="btn-next btn-pagination">
                  <i class="fas fa-chevron-right"></i>
              </button>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#app-header {
    position: relative;
}
/* header-top */
.header-top {
    height: 50px;
    line-height: 50px;
    background: var(--text-dark);
    color: var(--text-light);
}
.header-wrap {
    display: flex;
    justify-content: space-between;
    max-width: 1420px;
    margin: 0 auto;
    padding: 0 2rem;
}
.top-left i {
    color: var(--secondary);
}
.top-right {
    display: flex;
}
.top-right i {
    color: var(--secondary);
}
.sns-group {
    display: flex;
    margin-left: 25px;
}
.sns-group a{
    padding: 0 1rem;
}
.sns-group a i {
    color: var(--text-light);
}
.sns-group a:hover i{
    color: var(--secondary);
}
.sns-group li:last-child a{
    padding-right: 0;
}
/* haeder-nav */
.gnb {
    position: relative;
    height: 90px;
    line-height: 90px;
    z-index: 999;
    color: var(--text-light);
}
.gnb .header-wrap{
    align-items: center;
}
.gnb .logo a{
    display: flex;
    height: 100%;
    align-items: center;
}
.depth1-menu {
    display: flex;
}
.depth1-menu li a{
    display: block;
    font-size: 1.8rem;
    font-weight: bold;
    padding-right: 2rem;
    transition: .3s ease-in-out;
}
.depth1-menu li a:hover {
    color: var(--secondary);
}

/* header-slide */
.header-slide-container {
    position: absolute;
    top: 50px;
}
.header-slide {
    position: relative;
    max-height: 880px;
    overflow: hidden;
}
.header-slide::before {
    content: '';
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #08133b;
    opacity: 0.4;
    z-index: 1;
}
.header-slide img {
    display: block;
    object-fit: cover;
    object-position: center;
    width: 100%;
    max-height: 880px;
    filter: grayscale(1);
}
.header-slide-text {
    width: 100%;
    font-weight: bold;
    position: absolute;
    top: 50%;
    z-index: 99;
    transform: translateY(-50%);
    color: var(--text-light);
}
.header-slide-text .top-text {
    font-size: 1.8rem;
    margin-bottom: 4.5rem;
}
.header-slide-text .top-text::before {
    content: '';
    display: inline-block;
    width: 50px;
    height: 2px;
    vertical-align: middle;
    background: var(--text-light);
}

.header-slide-text .bold-text {
    font-size: 8.5rem;
    font-weight: 900;
}
.header-slide-text .regular-text {
    font-size: 8.5rem;
    margin-bottom: 5rem;
}
.btn-group button:first-child {
    margin-right: 1rem;
}
.header-pagination {
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    top: 50%;
    padding: 0 2rem;
    transform: translateY(-50%);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    z-index: 99;
}
.header-pagination:hover {
    opacity: 1;
}
.btn-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text-light);
    width: 6.5rem;
    height: 6.5rem;
    border-radius: 1rem;
    border: 2px solid var(--text-light);
    transition: 0.3s ease-in-out;
}
.btn-pagination:hover {
    background: var(--secondary);
    border-color: var(--secondary);
}
</style>