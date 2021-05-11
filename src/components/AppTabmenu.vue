<template>
  <div id="app-tabmenu">

        <div class="tabmenu-btn-group">
          <div class="wrap">
            <div class="row">

              <div class="col-lg-4 col-md-4">
                <a v-bind:class="{active: menuGroup.menu1}" v-on:click="toggleMenu" class="btn-main-ef btn-primary" href="#none" data-index="1">mission & vision</a>
              </div>

              <div class="col-lg-4 col-md-4">
                <a v-bind:class="{active: menuGroup.menu2}" v-on:click="toggleMenu" class="btn-main-ef btn-primary" href="#none" data-index="2">our Goal</a>
              </div>

              <div class="col-lg-4 col-md-4">
                <a v-bind:class="{active: menuGroup.menu3}" v-on:click="toggleMenu" class="btn-main-ef btn-primary" href="#none" data-index="3">Company History</a>
              </div>

            </div>
            
          </div>
            
            
            
        </div>

        <div class="tapmenu-container">
          <transition name="fade">
            <div v-if="menuGroup.menu1" class="tapmenu-content">
              <div class="wrap">
                <div class="row">

                  <div class="col-lg-5 col-md-8 col-sm-6">

                    <div class="content-title">
                      <h2>Change World</h2>
                      <h4>Better Future</h4>
                    </div>

                    <div class="content-main">
                      <p>
                        Sed ut perspiciatis unde omnis iste natu voluptatem
                        accusantium doloremque laudantium totam aperiam
                        eaque ipsa quaab inventore veritatis quasi architecto
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam
                        voluptatem quia voluptas sit aspernatur aut
                      </p>
                    </div>

                    <div class="content-list">
                      <ul>
                        <li>

                          <i class="icon-check">
                            <i class="fas fa-check"></i>
                          </i>

                          <span>
                            SEO Belong In Your Web Design Process
                          </span>

                        </li>

                        <li>

                          <i class="icon-check">
                            <i class="fas fa-check"></i>
                          </i>

                          <span>
                            Build Music Manager With Nuxt And Express
                          </span>
                          
                        </li>

                        <li>

                          <i class="icon-check">
                            <i class="fas fa-check"></i>
                          </i>

                          <span>
                            What Does Foldable Web Actually Mean
                          </span>
                          
                        </li>

                        <li>

                          <i class="icon-check">
                            <i class="fas fa-check"></i>
                          </i>

                          <span>
                            How To Build Simple Cryptocurrency
                          </span>
                          
                        </li>
                      </ul>
                    </div>


                  </div>

                  <div class="col-lg-1 col-md-0"></div>

                  <div class="col-lg-6 col-md-4 col-sm-6">

                    <div class="content-img">
                      <img src="../assets/header/slide01.jpg" alt="이미지메인">

                      <div class="content-img-sub">
                        <img src="../assets/best/01.jpg" alt="이미지보조">
                      </div>

                      <div class="content-img-effect">
                        <img src="../assets/subpage/content-effect.png" alt="이미지효과">
                      </div>

                    </div>
                    
                  </div>

                </div>
              </div>
            </div>
          </transition>
          

          
        </div>
        
    
  </div>
</template>

<script>
export default {
	data() {
		return {
      menuGroup: {
        menu1: 1,
        menu2: 0,
        menu3: 0,
      }
		}
	},
  methods: {
    toggleMenu(e) {
      let index = e.target.dataset.index;
      for(let menu in this.menuGroup) {
        this.menuGroup[menu] = 0;
        if(menu === `menu${index}`) {
          this.menuGroup[menu] = 1;
        }
      }

    
      
    }
  }
}
</script>

<style>
#app-tabmenu {
}
#app-tabmenu .wrap {
	overflow: hidden;
}

#app-tabmenu input {
	display: none;
}

/* btn-group */
.tabmenu-btn-group {
	transform: translateY(-50%);
}

.tabmenu-btn-group a {
	display: inline-block;
	width: 100%;
	height: 7rem;
	line-height: 7rem;
	border-bottom: 3px solid var(--primary);
	background: white;

	color: var(--text-main);
	text-align: center;
	font-weight: bold;
	text-transform: uppercase;

	cursor: pointer;
	transition: ease-in-out;

	transition: 0.3s ease-in-out;
}
/* custom module style */

.tabmenu-btn-group a.btn-main-ef:hover,
.tabmenu-btn-group a.active {
	background: white;
	color: white;
}

.tabmenu-btn-group a.btn-main-ef::before {
	border-radius: 0;
	background: var(--primary);
}

.btn-main-ef:hover::before,
.tabmenu-btn-group a.active::before {
	width: 100%;
	left: 0px;
	right: auto
}
/* content */
.tapmenu-content {
	padding-top: 4rem;
}
.tapmenu-container {
}
.content-title {
	margin-bottom: 4rem;
}
.content-title h2{
	font-size: 5.5rem;
	line-height: 6.5rem;
	font-weight: 900;
}
.content-title h4{
	font-size: 5.5rem;
	line-height: 6.5rem;
	font-weight: 400;
}
.content-main {
	margin-bottom: 3.5rem;
}
.content-main p {
	line-height: 2.8rem;
	font-size: 1.5rem;
	color: var(--text-sub);
}

/* content-list */
.content-list {}
.content-list li {
  display: flex;
  align-items: center;
	margin-bottom: 1.5rem;
}
.content-list i.icon-check {
	width: 3.5rem;
	height: 3.5rem;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	border: 2px solid #ededed;
	margin-right: 1.5rem;

	color: #907cf4;
}
.content-list span {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* content img */
.content-img {
	position: relative;
	height: 43.5rem;
}
.content-img > img {
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.content-img-sub {
	position: absolute;
	bottom: -10%;
	left: -10%;
	width: 22rem;
	height: 22rem;
}
.content-img-sub img {
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.content-img-effect {
	position: absolute;
	right: -10%;
	bottom: -10%;
}

/* transition */
.fade-enter-active {
  transition: all 1s ease;
}
.fade-enter {
  transform: translateX(10px);
  opacity: 0;
}
</style>