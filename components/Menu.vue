<template>
    <section class="menu">
        <div class="menu__title-cont">
            <h2 class="menu__title title">Our delicious menu</h2>
        </div>
        <div class="container">
            <div class="menu__inner">
                <div class="menu__top">
                    <a href="#" class="menu__btn btn-2">See all menu</a>
                    <p class="menu__text text">We differentiate ourselves from&nbsp;others by&nbsp;offering a&nbsp;large
                        variety of&nbsp;free range, organic, gluten&nbsp;free and&nbsp;vegan products.</p>
                </div>
                <ul class="menu__filters">
                    <li class="menu__filter label" v-for="filter in filters">{{ filter.title }}</li>
                </ul>
                <!--  -->
                <div class="menu__slider">
                    <swiper class="menu__slider-imgs" :modules="[Virtual, Controller]"
                        :slides-per-view="2" :slides-per-group="2" virtual :breakpoints="breakpoints"
                        :controller="{ control: controlledSwiper2 }"
                        @swiper="setControlledSwiper1"
                        >
                            <swiper-slide v-for="(slideItem, index) in sliderItems" :key="index"
                                :virtualIndex="index">
                                <MenuSliderItem :item="slideItem" />
                            </swiper-slide>
                    </swiper>
                    <!-- Pagination -->
                    <swiper class="slider-points" :modules="[Virtual, Controller, Pagination]"
                        :slides-per-view="2" :slides-per-group="2" virtual :breakpoints="breakpoints"
                        :controller="{ control: controlledSwiper1 }"
                        @swiper="setControlledSwiper2"
                        direction="vertical"
                        :pagination="{
                            clickable: true,
                            renderBullet,
                            bulletClass: 'ellipse',
                            bulletActiveClass: 'active'
                        }"
                        >
                            <swiper-slide v-for="(slideItem, index) in sliderItems" :key="index"
                                :virtualIndex="index">
                                <!-- <MenuSliderItem v-for="item in sliderItems" :item="item" /> -->
                            </swiper-slide>
                    </swiper>
                    <!-- <div class="menu__slider-imgs">
                        <MenuSliderItem v-for="item in sliderItems" :item="item" />
                    </div>
                    <div class="slider-points">
                        <Ellipse />
                    </div> -->
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { Virtual, Controller, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';

// For slider pagination
const controlledSwiper1 = ref(null);
const setControlledSwiper1 = (swiper) => {
    controlledSwiper1.value = swiper;
};
const controlledSwiper2 = ref(null);
const setControlledSwiper2 = (swiper) => {
    controlledSwiper2.value = swiper;
};

const renderBullet = function (index, className) {
    return `
        <div class="${className}">
            <svg class="el-svg" width="30" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="el-path"
                    d="M29.5 19.61C29.5 24.9251 27.8515 29.7185 25.2095 33.1726C22.5678 36.6262 18.9537 38.72 15 38.72C11.0463 38.72 7.43224 36.6262 4.79054 33.1726C2.14848 29.7185 0.5 24.9251 0.5 19.61C0.5 14.2949 2.14848 9.50147 4.79054 6.04741C7.43224 2.59383 11.0463 0.5 15 0.5C18.9537 0.5 22.5678 2.59383 25.2095 6.04741C27.8515 9.50147 29.5 14.2949 29.5 19.61Z"
                    stroke="#250C00" />
            </svg>
        </div>
    `
}

const filters = [
    {
        title: 'Coffee'
    },
    {
        title: 'Tea'
    },
    {
        title: 'Cocktails'
    },
    {
        title: 'Desserts'
    },
    {
        title: 'Foods'
    }
]

const breakpoints = {
    /* was 768 */
    1200: {
        slidesPerView: 4,
        slidesPerGroup: 4
    },
    500: {
        slidesPerView: 3,
        slidesPerGroup: 3
    }
}
const sliderItems = [
    {
        src: 'images/menu/good-1.png',
        title: 'South donut',
        price: '5.6',
        alt: 'donut'
    },
    {
        src: 'images/menu/good-2.png',
        title: 'Cherry croisant',
        price: '3.8',
        alt: 'croissant'
    },
    {
        src: 'images/menu/good-3.png',
        title: 'Granny’s cake',
        price: '10.8',
        alt: 'cake'
    },
    {
        src: 'images/menu/good-4.png',
        title: 'Buenas mochis',
        price: '7.6',
        alt: 'mochi'
    },
    {
        src: 'images/menu/good-1.png',
        title: 'South donut',
        price: '5.6',
        alt: 'donut'
    },
    {
        src: 'images/menu/good-2.png',
        title: 'Cherry croisant',
        price: '3.8',
        alt: 'croissant'
    },
    {
        src: 'images/menu/good-3.png',
        title: 'Granny’s cake',
        price: '10.8',
        alt: 'cake'
    },
    {
        src: 'images/menu/good-4.png',
        title: 'Buenas mochis',
        price: '7.6',
        alt: 'mochi'
    },
    {
        src: 'images/menu/good-1.png',
        title: 'South donut',
        price: '5.6',
        alt: 'donut'
    },
    {
        src: 'images/menu/good-2.png',
        title: 'Cherry croisant',
        price: '3.8',
        alt: 'croissant'
    },
    {
        src: 'images/menu/good-3.png',
        title: 'Granny’s cake',
        price: '10.8',
        alt: 'cake'
    },
    {
        src: 'images/menu/good-4.png',
        title: 'Buenas mochis',
        price: '7.6',
        alt: 'mochi'
    },
    {
        src: 'images/menu/good-1.png',
        title: 'South donut',
        price: '5.6',
        alt: 'donut'
    },
    {
        src: 'images/menu/good-2.png',
        title: 'Cherry croisant',
        price: '3.8',
        alt: 'croissant'
    },
    {
        src: 'images/menu/good-3.png',
        title: 'Granny’s cake',
        price: '10.8',
        alt: 'cake'
    },
    {
        src: 'images/menu/good-4.png',
        title: 'Buenas mochis',
        price: '7.6',
        alt: 'mochi'
    },
]
</script>

<style lang="scss" scoped>
.menu {
    margin-bottom: 120px;

    &__title-cont {
        display: flex;
        justify-content: flex-end;
    }

    &__title {
        text-align: right;
        padding-right: 197px;
        @extend %border;
        width: 49%;
        padding-bottom: 20px;
    }

    &__top {
        display: flex;
        justify-content: space-between;
        margin: 30px 0 90px;
    }

    &__text {
        width: 46%;
    }

    &__filters {
        margin-bottom: 60px;
        display: flex;
        justify-content: center;
    }

    &__filter {
        margin-right: 80px;
        cursor: pointer;

        &:last-child {
            margin-right: 0;
        }

        &:hover {
            color: $acsent-color;
        }
    }

    &__slider {
        display: flex;
        justify-content: space-between;
    }

    &__slider-imgs {
        display: flex;
        justify-content: space-between;
        width: 91%;
    }
}

@media (max-width: 1400px) {
    .menu {
        &__slider-imgs {
            width: 89%;
        }

        &__title {
            padding-right: 134px;
            width: 49.28%;
        }

        &__text {
            width: 59%;
        }
    }
}

@media (max-width: 1200px) {
    .menu {
        &__filters {
            margin-bottom: 50px;
        }

        &__title {
            padding-right: 81px;
            width: 57%;
        }

        &__text {
            width: 48%;
        }
    }
}

@media (max-width: 1000px) {
    .menu {
        margin-bottom: 100px;

        &__title {
            padding-right: 63px;
            width: 56%;
            padding-bottom: 10px;
        }

        &__top {
            margin: 30px 0 60px;
        }

        &__text {
            width: 49%;
        }

        &__filters {
            margin-bottom: 40px;
        }

        &__filter {
            margin-right: 50px;
        }

        &__slider-imgs {
            width: 89%;
        }
    }
}

.slider-points {
    width: 30px;
    height: 276px;
}
@media (max-width: 1400px) {
    .slider-points {
    height: 216px;
}
}
@media (max-width: 1000px) {
    .slider-points {
    height: 116px;
}
}
@media (max-width: 700px) {
    .menu {
        &__title {
            padding-right: 40px;
            width: 59%;
        }

        &__top {
            margin: 30px 0 40px;
            flex-direction: column;
        }

        &__btn {
            width: 41%;
            margin-bottom: 30px;
        }

        &__text {
            width: 100%;
        }

        &__filters {
            flex-direction: column;
            align-items: center;
        }

        &__filter {
            margin-right: 0;
            margin-bottom: 10px;

            &:last-child {
                margin-bottom: 0;
            }
        }

        &__slider-imgs {
            width: 100%;
        }
    }

    .slider-points {
        position: absolute;
        right: 10px;
    }
}

@media (max-width: 550px) {
    .menu {
        &__slider-imgs {
            justify-content: space-around;
        }
    }
}
</style>