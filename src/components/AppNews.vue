<template>
  <div id="app-news">
    <div class="wrap">
      <div class="news-container">
      <div class="news-intro">
        <div class="title-group">
          <div class="title-top">Latest News</div>
          <div class="title-main">Every Update</div>
          <div class="title-sub">News & Blog</div>
        </div>
        <p>
          Sedut perspiciatis unde omnis iste natus error 
          sit voluptatem accse doloremque laudantium 
          totam rem aperiam eaque ipsa quae abillo
        </p>
        <a class="btn-160 btn-primary btn-main-ef" href="/">view all news</a>
      </div>

      <div class="news-article">
        <div class="news-img">
          <img src="../assets/best/02.jpg" alt="">
        </div>
        <div class="news-text">

          <span class="label-news">Education</span>
          
          <div class="news-info">
            <span class="date">
              <i class="far fa-calendar-alt"></i>
              05 NOV 2020
            </span>
            <span class="comment">
              <i class="far fa-comment"></i>
              COMMNET (03)
            </span>
          </div>

          <div class="news-title">
            How Make Cross-Browser Testing More Lambda.
          </div>
          
          <div class="author">

            <div class="author-info">
              <div class="author-img">
                <img src="../assets/team/02.jpg" alt="">
              </div>
              <span>David Zon</span>
            </div>

            <a class="btn-more" href="/">
              read more
              <i class="fas fa-arrow-right"></i>
            </a>
            
          </div>

        </div>
      </div>

      <div class="news-article">
        <div class="news-img">
          <img src="../assets/best/01.jpg" alt="">
        </div>
        <div class="news-text">

          <span class="label-news">Education</span>
          
          <div class="news-info">
            <span class="date">
              <i class="far fa-calendar-alt"></i>
              05 NOV 2020
            </span>
            <span class="comment">
              <i class="far fa-comment"></i>
              COMMNET (03)
            </span>
          </div>

          <div class="news-title">
            How Make Cross-Browser Testing More Lambda.
          </div>
          
          <div class="author">

            <div class="author-info">
              <div class="author-img">
                <img src="../assets/team/02.jpg" alt="">
              </div>
              <span>David Zon</span>
            </div>

            <a class="btn-more" href="/">
              read more
              <i class="fas fa-arrow-right"></i>
            </a>
            
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
#app-news {
  padding: 13rem 0;
  background: #f9f9f9;
}
.news-container {
  display: flex;
}
.news-intro {
  width: 300px;
  flex-shrink: 0;
  margin-right: 7rem;
}
.news-intro .title-group{
  text-align: left;
  margin-bottom: 5rem;
}
.news-intro .title-top::after {
  display: none;
}
.news-intro .title-main {
  font-weight: normal;
}
.news-intro p {
  font-size: 1.5rem;
  line-height: 2.8rem;
  color: var(--text-sub);
  margin-bottom: 4rem;
}
/* news artivle */
.news-article {
  width: 37rem;
  flex-shrink: 0;
  border: 2px solid #eaeaea;
  margin-right: 3rem;
}
.news-article:last-child {
  margin-right: 0;
}
.news-img {
  height: 25rem;
  background: var(--text-dark);
  overflow: hidden;
}
.news-img img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: .3s ease-in-out;
}
.news-text {
  position: relative;
  padding: 5rem 4rem 4rem 4rem;
}
.label-news {
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 10rem;
  height: 3rem;
  font-weight: bold;
  text-transform: capitalize;
  border-radius: 3rem;
  background: var(--secondary);
  transform: translateY(-50%);
}
.news-info {
  font-size: 1.5rem;
  color: var(--text-sub);
}
.news-info span {
  margin-right: 1rem;
}
.news-info i {
  margin-right: 0.5rem;
  color: var(--primary);
  margin-bottom: 2.5rem; 
}
.news-title {
  font-size: 2.2rem;
  line-height: 3rem;
  margin-bottom: 3.5rem;
  transition: 0.3s ease-in-out;
}
.author {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.author-info {
  display: flex;
  align-items: center;
}
.author-info .author-img {
  box-shadow: 0 0 5px rgba(0,0,0,0.3);
}
.author-info span {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary);
}
.btn-more {
  position: relative;
  color: var(--text-sub);
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: bold;
}
.btn-more::before {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  width: 100%;
  height: 2px;
  background: #eaeaea;
  transition: .3s ease-in-out;
}
.btn-more i {
  padding-left: 0.5rem;
}
/* hover */
.news-article:hover .news-title{
  color: var(--primary);
}
.news-article:hover .news-img img {
  transform: scale(1.1);  
}
.news-article:hover .btn-more::before {
  background: var(--primary);
}
</style>