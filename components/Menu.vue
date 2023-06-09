<template>
    <section class="menu" id="menu">
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
                <div class="menu__slider">
                    <Slider :slides="slides" :getSlidesPerView="getSlidesPerView">
                        <template v-slot="slotProps">
                            <div class="menu__slider-imgs" >
                                <MenuSliderItem v-for="slideItem in slotProps.slides" :item="slideItem" />
                            </div>
                        </template>

                        <template v-slot:pagination="slotProps">
                            <div class="slider-points">
                                <Ellipse :slides-count="slotProps.slidesCount" :active-index="slotProps.activeIndex"
                                    :goTo="slotProps.goToSlide" />
                            </div>
                        </template>
                    </Slider>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
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

const getSlidesPerView = (windowWidth) => {
    let slidesPerView = 2
    if (windowWidth > 500) {
        slidesPerView = 3
    }
    if (windowWidth > 1200) {
        slidesPerView = 4
    }
    return slidesPerView
}

const slides = [
    {
        src: 'images/menu/good-1.webp',
        title: 'South donut',
        price: '5.6',
        alt: 'donut'
    },
    {
        src: 'images/menu/good-2.webp',
        title: 'Cherry croisant',
        price: '3.8',
        alt: 'croissant'
    },
    {
        src: 'images/menu/good-3.webp',
        title: 'Granny’s cake',
        price: '10.8',
        alt: 'cake'
    },
    {
        src: 'images/menu/good-4.webp',
        title: 'Buenas mochis',
        price: '7.6',
        alt: 'mochi'
    },
    {
        src: 'images/menu/good-1.webp',
        title: 'South donut',
        price: '5.6',
        alt: 'donut'
    },
    {
        src: 'images/menu/good-2.webp',
        title: 'Cherry croisant',
        price: '3.8',
        alt: 'croissant'
    },
    {
        src: 'images/menu/good-3.webp',
        title: 'Granny’s cake',
        price: '10.8',
        alt: 'cake'
    },
    {
        src: 'images/menu/good-4.webp',
        title: 'Buenas mochis',
        price: '7.6',
        alt: 'mochi'
    },
    {
        src: 'images/menu/good-1.webp',
        title: 'South donut',
        price: '5.6',
        alt: 'donut'
    },
    {
        src: 'images/menu/good-2.webp',
        title: 'Cherry croisant',
        price: '3.8',
        alt: 'croissant'
    },
    {
        src: 'images/menu/good-3.webp',
        title: 'Granny’s cake',
        price: '10.8',
        alt: 'cake'
    },
    {
        src: 'images/menu/good-4.webp',
        title: 'Buenas mochis',
        price: '7.6',
        alt: 'mochi'
    },
    {
        src: 'images/menu/good-1.webp',
        title: 'South donut',
        price: '5.6',
        alt: 'donut'
    },
    {
        src: 'images/menu/good-2.webp',
        title: 'Cherry croisant',
        price: '3.8',
        alt: 'croissant'
    },
    {
        src: 'images/menu/good-3.webp',
        title: 'Granny’s cake',
        price: '10.8',
        alt: 'cake'
    },
    {
        src: 'images/menu/good-4.webp',
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
        transition: all .4s ease-out;

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
}

@media (max-width: 550px) {
    .menu {
        &__slider-imgs {
            justify-content: space-around;
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
    .slider-points {
        position: absolute;
        right: 10px;
    }
}
@media (max-width: 400px) {
    .slider-points {
        right: 0;
        height: 86px;
    }
}
</style>