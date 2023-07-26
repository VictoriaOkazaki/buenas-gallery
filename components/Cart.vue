<template>
    <div v-show="isShowGoodCart" class="popup" v-click-outside="clickOutside">
        <div class="popup__inner popup__inner-2">
            <div class="popup__goods" v-if="goodCart.length" v-for="good in goodCart">
                <div class="popup__good" >
                    <img :src="good.src" :alt="good.alt" class="popup__good-img">
                    <div class="popup__good-desc">
                        <span class="popup__good-title text">{{ good.title }}</span>
                        <div class="popup__good-counter">
                            <button class="minus" @click="minusCount(good)"></button>
                            <span class="popup__good-amount text">{{ good.count }}</span>
                            <button class="plus" @click="addCount(good)">
                                <img src="../assets/images/plus.svg" alt="plus" class="plus-img">
                            </button>
                        </div>
                        <span class="popup__good-price text">{{ roundPrice(good.price * good.count) }}$</span>
                    </div>
                </div>
            </div>
            <div class="empty-cart" v-else>
                    <span class="empty-cart__span label">Cart is empty</span>
                </div>
            <div class="popup__total">
                <span class="popup__total-title title">Total:</span>
                <span class="popup__total-price title">{{ roundPrice(totalCartPrice) }}$</span>
            </div>
            <a class="popup__add btn-1" @click="placeOrder">Place order</a>
            <button class="close" @click="closeCart">
                <img src="../assets/images/close.svg" alt="close">
            </button>
        </div>
    </div>
</template>

<script setup>
const { clickOutside } = usePopupClickOutside(isShowGoodCart, closeCart)

const addCount = (good) => {
    good.count += 1
}
const minusCount = (good) => {
    if (good.count === 1) return
    good.count -= 1
}

const router = useRouter()
const placeOrder = () => {
    closeCart()
    if (goodCart.value.length !== 0) {
        router.push('/order')
    }
}
</script>

<style lang="scss" scoped>
span {
    color: $text-color-light;
}
.empty-cart {
    width: 100%;
    display: flex;
    justify-content: center;
    transform: translateY(100px);
}

.minus {
    height: 1px;
    width: 24px;
    background-color: $acsent-color;
}

.plus {
    padding: 0;
}

.plus-img {
    width: 24px;
    height: 24px;
}

.popup {
    &__inner {
        align-items: flex-start;
        padding-top: 90px;
    }

    &__goods {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 60px 0;
        height: calc(126px * 2 + 60px);
        overflow-y: scroll;
        padding-right: 30px;

        &::-webkit-scrollbar {
            width: 2px;

        }

        &::-webkit-scrollbar-thumb {
            background-color: $acsent-color;
            border-radius: 40px;
        }
    }

    &__good {
        display: flex;
    }

    &__good-img {
        width: 93px;
        height: 126px;
        margin-right: 30px;
    }

    &__good-desc {
        display: flex;
        flex-direction: column;
    }

    &__good-counter {
        margin: 5px 0;
        display: flex;
        align-items: center;
    }

    &__good-amount {
        margin: 0 15px;
    }

    &__good-price {
        color: $acsent-color;
    }

    &__total {
        position: absolute;
        left: 140px;
        bottom: calc(30px + (90px / 2 - 58px / 2));
    }

    &__total-price {
        color: $acsent-color;
        margin-left: 30px;
    }
}

@media (max-width: 1600px) {
    .popup {
        &__total {
            left: 80px;
        }
    }
}

@media (max-width: 1400px) {
    .popup {
        &__total {
            left: auto;
            right: calc(260px + 80px + 60px);
            bottom: calc(30px + (90px / 2 - 50px / 2));
        }
    }
}

@media (max-width: 1200px) {
    .popup {
        &__inner-2 {
            padding: 120px 60px 0 60px;
        }

        &__goods {
            grid-gap: 50px 0;
            height: 254px;
        }

        &__good-img {
            width: 73px;
            height: 98px;
        }

        &__good-counter {
            margin: 3px 0;
        }

        &__total {
            right: calc(260px + 30px + 60px);
        }
    }
}

@media (max-width: 900px) {
    .popup {
        &__inner-2 {
            padding: 90px 60px 0 120px;
        }

        &__goods {
            grid-template-columns: repeat(1, 1fr);
            height: 320px;
        }

        &__good-amount {
            margin: 0 10px;
        }

        &__good-img {
            width: 63px;
            height: 85px;
        }

        &__total {
            right: calc(200px + 30px + 60px);
            bottom: calc(30px + (71px / 2 - 34px / 2));
        }

        &__total-price {
            margin-left: 20px;
        }
    }
}

@media (max-width: 768px) {
    .minus {
        width: 18px;
    }

    .plus-img {
        width: 18px;
        height: 18px;
    }

    .popup {
        &__goods {
            height: 360px;
        }

        &__total {
            right: calc(140px + 30px + 60px);
            bottom: calc(30px + (55px / 2 - 29px / 2));
        }
    }
}

@media (max-width: 700px) {
    .popup {
        &__inner-2 {
            padding: 90px 60px 0 60px;
        }

        &__goods {
            grid-gap: 40px 0;
        }

        &__good-img {
            margin-right: 20px;
        }

        &__total {
            right: calc(140px + 20px + 60px);
            bottom: calc(20px + (55px / 2 - 29px / 2));
        }

        &__total-price {
            margin-left: 15px;
        }
    }
}

@media (max-width: 500px) {
    .popup {
        &__inner-2 {
            padding: 80px 30px 0 30px;
        }

        &__total {
            right: calc(140px + 20px + 30px);
        }
    }
}

@media (max-width: 400px) {
    .popup {
        &__inner-2 {
            padding: 80px 30px 0 30px;
        }

        &__goods {
            padding-right: 8px;
        }

        &__total {
            right: calc(140px + 10px + 15px);
            bottom: calc(10px + (55px / 2 - 29px / 2));
        }
    }
}

@media (max-width: 320px) {
    .popup {
        &__total {
            right: 150px;
        }
    }
}</style>