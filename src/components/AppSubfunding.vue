<template>
    <div id="app-subfunding">
        <div class="wrap">
            <div class="row">
                <div class="col-lg-12">
                    <div class="funding-container">
                        <div class="funding-img">
                            <img
                                src="../assets/header/slide03.jpg"
                                alt="펀딩메인이미지"
                            />
                        </div>
                        <div class="funding-text">
                            <span class="label-120 btn-primary">headphone</span>

                            <h1 class="funding-title">
                                Gen3 Airoha Air Pro 3 TWS Cancel Headphone
                            </h1>

                            <div class="funding-author">
                                <div class="author-img">
                                    <img
                                        src="../assets/project/author.png"
                                        alt="작성자이미지"
                                    />
                                </div>
                                <div class="author-text">
                                    <h4>Somalia D Silva</h4>
                                    <div class="author-info">
                                        <span class="author-info-count"
                                            >9 Campaigns</span
                                        >
                                        <span class="author-info-adress">
                                            <i
                                                class="fas fa-map-marker-alt"
                                            ></i>
                                            55 Main Street, New York
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="funding-progress">
                                <div class="progress-info">
                                    <span class="price"
                                        >Raised<strong>$8420</strong></span
                                    >
                                    <span class="percentage">95%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-bar-inner"></div>
                                </div>
                            </div>

                            <p class="funding-desc">
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusante doloremque lauda
                            </p>
                            <div class="funding-btn-group">
                                <div class="btn-150 btn-count">
                                    <i
                                        v-on:click="decrease"
                                        class="fas fa-chevron-left"
                                    ></i>

                                    <transition name="bound">
                                        <span> ${{ currentPrice }} </span>
                                    </transition>

                                    <i
                                        v-on:click="increase"
                                        class="fas fa-chevron-right"
                                    ></i>
                                </div>
                                <a
                                    herf="#none"
                                    class="btn-190 btn-secondary btn-main-ef"
                                    >donate-now</a
                                >
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
    data() {
        return {
            currentPrice: 5,
            maxPrice: 100,
            minPrice: 0,
            priceUnit: 1.5,
        }
    },
    methods: {
        increase() {
            let computedPrice = this.currentPrice + this.priceUnit
            if (computedPrice > this.maxPrice) {
                this.currentPrice = this.maxPrice
                return
            }
            this.currentPrice = computedPrice
        },
        decrease() {
            let computedPrice = this.currentPrice - this.priceUnit
            if (computedPrice < this.minPrice) {
                this.currentPrice = this.minPrice
                return
            }
            this.currentPrice = computedPrice
        },
    },
}
</script>

<style>
#app-subfunding {
    padding: 13rem 0;
    background: #f6f3f1 url(../assets/subpage/Bg-pattern.png);
}
</style>
