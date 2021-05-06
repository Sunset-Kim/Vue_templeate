<template>
    <div id="app-footer">
        <div class="wrap">
            <nav class="footer-nav">
                <div class="col-lg-2 col-md-6 col-sm-6">
                    <ul class="list-menu">
                        <li class="list-title">Quick Links</li>
                        <li class="list-link"><a href="/">About us</a></li>
                        <li class="list-link"><a href="/">Event Details</a></li>
                        <li class="list-link"><a href="/">Fande Career</a></li>
                        <li class="list-link"><a href="/">Latest News</a></li>
                        <li class="list-link"><a href="/">Contact Us</a></li>
                    </ul>
                </div>

                <div class="col-lg-2 col-md-6 col-sm-6">
                    <ul class="list-menu">
                        <li class="list-title">Our Project</li>
                        <li class="list-link"><a href="/">Education</a></li>
                        <li class="list-link"><a href="/">Design</a></li>
                        <li class="list-link"><a href="/">Film & Video</a></li>
                        <li class="list-link"><a href="/">Technology</a></li>
                        <li class="list-link"><a href="/">Games</a></li>
                    </ul>
                </div>

                <div class="col-lg-3 col-md-12 col-sm-6">
                    <ul class="list-info">
                        <li class="list-title">Contact Info</li>
                        <li>
                            Perspi ciatis unde omnis iste nat error sit
                            voluptatem accusan
                        </li>
                        <li>
                            <a href="/">
                                <i class="fas fa-map-marker-alt"></i>
                                250 Main Street, 2nd Floor, USA</a
                            >
                        </li>
                        <li>
                            <a href="/">
                                <i class="far fa-envelope"></i>
                                support@gmail.com</a
                            >
                        </li>
                        <li>
                            <a href="/">
                                <i class="fas fa-headset"></i>
                                888 (0123) 456 79</a
                            >
                        </li>
                    </ul>
                </div>

                <div class="col-lg-5 col-md-12">
                    <ul class="list-info">
                        <li class="list-title">Newsletters</li>
                        <li>
                            Sed ut perspi ciatis unde omnis iste natus error sit
                            voluptatem accusantiu doloremque laudantiu totam
                        </li>
                        <form class="input-box">
                            <input
                                type="email"
                                class="input-email"
                                placeholder="Enter Your Email"
                            />
                            <button type="submit" class="btn-enter">
                                <i class="fas fa-arrow-right"></i>
                            </button>
                        </form>
                    </ul>
                </div>
            </nav>

            <div class="footer-copy">
                <div class="logo">
                    <img src="../assets/logo.png" alt="" />
                </div>
                <span> © 2020 Given. All Rights Reserved </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
#app-footer {
    padding-top: 8rem;
    background: var(--text-dark);
    color: var(--text-sub);
}
.footer-nav {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 6rem;
    border-bottom: 1px solid var(--text-sub);
}
.footer-nav ul {
    margin-bottom: 4rem;
}
.footer-nav ul li.list-title {
    font-size: 2rem;
    color: var(--text-light);
    margin-bottom: 3.5rem;
}
.footer-nav ul li {
    position: relative;
    font-size: 1.5rem;
    line-height: 3rem;
    transition: 0.3s ease-in-out;
}
.footer-nav ul li.list-link:hover {
    color: var(--secondary);
    padding-left: 1.5rem;
}
.footer-nav ul li.list-link::before {
    content: '\f054';
    position: absolute;
    left: 0;
    top: 50%;
    font-family: 'font awesome 5 free';
    font-weight: 900;
    transform: translateY(-50%);
    opacity: 0;
    visibility: hidden;
    transition: 0.3s ease-in-out;
}
.footer-nav ul li:hover::before {
    opacity: 1;
    visibility: visible;
}
.list-info li a i {
    color: var(--secondary);
    padding-right: 0.5rem;
}
.list-info .input-box {
    width: fit-content;
    margin-top: 4rem;
}
.list-info .input-box .input-email {
    width: 28rem;
    height: 5.5rem;
}
.list-info .input-box .btn-enter {
    width: 35px;
    height: 35px;
    right: 1rem;
}
.footer-copy {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
}
.footer-copy span {
    margin-top: 4rem;
}
</style>
