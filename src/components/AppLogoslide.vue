<template>
  <div id="app-logoslide">
      <div class="wrap">
          <VueSlickCarousel v-bind="settings">
            <div class="slide-item">
                <img src="../assets/logoslide/logo1.png" alt="협력사로고1">
            </div>
            <div class="slide-item">
                <img src="../assets/logoslide/logo2.png" alt="협력사로고2">
            </div>
            <div class="slide-item">
                <img src="../assets/logoslide/logo3.png" alt="협력사로고3">
            </div>
            <div class="slide-item">
                <img src="../assets/logoslide/logo4.png" alt="협력사로고4">
            </div>
            <div class="slide-item">
                <img src="../assets/logoslide/logo5.png" alt="협력사로고5">
            </div>
        </VueSlickCarousel>
      </div>
      
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    components: { VueSlickCarousel },
    data: function(){
        return {
            settings: {
                "arrows": false,
                "centerMode": true,
                "centerPadding": "20px",
                "focusOnSelect": true,
                "dots": false,
                "infinite": true,
                "autoplay": true,
                "autoplaySpeed": 2000,
                "speed": 500,
                "slidesToShow": 3,
                "slidesToScroll": 1,
                "initialSlide": 0,
                "responsive": [
                    {
                    "breakpoint": 1024,
                    "settings": {
                        "slidesToShow": 3,
                        "slidesToScroll": 1,
                        "infinite": true,
                    }
                    },
                    {
                    "breakpoint": 880,
                    "settings": {
                        "slidesToShow": 2,
                        "slidesToScroll": 1,
                        "initialSlide": 2
                    }
                    },
                    {
                    "breakpoint": 600,
                    "settings": {
                        "slidesToShow": 1,
                        "slidesToScroll": 1,
                        "dots": true
                    }
                    }
                ]
            }
        }
    }
}
</script>

<style>
#app-logoslide {
    padding: 13rem 0;
}

.slide-item img {
    margin: 0 auto;
    filter: grayscale(1);
}
.slick-slide.slick-active.slick-center.slick-current img {
    filter: grayscale(0);
}
</style>