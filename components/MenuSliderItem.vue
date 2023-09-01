<template>
    <div class="menu__slider-item" @click="showGoodPopup(item)">
        <img :src="item.src" :alt="item.alt" class="menu__slider-img">
        <img class="plus" src="../assets/images/plus.svg" alt="plus">
        <div class="menu__slider-desc">
            <span class="menu__slider-title label">{{ item.title }}</span>
            <span class="menu__slider-price label">{{ item.price }} $</span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    item: {
        required: true
    }
})
</script>

<style lang="scss" scoped>
.plus {
    display: none;
}
.menu__slider-item:hover {
    .menu__slider-img {
        opacity: .4;
    }
    .plus {
        display: block;
        position: absolute;
        bottom: 50%;
        left: calc(50% - 100px/2);
    }
}
.menu {
    &__slider-item {
        width: 260px;
        padding: 0 5px;
        cursor: pointer;
        position: relative;
    }

    &__slider-img {
        margin-bottom: 30px;
        width: 260px;
        height: 340px;
        transition: all .8s ease-out;
    }

    &__slider-desc {
        background: $text-color-light;
        border-radius: 40px;
        padding: 12px 24px;
        height: 120px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    &__slider-price {
        margin-top: 10px;
        color: $acsent-color;
    }
}

@media (max-width: 1400px) {
    .menu__slider {
        &-item {
            width: 222px;

            &:nth-child(4) {
                display: none;
            }
        }

        &-img {
            width: 222px;
            height: 292px;
            margin-bottom: 20px;
        }
        &-desc {
            height: 100px;
        }
    }
}

@media (max-width: 1000px) {
    .menu__slider-item:hover {
    .plus {
        width: 50px;
        bottom: 60%;
        left: calc(50% - 50px/2);
    }
}
    .menu {
        &__slider-item {
            width: 166px;
        }

        &__slider-img {
            width: 166px;
            height: 210px;
        }

        &__slider-desc {
            height: 80px;
        }
    }
}

@media (max-width: 700px) {
    .menu__slider-item:hover {
    .plus {
        bottom: 55%;
    }
}
    .menu {
        &__slider-item {
            width: 140px;
        }

        &__slider-img {
            width: 140px;
            height: 184px;
            margin-bottom: 8px;
        }

        &__slider-desc {
            padding: 10px 10px;
        }
    }
}

@media (max-width: 550px) {
    .menu__slider {
        &-item {
            &:nth-child(3) {
                display: none;
            }
        }
    }
}
</style>