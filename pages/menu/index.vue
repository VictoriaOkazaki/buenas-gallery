<template>
    <Header />
    <section class="menu-categories">
        <div class="container">
            <div class="menu__inner" :class="{ 'transparent': !isShowContent }">
                <div class="loader" v-if="isShowLoader">
                    <span class="loader__element"></span>
                    <span class="loader__element"></span>
                    <span class="loader__element"></span>
                </div>
                <div class="menu__inner-content" :class="{ 'unvisible': !isShowContent }">
                    <div class="menu__inner-title-cont">
                        <h2 class="menu__inner-title title">Menu</h2>
                    </div>
                    <div class="menu__inner-list">
                        <NuxtLink class="menu__inner-item" :href="`menu/${filter.category}`" v-for="filter in filters">{{
                            filter.title }}</NuxtLink>
                    </div>
                </div>
                <ClientOnly>
                    <Transition name="appear" @after-enter="onAfterEnter" @after-leave="onAfterLeave" @enter="onEnter">
                        <img v-show="isShowImg" :onload="onImageLoad" src="../../assets/images/menu-page/menu-1.webp"
                            alt="breakfast" class="menu__inner-img">
                    </Transition>
                    <AutoImgSlider v-if="isShowSlider" class="menu__inner-img" :images="sliderImgs" />
                </ClientOnly>
            </div>
        </div>
    </section>
    <Footer />
</template>

<script setup>

import src1 from '../../assets/images/menu-page/menu-1.webp'
import src2 from '../../assets/images/menu-page/menu-2.webp'
import src3 from '../../assets/images/menu-page/menu-3.webp'

const sliderImgs = [
    {
        src: src1,
        alt: 'bre'
    },
    {
        src: src2,
        alt: 'brghghgje'
    },
    {
        src: src3,
        alt: 'brggggggggge'
    },
]
const { filters } = useGoods()

const isShowImg = ref(false)
const { width: windowWidth } = useWindowSizes()

const onAfterEnter = () => {
    isShowImg.value = false
}

const isShowLoader = ref(true)

const onEnter = () => {
    isShowLoader.value = false
}
const onImageLoad = () => {
    if (windowWidth.value <= 768) {
        isShowImg.value = true
    }
}

const isShowContent = ref(false)
const isShowSlider = ref(false)
onMounted(() => {
    if (windowWidth.value > 768) {
        isShowContent.value = true
        isShowLoader.value = false
        isShowSlider.value = true
    }
})
const onAfterLeave = () => {
    isShowContent.value = true
}
</script>

<style lang="scss" scoped>
.unvisible {
    visibility: hidden;
}

.transparent {
    background-color: #FFD4C1 !important;
}

/* loader */
.loader {
    color: $background-color;
    font-size: 40px;
}

.loader {
    background-color: $background-color;
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    z-index: 100000;
}

.loader__element {
    border-radius: 100%;
    border: 5px solid $acsent-color;
    margin: calc(5px*2);
}

.loader__element:nth-child(1) {
    animation: preloader .6s ease-in-out alternate infinite;
}

.loader__element:nth-child(2) {
    animation: preloader .6s ease-in-out alternate .2s infinite;
}

.loader__element:nth-child(3) {
    animation: preloader .6s ease-in-out alternate .4s infinite;
}

@keyframes preloader {
    100% {
        transform: scale(2);
    }
}

/* loader end */

.appear-enter-active {
    animation: appear 3s ease-out;
}

.appear-leave-active {
    animation: disappear 2s ease-out;
}

.menu {
    &-categories {
        margin: 120px 0 180px;
    }

    &__inner {
        padding: 90px 0;
        background-color: $text-color;
        border-radius: 40px;
        display: flex;
        justify-content: space-evenly;
        align-items: stretch;
        height: 85%;
    }

    &__inner-content {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: space-between;
    }

    &__inner-title-cont {
        padding: 0 37px 20px;
        border-bottom: 1px $text-color-light solid;
    }

    &__inner-title {
        color: $text-color-light;

    }

    &__inner-list {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        height: 77%;
        justify-content: space-between;
    }

    &__inner-item {
        color: $text-color-light;
        font-family: 'Dancing Script', cursive;
        font-weight: 400;
        font-size: 72px;
        line-height: 86px;

        &:hover,
        &:active {
            color: $acsent-color;
        }
    }

    &__inner-img {
        height: 650px;
        width: 484px;
        object-fit: cover;
        display: flex;
        align-items: center;
    }
}

@media (max-width: 1400px) {
    .menu {
        &-categories {
            margin: 100px 0 150px;
        }

        &__inner {
            align-items: center;
        }

        &__inner-content {
            height: 72vh;
        }

        &__inner-item {
            font-size: 54px;
            line-height: 65px;
        }

        &__inner-list {
            margin-top: 80px;
            height: 68%;
        }
    }
}

@media (max-width: 1200px) {
    .menu {
        &__inner-img {
            width: 484px;
        }
    }
}

@media (max-width: 950px) {
    .menu {
        &-categories {
            margin: 80px 0 120px
        }

        &__inner {
            padding: 60px 35px;
            justify-content: space-around;
        }

        &__inner-content {
            height: 68vh;
        }

        &__inner-title-cont {
            padding: 0 50px 10px;
        }

        &__inner-list {
            height: 75%;
        }

        &__inner-item {
            font-size: 48px;
            line-height: 58px
        }

        &__inner-img {
            width: 348px;
            height: 595px;
        }
    }
}

@media (max-width: 768px) {
    .menu {
        &-categories {
            margin: 60px 0 100px
        }

        &__inner {
            justify-content: center;
            position: relative;
        }

        &__inner-content {
            height: 85vh;
        }

        &__inner-list {
            height: 78%;
        }

        &__inner-item {
            font-size: 40px;
            line-height: 48px;
        }

        &__inner-img {
            width: 232px;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
}
</style>