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
        width: 100%;
        padding: 0 5px;
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
}

@media (max-width: 1700px) {
    .art__slider {
        &-img {
            width: 350px;
            height: 257px;
        }
    }
}

@media (max-width: 1500px) {
    .art__slider {
        &-img {
            width: 300px;
            height: 220px;
        }
    }
}

@media (max-width: 1200px) {
    .art__slider {
        &-imgs {
            margin-top: 80px;
            flex-wrap: wrap;
        }

        &-img {
            width: 300px;
            height: 220px;

            &:last-child {
                margin-top: 50px;
            }
        }
    }
}

@media (max-width: 900px) {
    .art__slider {
        &-item {
            margin-top: 15px;
        }

        &-imgs {
            margin-top: 60px;
        }
    }
}

@media (max-width: 800px) {
    .art__slider {
        &-imgs {
            justify-content: center;
            margin-top: 40px;
        }

        &-img {
            width: 350px;
            height: 257px;
            margin-bottom: 30px;

            &:last-child {
                margin: 0 0 40px;
            }
        }
    }
}

@media (max-width: 500px) {
    .art__slider {
        &-img {
            width: 284px;
            height: 210px;
        }
    }
}</style>