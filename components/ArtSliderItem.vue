<template>
    <div class="art__slider-item">
        <h3 class="art__slider-title span">{{ item.title }}</h3>
        <div class="art__slider-imgs">
            <img :src="item.src1" :alt="item.alt1" class="art__slider-img">
            <img :src="item.src2" :alt="item.alt2" class="art__slider-img">
            <img :src="item.src3" :alt="item.alt3" class="art__slider-img">
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
.art__slider {
    &-item {
        margin-top: 20px;
    }

    &-title {
        color: $text-color-2;
    }

    &-imgs {
        margin-top: 90px;
        display: flex;
        justify-content: space-between;
    }

    &-img {
        width: 405px;
        height: 297px;
    }
}</style>