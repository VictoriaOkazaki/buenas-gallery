<template>
    <Transition name="appear">
        <div v-show="isShowGoodPopup" class="popup" v-click-outside="clickOutside">
            <div v-show="isAddGood" class="popup__inner">
                <div v-if="goodPopupData" class="popup__content">
                    <img :src="goodPopupData.src" :alt="goodPopupData.alt" class="popup__good-img">
                    <div class="popup__good-info">
                        <div class="popup__good-desc">
                            <span class="popup__good-title label">{{ goodPopupData.title }}</span>
                            <span class="popup__good-price label">{{ goodPopupData.price }} x {{ initialCount }} -> {{ roundPrice(goodPopupData.price * initialCount) }}</span>
                        </div>
                        <p class="popup__good-ingredient text">Ingredient 1, Ingredient 2, Ingredient 3</p>
                        <div class="popup__good-amount">
                            <button class="popup__good-amount-change" @click="addCount">
                                <img src="../assets/images/plus.svg" alt="plus" class="popup__good-amount-change-plus">
                            </button>
                            <span class="popup__good-amount-count title">{{ initialCount }}</span>
                            <button class="popup__good-amount-change minus" @click="minusCount">
                            </button>
                        </div>
                    </div>
                </div>
                <button class="close" @click="closeGoodPopup">
                    <img src="../assets/images/close.svg" alt="close">
                </button>
                <button class="popup__add btn-1" @click="addGoodToCart">Add to cart</button>
            </div>

            <Transition name="appear">
                <div v-show="!isAddGood" class="popup__inner popup__inner-2">
                    <div class="popup__cont">
                        <span class="popup__text text">Item has&nbsp;been succsessfully added to&nbsp;cart</span>
                        <div class="popup__btns">
                            <button class="popup__btn btn-1" @click="goToGoodCart">Go to cart</button>
                            <button class="btn-2" @click="closeGoodPopup">Continue</button>
                        </div>
                    </div>
                    <button class="close" @click="closeGoodPopup">
                        <img src="../assets/images/close.svg" alt="close">
                    </button>
                </div>
            </Transition>
        </div>
    </Transition>
</template>

<script setup>
import { roundPrice } from '~/composables/round';

const { clickOutside } = usePopupClickOutside(isShowGoodPopup, closeGoodPopup)

const initialCount = ref(1)
const addCount = () => {
    initialCount.value += 1
}
const minusCount = () => {
    if (initialCount.value === 1) return
    initialCount.value -= 1
}

const isAddGood = ref(true)
watch(isShowGoodPopup, (value) => {
    if (!value) {
        isAddGood.value = true
        initialCount.value = 1
    }
})
const addGoodToCart = () => {
    addToCart(goodPopupData.value, initialCount.value)
    isAddGood.value = false
}

const goToGoodCart = () => {
    closeGoodPopup()
    openCart()
}

</script>

<style lang="scss" scoped>
.appear-enter-active {
    animation: fadeIn 1s ease-out;
}

.appear-leave-active {
    animation: fadeOut .5s ease-out;
}

.minus {
    height: 1px;
    width: 50px;
    background-color: $acsent-color;
}

.popup {
    &__content {
        display: flex;
        align-items: center;
    }

    &__good-img {
        width: 238px;
        height: 322px;
        margin-right: 80px;
    }

    &__good-desc {
        display: flex;
    }

    &__good-title,
    &__good-ingredient {
        color: $text-color-light;
    }

    &__good-ingredient {
        margin: 30px 0 60px;
    }

    &__good-price {
        margin-left: 60px;
    }

    &__good-price {
        color: $acsent-color;
    }

    &__good-amount {
        padding: 10px;
        border: 1px $text-color-light solid;
        border-radius: 40px;
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__good-amount-change-plus {
        width: 50px;
    }

    &__good-amount-count {
        color: $text-color-light;
        margin: 0 45px;
    }

    &__inner-2 {
        justify-content: center;
    }

    &__cont {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    &__btns {
        display: flex;
        justify-content: space-between;
        margin-top: 90px;
    }

    &__btn {
        margin-right: 60px;
    }

    &__text {
        color: $text-color-light;
        text-align: center;
    }
}

@media (max-width: 1600px) {
    .popup {
        &__good-price {
            margin-left: 50px;
        }
    }
}

@media (max-width: 1200px) {
    .popup {
        &__btns {
            margin-top: 80px;
        }
    }
}

@media (max-width: 1000px) {
    .minus {
        width: 35px;
    }

    .popup {
        &__good-img {
            width: 179px;
            height: 242px;
            margin-right: 80px;
        }

        &__good-ingredient {
            margin: 20px 0 50px;
        }

        &__good-price {
            margin-left: 40px;
        }
        &__good-amount-change-plus {
            width: 35px;
        }

        &__good-amount-count {
            margin: 0 30px;
        }

        &__btns {
            margin-top: 50px;
        }

        &__btn {
            margin-right: 30px;
        }
    }
}

@media (max-width: 700px) {
    .minus {
        width: 24px;
    }

    .popup {
        &__inner-2 {
            align-items: center;
        }

        &__content {
            flex-direction: column;
            align-items: initial;
        }

        &__good-info {
            margin-top: 20px;
        }

        &__good-ingredient {
            margin: 20px 0 40px;
        }

        &__good-price {
            margin-left: 30px;
        }

        &__good-amount-count {
            margin: 0 20px;
        }

        &__btns {
            margin-top: 40px;
        }

        &__btn {
            margin-right: 10px;
        }
        &__good-amount-change-plus {
            width: 24px;
        }
    }
}
</style>