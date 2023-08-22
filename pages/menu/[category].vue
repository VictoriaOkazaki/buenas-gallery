<template>
    <Header />
    <section class="category">
        <div class="container">
            <div class="category__inner">
                <div class="category__menu">
                    <div class="category__title-cont">
                        <h2 class="category__title title">{{ route.params.category }}</h2>
                    </div>
                    <div class="category__menu-list-cont">
                        <div class="category__menu-list">
                            <a v-for="good in filteredGoods" href="#img" class="category__menu-item" @click="activeGood = good"
                            @click.prevent="smoothScrollToSection('img')">
                                    <h3 class="category__menu-item-title label"
                                        :class="{ 'active': good.title === activeGood.title }">{{ good.title }}</h3>
                                    <div class="underline"></div>
                                    <span class="category__menu-item-price label">{{ good.price }}$</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="category__info">
                    <div class="category__info-img-cont">
                        <img :src="activeGood.src" :alt="activeGood.alt" class="category__info-img" id="img">
                        <button @click="showGoodPopup(activeGood)" class="category__info-add">
                            <img src="../../assets/images/plus.svg" alt="plus" class="plus">
                        </button>
                    </div>
                    <div class="category__info-desc">
                        <h3 class="category__info-title label">{{ activeGood.title }}</h3>
                        <span class="category__info-price label">{{ activeGood.price }}$</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
    <!-- <div v-for="good in filteredGoods"> <MenuSliderItem :item="good" /></div> -->
</template>

<script setup>
const { allGoods } = useGoods()
const { filteredGoods, category } = useFilteredGoods(allGoods)
const route = useRoute()
category.value = route.params.category
const activeGood = ref(filteredGoods.value[0])
</script>

<style lang="scss" scoped>
.underline {
    @extend %border;
    height: 1px;
    flex-grow: 1;
}

.active {
    color: $acsent-color;
}

.category {
    margin: 120px 0 180px;
    border-radius: 40px;

    &__inner {
        display: flex;
    }

    &__menu,
    &__info {
        background-color: $text-color-light;
    }

    &__menu {
        width: 50%;
        border-right: 1px solid $text-color;
        border-radius: 40px 0 0 40px;
        padding: 50px 0 180px;
    }

    &__title-cont {
        @extend %border;
        padding-left: 140px;
        padding-bottom: 20px;
    }

    &__title {
        &::first-letter {
            text-transform: capitalize;
        }
    }

    &__menu-list {
        padding: 0 90px;
        margin-top: 120px;
        width: 100%;
    }

    &__menu-item {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 30px;
        cursor: pointer;

        &:last-child {
            margin-bottom: 0;
        }
    }

    &__menu-item-title {
        margin-right: 6px;
    }

    &__menu-item-price {
        color: $text-color-2;
        margin-left: 6px;
    }

    &__info {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 0 40px 40px 0;
    }

    &__info-img-cont {
        position: relative;
    }

    &__info-img {
        width: 600px;
        height: 785px;
    }

    &__info-add {
        border: none;
        border-radius: 100%;
        padding: 32px;
        background-color: $background-color;
        position: absolute;
        bottom: 0;
        right: 35px;
    }

    &__info-desc {
        padding: 25px 50px 25px 0;
        background-color: $background-color;
        border-radius: 40px;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-top: 60px;
    }

    &__info-price {
        color: $acsent-color;
        margin-top: 10px;
    }
}

@media (max-width: 1600px) {
    .category {

        &__menu,
        &__info {
            padding-bottom: 150px;
        }

        &__menu {
            width: 56%;
        }

        &__title-cont {
            padding-left: 75px;
        }

        &__menu-list {
            padding: 0 70px;
            margin-top: 90px;
        }

        &__info {
            width: 44%;
        }

        &__info-img {
            width: 400px;
            height: 522px;
        }

        &__info-add {
            right: -12px;
        }

        &__info-desc {
            padding: 12px 50px 12px 0;
        }
    }
}
@media (max-width: 1200px) {
    .plus {
        width: 86px;
        height: 86px;
    }

    .category {
        margin: 100px 0 150px;

        &__inner {
            flex-direction: column;
            position: relative;
        }

        &__menu,
        &__info {
            padding: 0;
        }

        &__menu {
            width: 100%;
            order: 1;
            padding-top: 80px;
            border-right: none;
            border-radius: 0 0 40px 40px;
        }

        &__title-cont {
            padding-top: 40px;
            padding-left: 170px;
            width: 81%;
            position: absolute;
            top: 0;
        }

        &__menu-list-cont {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        &__menu-list {
            padding: 0;
            margin-top: 0;
            width: 62%;
            padding-bottom: 100px;
        }

        &__menu-item-title {
            margin-right: 15px;
        }

        &__menu-item-price {
            margin-left: 15px;
        }

        &__info {
            width: 100%;
            flex-direction: row;
            justify-content: center;
            padding-top: 170px;
            border-radius: 40px 40px 0 0;
        }

        &__info-img {
            width: 298px;
            height: 390px;
        }

        &__info-add {
            padding: 25px;
            right: -35px;
        }

        &__info-desc {
            width: 308px;
            margin-top: 0;
            margin-left: 60px;
        }
    }
}

@media (max-width: 1000px) {
    .plus {
        width: 56px;
        height: 56px;
    }

    .category {
        margin: 80px 0 120px;

        &__title-cont {
            padding-bottom: 10px;
            padding-left: 110px;
            width: 64%;
        }

        &__menu-list {
            width: 77%;
        }

        &__info-img {
            width: 239px;
            height: 322px;
        }

        &__info-add {
            padding: 20px;
            right: -25px;
        }

        &__info-desc {
            width: 260px;
            margin-left: 55px;
        }
    }
}

@media (max-width: 700px) {
    .plus {
        width: 32px;
        height: 32px;
    }

    .category {
        margin: 60px 0 100px;

        &__title-cont {
            padding-left: 60px;
            padding-top: 25px;
        }

        &__menu {
            padding-top: 50px;
        }

        &__menu-list {
            padding-bottom: 80px;
        }

        &__info {
            flex-direction: column;
            padding-top: 105px;
        }

        &__info-img {
            width: 197px;
            height: 261px;
        }

        &__info-add {
            padding: 16px;
            right: 0;
        }

        &__info-desc {
            width: 181px;
            margin-top: 30px;
            margin-left: 0;
        }
    }
}</style>