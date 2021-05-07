<template>
  <div id="app-subheader">

	<div class="header-top">
		<div class="header-wrap">
			<div class="top-left">

				<span>
					Welcome to Given. Most Popular Crowdfounding Agency
				</span>
				<button class="btn-100 btn-primary btn-main-ef">
					<i class="fas fa-lock-open"></i>
					sign up
				</button>
				</div>

			<div class="top-right">
				<span>
					<i class="far fa-envelope"></i>
					<a href="#">suppoert@gmail.com</a>
				</span>
				<span>
					<i class="fas fa-map-marker-alt"></i>
					<a href="#">250 Main Street, 2nd Floor, USA</a>
				</span>
			</div>

		</div>
		
	</div>

	<div class="gnb">
		<div class="header-wrap">

			<div class="logo">
				<img src="../assets/subpage/logo.png" alt="">
			</div>

			<ul class="depth1-menu">
				<li><a href="#none">
					Home
					</a></li>
				<li><a href="#none">
					Project
					<i class="fas fa-chevron-down"></i>
					</a></li>
				<li><a href="#none">
					Events
					<i class="fas fa-chevron-down"></i>
					</a></li>
				<li><a href="#none">
					News
					<i class="fas fa-chevron-down"></i>
					</a></li>
				<li><a href="#none">
					Pages
					<i class="fas fa-chevron-down"></i>
					</a></li>
				<li><a href="#none">
					Contact
					</a></li>
			</ul>

			<button class="btn-190 btn-secondary btn-main-ef">
				get a quote
			</button>

			<!-- sidebar 호출 -->
			<button v-on:click="toggleSide()" class="btn-trigger">
				<i class="fas fa-bars"></i>
			</button>

		</div>
		
	</div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* wrap */
.header-wrap {
	max-width: 1400px;
}
/* header-top */
.header-top {
	line-height: 5rem;
	background: #f6f3f1;
	color: var(--text-sub);
}
.header-top .header-wrap {
	display: flex;
	justify-content: space-between;
}
.top-left span{
	font-size: 1.6rem;
	margin-right: 1rem;
}
.btn-100 i {
	padding-right: 0.5rem;
}
.top-right {
	font-size: 1.4rem;
}
.top-right span {
	margin-right: 1rem;
}
.top-right span:last-child {
	margin-right: 0;
}
.top-right i {
	color: var(--primary);
	margin-right: 0.5rem;
}
	
/* gnb */
.gnb {
	position: relative;
	height: 9rem;
	background: white;
	z-index: 1;
}
.gnb .header-wrap {
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.logo img {
	display: block;
}
.depth1-menu {
	display: flex;
}
.depth1-menu > li > a {
	line-height: 9rem;
	height: 9rem;
	display: block;
	margin-right: 3rem;
	font-weight: bold;
	transition: 0.3s ease-in-out;
}
.depth1-menu > li > a:hover {
	color: var(--primary)
}

.depth1-menu > li > a > i {
	font-size: 1.3rem;
	margin-left: 0.3rem;
}
.btn-trigger {
    display: none;
    position: relative;
    color: var(--primary);
    font-size: 3rem;
}

@media screen and (max-width: 1024px) {
	.header-top {
		display: none;
	}
	.btn-190 {
		display: none;
	}
}
@media screen and (max-width: 786px) {
	.depth1-menu {
		display: none;
	}
	.btn-trigger {
		display: block;
	}
}
</style>