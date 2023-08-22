<template>
    <section class="hero">
        <div class="container">
            <div class="hero__inner">
                <div class="hero-front">
                    <div class="offer">
                        <h1 class="offer__title">Buendía’s Gallery</h1>
                        <h2 class="title">Art&Books Cafe</h2>
                        <p class="offer__text text">Our cafe is&nbsp;a&nbsp;cozy coffee shop serving delicious organic
                            coffee&nbsp;&&nbsp;fresh cuisine. We have a&nbsp;large library and&nbsp;art exhibits inside.
                            The&nbsp;atmosphere in&nbsp;our&nbsp;cafe is&nbsp;inspiring.</p>
                        <OfferButtons />
                    </div>
                    <img src="../assets/images/hero-img.webp" alt="art" class="hero__img" >
                   
                </div>
                <div class="hero-bottom">
                    <div class="hero-bottom-antiborder"></div>
                    <img src="../assets/images/bottom-img-1.webp" alt="chair" class="hero-bottom__img-1">
                    <img src="../assets/images/bottom-img-2.webp" alt="books and coffee" class="hero-bottom__img-2">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.hero {
    position: relative;
    margin-bottom: 120px;
    &__inner {
        padding-left: 30px;
        padding-top: 10px;
        border-left: 1px solid $text-color;
    }

    &__img {
        width: 667px;
        position: absolute;
        right: 0;
        top: 0;
        animation: appear 1.5s ease-out;
    }

    &-bottom {
        display: flex;
        justify-content: space-between;
        margin-top: 60px;
        margin-left: -30px;
        position: relative;
    }

    &-bottom-antiborder {
        position: absolute;
        left: -2px;
        bottom: 0;
        background-color: $background-color;
        width: 260px;
        height: calc(50% - 15px);
    }

    &-bottom__img-1 {
        width: 630px;
        height: 430px;
        z-index: 5;
    }

    &-bottom__img-2 {
        width: 834px;
        height: 303px;
    }
}

.offer {
    width: 46%;

    &__title {
        font-family: 'Dancing Script', cursive;
        font-weight: 500;
        font-size: 72px;
        line-height: 86px;
        color: $text-color-2;
        margin-bottom: 10px;
    }

    &__text {
        margin: 30px 0 45px;
    }
}

@media (max-width: 1750px) {
    .hero {
        &-bottom__img-1 {
            width: 620px;
            height: 422px;
        }

        &-bottom__img-2 {
            width: 750px;
            height: 272px;
        }
    }
}

@media (max-width: 1650px) {
    .hero {
        &-bottom__img-1 {
            width: 472px;
            height: 321px;
        }

        &-bottom__img-2 {
            width: 595px;
            height: 218px;
        }
    }
}

@media (max-width: 1600px) {
    .hero {
        &__img {
            width: 587px;
        }
    }


    .offer {
        width: 50%;

        &__title {
            font-size: 64px;
            line-height: 77px;
        }

        &__text {
            margin: 20px 0 35px;
        }
    }
}

@media (max-width: 1300px) {
    .hero {
        margin-bottom: 100px;
        &__inner {
            padding-left: 20px;
        }

        &__img {
            width: 447px;
            transform: rotate(-90deg) scale(1, -1);
            transform-origin: 100% 0;
        }

        &-bottom {
            margin-left: -20px;
        }

        &-bottom__img-1 {
            width: 350px;
            height: 240px;
        }

        &-bottom__img-2 {
            width: 466px;
            height: 170px;
        }
    }

    .offer {
        width: 71%;
    }
}

@media (max-width: 1000px) {
    .hero {
        margin-bottom: 80px;
        &__img {
            width: 382px;
        }

        &-bottom__img-1 {
            width: 272px;
            height: 185px;
        }

        &-bottom__img-2 {
            width: 359px;
            height: 132px;
            margin-left: 10px;
        }
    }

    .offer {
        width: 69%;

        &__title {
            font-size: 48px;
            line-height: 58px;
        }

        &__text {
            margin: 25px 0 50px;
        }
    }
}
@media (max-width: 768px) {
.hero {
    margin-bottom: 60px;
    &__inner {
        border: none;
        padding-left: 0;
    }
    &__img {
        display: none;
    }
    &-bottom {
        margin-top: 40px;
        margin-left: 0;
        flex-direction: column;
    }
    &-bottom-antiborder {
        display: none;
    }
    &-bottom__img-1 {
        order: 2;
        margin-top: 25px;
    }
    &-bottom__img-2 {
        margin-left: 0;
        order: 1;
    }
}
.offer {
    width: 100%;
    &__title {
        font-size: 42px;
        line-height: 51px;
    }
}
}
</style>