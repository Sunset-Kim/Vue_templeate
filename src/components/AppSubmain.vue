<template>
  <div id="app-submain">
      <div class="submain-img">
          <slot></slot>
      </div>
      <div class="submain-text">
        <div class="wrap">
            <slot name="title">About Us</slot>
            <slot name="subtitle">Home > <span>About Us</span></slot>
        </div>

      </div>
  </div>
</template>

<script>
export default {
    data() {
        return{
           
        }
    },
    
}
</script>

<style>
#app-submain {
    position: relative;
    height: 52.5rem;
}
.submain-img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000;
}
.submain-img::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #08133b;
    opacity: 0.4;
    z-index: 1;
}
.submain-img img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
.submain-text {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    color: white;
    z-index: 99;
}
.submain-text h1 {
    font-size: 6.5rem;
    line-height: 8rem;
    margin-bottom: 3rem;
}
.submain-text h2 {
    font-size: 2.4rem;
    text-align: center;
}
.submain-text span {
    color: var(--secondary);
}
</style>