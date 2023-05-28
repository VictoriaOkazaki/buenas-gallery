<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <div class="burger">
                    <div id="burger-line-1"></div>
                    <div id="burger-line-2"></div>
                </div>
                <nav class="menu">
                    <AppLink class="menu__item" v-for="link in links" :link="link"></AppLink>
                </nav>
                <NuxtLink to="/">
                    <img src="../assets/images/logo.png" alt="logo" class="logo">
                </NuxtLink>
                <a class="cart">
                    <img class="cart__img" src="../assets/images/cart.svg" alt="cart">
                    <div class="cart__amount">2</div>
                </a>
                <ul class="header__info">
                    <li class="header__info-item">
                        <span>We’re open everyday from 10:00 to 1:00</span>
                    </li>
                    <li class="header__info-item">
                        <a href="tel:+12055381468" class="header__info-link">+1 205-538-1468</a>
                    </li>
                    <li class="header__info-item">
                        <a href="#" class="header__info-link">Brentwood, 3601 Farm Meadow Drive</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script setup>
const links = [
    {
        title: 'Menu',
        href: '#menu'
    },
    {
        title: 'Books',
        href: '#books'
    },
    {
        title: 'Arts',
        href: '#arts'
    },
    {
        title: 'Gallery',
        href: '#gallery'
    },
    {
        title: 'Contacts',
        href: '#contacts'
    }
];
</script>

<style lang="scss" scoped>
.burger {
    display: none;
}

.header {
    border-bottom: 1px solid $text-color;

    &__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-left: 1px solid $text-color;
        padding: 25px 0 15px;
    }

    &__info-item,
    &__info-link {
        font-family: 'Delius Swash Caps', cursive;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: $text-color;

        &:nth-child(2) {
            margin: 10px 0;
        }
    }

    &__info-link {
        text-decoration: underline;
    }
}

.menu {
    margin-left: 142px;

    &__item {
        margin-right: 30px;
        font-family: 'Delius Swash Caps', cursive;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: $text-color;

        &:hover,
        &:active {
            color: $acsent-color;
        }

        &:last-child {
            margin-right: 0;
        }
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
    .menu {
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

    .header__info {

        &-item,
        &-link {
            font-size: 18px;
            line-height: 23px;

            &:nth-child(2) {
                margin: 6px 0;
            }
        }
    }

    .logo {
        width: 106px;
        height: 73px;
    }
}

@media (max-width: 1200px) {
    .header__info {

        &-item,
        &-link {
            font-size: 14px;
            line-height: 17px;
        }
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

    .menu {
        display: none;
    }

    .logo {
        width: 106px;
        height: 73px;
    }
}

@media (max-width: 768px) {
    // .burger {
    //     margin-left: 30px;
    // }

    .cart {
        &__img {
            width: 21px;
            height: 20px;
        }

        &__amount {
            width: 15px;
            height: 15px;
            font-size: 8px;
            line-height: 10px;
        }
    }

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