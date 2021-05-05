<template>
    <div id="app-category">
        <div class="title-group">
            <div class="title-top">Features Categories</div>
            <div class="title-main">Explore Our Crowd Founding</div>
            <div class="title-sub">Features Categories</div>
        </div>
        <div class="category-container">
            <div class="wrap">
                <div class="category-item">
                    <div class="category-content">
                        <div class="category-img">
                            <img src="../assets/category/dish.png" alt="food" />
                        </div>
                        <div class="category-text">Raising Food</div>
                    </div>
                </div>

                <div class="category-item">
                    <div class="category-content">
                        <div class="category-img">
                            <span class="circle"></span>
                            <span class="circle"></span>
                            <img
                                src="../assets/category/open-book.png"
                                alt="food"
                            />
                        </div>
                        <div class="category-text">Kids Education</div>
                    </div>
                </div>

                <div class="category-item">
                    <div class="category-content">
                        <div class="category-img">
                            <img
                                src="../assets/category/computer.png"
                                alt="food"
                            />
                        </div>
                        <div class="category-text">Web Design</div>
                    </div>
                </div>

                <div class="category-item">
                    <div class="category-content">
                        <div class="category-img">
                            <img
                                src="../assets/category/stethoscope.png"
                                alt="food"
                            />
                        </div>
                        <div class="category-text">Medical Health</div>
                    </div>
                </div>

                <div class="category-item">
                    <div class="category-content">
                        <div class="category-img">
                            <img src="../assets/category/icon.png" alt="food" />
                        </div>
                        <div class="category-text">Technology</div>
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
#app-category {
    padding: 12.5rem 0;
    background: #f6f3f1 url('../assets/category/Bg.png') no-repeat right top;
    background-size: 35rem;
}
.title-group {
    text-align: center;
    margin-bottom: 9rem;
}
.title-top {
    color: var(--primary);
    font-size: 1.8rem;
    margin-bottom: 3.5rem;
}
.title-top::before,
.title-top::after {
    content: '';
    display: inline-block;
    width: 50px;
    height: 2px;
    background: var(--primary);
    margin-right: 1.5rem;
    vertical-align: middle;
}
.title-top::after {
    margin-left: 1.5rem;
}
.title-main {
    color: var(--text-dark);
    font-size: 5.5rem;
    letter-spacing: -0.02em;
    line-height: 6rem;
    font-weight: 900;
    margin-bottom: 1.5rem;
}
.title-sub {
    color: var(--text-dark);
    font-size: 5.5rem;
    letter-spacing: -0.02em;
    font-weight: 300;
}

/* category  */
.category-container .wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.category-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 21rem;
    height: 20rem;
    margin-right: 4rem;
    margin-bottom: 4rem;
    border-radius: 1rem;
    background: white;
    transition: 0.3s ease-in-out;
}
.category-item:hover {
    transform: translateY(-1.5rem);
    background: var(--primary);
    color: var(--text-light);
}
.category-item:hover img {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(7deg)
        brightness(103%) contrast(101%);
}
.category-item:last-child {
    margin-right: 0;
}
.category-img {
    margin-bottom: 2rem;
}
.category-img img {
    display: block;
    margin: 0 auto;
    filter: invert(48%) sepia(45%) saturate(5244%) hue-rotate(128deg)
        brightness(102%) contrast(98%);
    transition: 0.3s ease-in-out;
}
.category-text {
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
}
</style>
