<template>
    <div id="app-count">
        <div class="wrap">
            <div class="count-container">
                <div class="col-lg-4">
                    <div class="count-item">
                        <div class="count-img">
                            <img src="../assets/count/icon1.png" alt="" />
                        </div>
                        <h2>402+</h2>
                        <span>project Complate</span>
                    </div>
                </div>
                
                <div class="col-lg-4">
                    <div class="count-item">
                        <div class="count-img">
                            <img src="../assets/count/icon2.png" alt="" />
                        </div>
                        <h2>365+</h2>
                        <span>Global Partner</span>
                    </div>
                </div>
                
                <div class="col-lg-4">
                    <div class="count-item">
                        <div class="count-img">
                            <img src="../assets/count/icon3.png" alt="" />
                        </div>
                        <h2>753+</h2>
                        <span>Awards Winning</span>
                    </div>
                </div>
                
                <div class="col-lg-4">
                    <div class="count-item">
                        <div class="count-img">
                            <img src="../assets/count/icon4.png" alt="" />
                        </div>
                        <h2>862+</h2>
                        <span>Active Volunteer</span>
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
#app-count {
    padding: 13rem 0;
    background: var(--text-dark) url(../assets/count/bg.png) no-repeat bottom
        center;
    color: var(--text-light);
}
.count-container {
    display: flex;
    justify-content: center;
}
.count-item {
    text-align: center;
}
.count-img {
    margin-bottom: 4rem;
}
.count-item h2 {
    font-size: 5.5rem;
    margin-bottom: 2.5rem;
}
.count-item span {
    font-weight: bold;
}
</style>
