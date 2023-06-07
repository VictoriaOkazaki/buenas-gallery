<template>
    <swiper :modules="[Virtual, Controller]" virtual @swiper="setControlledSwiper" @slideChange="onSlideChange">
        <swiper-slide v-for="(slideGroup, index) in sliderItemsGroups" :key="index" :virtualIndex="index">  
            <slot :slides="slideGroup" />
        </swiper-slide>
    </swiper>

    <slot name="pagination" :slides-count="sliderItemsGroups.length" :active-index="activeIndex" :goToSlide="goToSlide" />
</template>

<script setup>
import 'swiper/css';
import { Virtual, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useWindowSizes } from '~/hooks/useWindowSizes';

const props = defineProps({
    getSlidesPerView: {
        required: true,
        type: Function
    },
    slides: {
        required: true,
        type: Array
    }
})

const controlledSwiper = ref(null);
const setControlledSwiper = (swiper) => {
    controlledSwiper.value = swiper;
};

const activeIndex = ref(0)

const onSlideChange = () => {
    activeIndex.value = controlledSwiper.value.activeIndex
}

const goToSlide = (index) => {
    controlledSwiper.value.slideTo(index)
}

const { width: windowWidth } = useWindowSizes()

const sliderItemsGroups = computed(() => {
    const slidesPerView = props.getSlidesPerView(windowWidth.value)
    const groups = []
    let group = []
    for (const item of props.slides) {
        group.push(item)
        if (group.length === slidesPerView) {
            groups.push(group)
            group = []
        }
    }
    if (groups.length > 4) {
        return groups.slice(0, 4)
    }
    return groups
})
</script>

<style lang="scss" scoped>
.da {}
</style>