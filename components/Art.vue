<template>
    <section class="art">
        <div class="art__title-cont">
            <h2 class="art__title title">Latest art exhibits</h2>
        </div>
        <div class="container">
            <div class="art__inner">
                <div class="art__slider">
                    <div class="art__slider-cont">
                        <ArtSliderItem v-for="item in sliderItems" :item="item" />
                    </div>
                    <div class="slider-points">
                        <Ellipse />
                    </div>
                </div>
                <div class="art__text-cont">
                    <p class="art__text text">There is nothing better than enjoying a&nbsp;cup&nbsp;of&nbsp;coffee and appreciating some&nbsp;art. We&nbsp;frequently collaborate with&nbsp;local artists to&nbsp;help&nbsp;them gain a&nbsp;little&nbsp;more visibility, and of&nbsp;course, to&nbsp;make your&nbsp;experience just that little&nbsp;bit&nbsp;better.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const sliderItems = [
    {
        title: 'Lucy Peck - Geometric inner universe',
        src1: 'images/art/art1-1.png',
        src2: 'images/art/art1-2.png',
        src3: 'images/art/art1-3.png',
        alt1: 'Saturn in my vision',
        alt2: 'Geometric eye',
        alt3: 'Four geometric worlds'
    },
]
</script>

<style lang="scss" scoped>
.art {
    &__inner {
        margin-bottom: 120px;
    }
    &__slider {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
    &__slider-cont {
        width: 91%;
    }
    &__text-cont {
        margin-top: 90px;
        width: 53%;
    }
}
</style>