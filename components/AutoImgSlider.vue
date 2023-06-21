<template>
    <div>
        <Transition name="opacity" @after-enter="onAfterEnter" @after-leave="onAfterLeave">
            <img v-show="isShowImg" :src="image.src" :alt="image.alt">
        </Transition>
    </div>
</template>

<script setup>
const props = defineProps({
    images: {
        required: true,
        type: Array
    }
})
let imgIndex = 0
const isShowImg = ref(true)
const image = ref(props.images[imgIndex])

let timeout
const hideImage = () => {
    timeout = setTimeout(() => {
        isShowImg.value = false
    }, 2000)
}

onMounted(() => {
    hideImage()
})

onBeforeUnmount(() => {
    clearTimeout(timeout)
})


const onAfterEnter = () => {
    hideImage()
}

const onAfterLeave = async () => {
    imgIndex = (imgIndex + 1) % props.images.length
    image.value = props.images[imgIndex]
    await nextTick()
    isShowImg.value = true
}
</script>

<style lang="scss" scoped>
.opacity-enter-active,
.opacity-leave-active {
    transition: opacity 1.5s ease-out;
}

.opacity-enter-from {
    opacity: 0;
}
.opacity-leave-to {
  opacity: 0.15;
}
</style>