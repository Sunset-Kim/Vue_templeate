<template>
    <div id="app-sidebar">
        <ul class="side-menu">
            <button v-on:click="close" class="btn-close">
                <i class="fas fa-times"></i>
            </button>
            <li>
                <a href="#none">
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a @click="toggleMenu('project')" href="#none">
                    <span>Project</span>
                    <i class="fas fa-chevron-right"></i>
                </a>
                <transition name="slide-fade">
                    <ul v-if="toggle === 'project'" class="depth2">
                        <li><a href="/">project1</a></li>
                        <li><a href="/">project2</a></li>
                        <li><a href="/">project3</a></li>
                    </ul>
                </transition>
            </li>
            <li>
                <a @click="toggleMenu('events')" href="#none">
                    <span>Events</span>
                    <i class="fas fa-chevron-right"></i>
                </a>
                <transition name="slide-fade">
                    <ul v-if="toggle === 'events'" class="depth2">
                        <li><a href="/">Event1</a></li>
                        <li><a href="/">Event2</a></li>
                        <li><a href="/">Event3</a></li>
                    </ul>
                </transition>
            </li>
            <li>
                <a @click="toggleMenu('news')" href="#none">
                    <span>News</span>
                    <i class="fas fa-chevron-right"></i>
                </a>
                <transition name="slide-fade">
                    <ul v-if="toggle === 'news'" class="depth2">
                        <li><a href="/">news1</a></li>
                        <li><a href="/">news2</a></li>
                        <li><a href="/">news3</a></li>
                    </ul>
                </transition>
            </li>
            <li>
                <a @click="toggleMenu('pages')" href="#none">
                    <span>Pages</span>
                    <i class="fas fa-chevron-right"></i>
                </a>
                <transition name="slide-fade">
                    <ul v-if="toggle === 'pages'" class="depth2">
                        <li><a href="/">Page1</a></li>
                        <li><a href="/">Page2</a></li>
                        <li><a href="/">Page3</a></li>
                    </ul>
                </transition>
            </li>
            <li>
                <a href="#none">
                    <span>Contact</span>
                </a>
            </li>
        </ul>
        <div @click="close" class="overlay"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            toggle: '',
        }
    },
    methods: {
        close() {
            this.$emit('close')
        },
        toggleMenu(msg) {
            if (this.toggle === msg) {
                this.toggle = ''
            } else {
                this.toggle = msg
            }
        },
    },
}
</script>

<style scoped>
#app-sidebar {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 99999;
}
@media screen and (min-width: 787px) {
    #app-sidebar {
        display: none;
    }
}
.overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
}
.btn-close {
    position: absolute;
    left: 2rem;
    top: 2rem;
    font-size: 2.4rem;
    color: white;
}
.btn-close:hover {
    color: var(--secondary);
}
.side-menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100vh;
    padding: 8rem 4rem;
    background: var(--text-dark);
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.4);
    z-index: 999999;
    color: white;
}
.side-menu li a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 4rem;
    font-size: 1.8rem;
    font-weight: bold;
    transition: 0.3s ease-in-out;
}
.side-menu li a:hover {
    color: var(--secondary);
}
.depth2 {
    padding-left: 2rem;
    margin-bottom: 2rem;
}
/* animation */
.slide-fade-enter-active {
    transition: all 0.3s ease;
}
.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateY(10px);
    opacity: 0;
}
@media screen and (max-width: 786px) {
    .side-menu {
        width: 250px;
    }
}
</style>
