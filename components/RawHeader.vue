<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <div @click="switchBurger" class="burger">
                    <div id="burger-line-1"></div>
                    <div id="burger-line-2"></div>
                </div>
                <HeaderMenu class="header__menu" />
                <NuxtLink to="/">
                    <img src="../assets/images/logo.png" alt="logo" class="logo">
                </NuxtLink>
                <a class="cart">
                    <img class="cart__img" src="../assets/images/cart.svg" alt="cart">
                    <div class="cart__amount">2</div>
                </a>
                <HeaderInfo />
            </div>
        </div>
    </header>
</template>

<script setup>
const emit = defineEmits(['switchBurger'])
const switchBurger = () => {
    emit('switchBurger')
}
</script>

<style lang="scss" scoped>

.burger {
    display: none;
}

.header__menu {
    margin-left: 142px;
}

.header {
    border-bottom: 1px solid $text-color;
    z-index: 10;

    &__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-left: 1px solid $text-color;
        padding: 25px 0 15px;
    }
}

.cart {
    position: relative;

    &__amount {
        width: 28px;
        height: 28px;
        background-color: $acsent-color;
        border: 2px solid $background-color;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-radius: 100%;
        font-family: 'Delius Swash Caps', cursive;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: $text-color-light;
        position: absolute;
        top: 55%;
        left: 44%;
    }
}

.logo {
    width: 146px;
    height: 100px;
}

@media (max-width: 1400px) {
    .header__menu {
        margin-left: 60px;

        &__item {
            margin-right: 15px;
            font-size: 18px;
            line-height: 23px;
        }
    }

    .cart {
        &__img {
            width: 28px;
            height: 27px;
        }

        &__amount {
            width: 20px;
            height: 20px;
            font-size: 12px;
            line-height: 15px;
        }
    }

    .logo {
        width: 106px;
        height: 73px;
    }
}

@media (max-width: 1000px) {
    .burger {
        display: block;
        margin-left: 60px;
    }

    #burger-line-1,
    #burger-line-2 {
        background-color: $text-color;
        height: 0.5px;
    }

    #burger-line-1 {
        width: 60px;
        margin-bottom: 20px;

    }

    #burger-line-2 {
        width: 40px;
    }

    .header__menu {
        display: none;
    }

    .logo {
        width: 106px;
        height: 73px;
    }
}

@media (max-width: 768px) {

    .logo {
        width: 84px;
        height: 58px;
    }

    .header__inner {
        border: none;
    }

    .header__info {
        display: none;
    }

    .burger {
        margin-left: 0;
    }

    #burger-line-1 {
        width: 50px;
        margin-bottom: 15px;
    }

    #burger-line-2 {
        width: 30px;
    }
}</style>