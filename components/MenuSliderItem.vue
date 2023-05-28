<template>
    <div class="menu__slider-item">
        <img :src="item.src" :alt="item.alt" class="menu__slider-img">
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
.menu {
    &__slider-item {
        width: 260px;
    }

    &__slider-img {
        margin-bottom: 30px;
        width: 260px;
        height: 340px;
    }

    &__slider-desc {
        background: $text-color-light;
        border-radius: 40px;
        padding: 12px 24px;
        display: flex;
        flex-direction: column;
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
    }
}

@media (max-width: 1000px) {
    .menu {
        &__slider-item {
            width: 166px;
        }

        &__slider-img {
            width: 166px;
            height: 210px;
        }

        &__slider-desc {
            padding: 12px 14px;
        }
    }
}

@media (max-width: 700px) {
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