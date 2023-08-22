<template>
    <section class="art" id="arts">
        <div class="art__title-cont">
            <h2 class="art__title title">Latest art exhibits</h2>
        </div>
        <div class="container">
            <div class="art__inner">
                <div class="art__slider">
                    <Slider :slides="slides" :getSlidesPerView="getSlidesPerView">
                        <template v-slot="slotProps">
                            <div class="art__slider-cont">
                                <ArtSliderItem v-for="slideItem in slotProps.slides" :item="slideItem" />
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
                <div class="art__text-cont">
                    <p class="art__text text">There is nothing better than enjoying a&nbsp;cup&nbsp;of&nbsp;coffee and
                        appreciating some&nbsp;art. We&nbsp;frequently collaborate with&nbsp;local artists
                        to&nbsp;help&nbsp;them gain a&nbsp;little&nbsp;more visibility, and of&nbsp;course, to&nbsp;make
                        your&nbsp;experience just that little&nbsp;bit&nbsp;better.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const slides = [
    {
        title: 'Lucy Peck - Geometric inner universe',
        src1: 'images/art/art1-1.webp',
        src2: 'images/art/art1-2.webp',
        src3: 'images/art/art1-3.webp',
        alt1: 'Saturn in my vision',
        alt2: 'Geometric eye',
        alt3: 'Four geometric worlds'
    },
    {
        title: 'Lucy Peck - Geometric inner universe2',
        src1: 'images/art/art1-1.webp',
        src2: 'images/art/art1-2.webp',
        src3: 'images/art/art1-3.webp',
        alt1: 'Saturn in my vision',
        alt2: 'Geometric eye',
        alt3: 'Four geometric worlds'
    },
    {
        title: 'Lucy Peck - Geometric inner universe3',
        src1: 'images/art/art1-1.webp',
        src2: 'images/art/art1-2.webp',
        src3: 'images/art/art1-3.webp',
        alt1: 'Saturn in my vision',
        alt2: 'Geometric eye',
        alt3: 'Four geometric worlds'
    }
]

const getSlidesPerView = () => 1

</script>

<style lang="scss" scoped>
.art {
    &__title-cont {
        width: 86%;
        padding-bottom: 20px;
        padding-left: 43%;
        @extend %border;
    }

    &__inner {
        margin-bottom: 120px;
    }

    &__slider {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        position: relative;
    }

    &__slider-cont {
        display: flex;
        justify-content: space-between;
        width: 91%;
    }

    &__text-cont {
        margin-top: 90px;
        width: 53%;
        margin-left: calc((91%/3) + (91% - 405px * 3)/3 - 30px);
    }
}

.slider-points {
    width: 30px;
    height: 276px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    z-index: 1;
}

@media (max-width: 1700px) {
    .art {
        &__text-cont {
            width: 65%;
            margin-left: calc((91%/3) + (91% - 350px * 3)/3 - 30px);
        }
    }
}

@media (max-width: 1500px) {
    .art {
        &__text-cont {
            width: 65%;
            margin-left: calc((91%/3) + (91% - 300px * 3)/3 - 30px);
        }

        &__title-cont {
            padding-left: 41%;
        }
    }

    .slider-points {
        height: 216px;
    }
}

@media (max-width: 1200px) {
    .art {
        &__title-cont {
            padding-left: 45%;
            width: 90%;
        }

        &__text-cont {
            width: 49%;
            margin-top: 0;
            margin-left: calc((91%/2) + (91% - 300px * 2)/3 - 30px);
            transform: translateY(-113.5px);
        }
    }

    .slider-points {
        position: absolute;
        right: 0;
        top: 160px;
    }
}

@media (max-width: 900px) {
    .art {
        &__title-cont {
            width: 94%;
            padding-bottom: 10px;
            padding-left: 35.5%;
        }

        &__slider-cont {
            width: 100%;
        }

        &__text-cont {
            width: 46%;
            margin-left: calc((100%/2) + (100% - 300px * 2)/3 - 18px);
        }
    }

    .slider-points {
        right: -60px;
        top: 120px;
        height: 116px;
    }
}

@media (max-width: 800px) {
    .art {
        &__inner {
            margin-bottom: 100px;
        }

        &__title-cont {
            width: 88%;
            padding-left: 14%;
        }

        &__text-cont {
            width: 100%;
            margin-left: 0;
            transform: translateY(0);
        }
    }

    .slider-points {
        right: -40px;
        top: 80px;
    }
}

@media (max-width: 768px) {
    .slider-points {
        right: -20px;
    }
}

@media (max-width: 550px) {
    .slider-points {
        right: -30px;
        height: 86px;
        top: 120px;
    }
}

@media (max-width: 400px) {
    .slider-points {
        right: -50px;
        height: 86px;
        top: 80px;
    }
}</style>