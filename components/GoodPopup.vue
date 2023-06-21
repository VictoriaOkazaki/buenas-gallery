<template>
    <div v-show="isShowGoodPopup" class="popup" v-click-outside="clickOutside">
        <div v-show="isAddGood" class="">
            {{ goodPopupData }} <br>
            cart: {{ goodCart }}
            <button @click="closeGoodPopup">close</button>
            <button @click="addGoodToCart">add to cart</button>
        </div>
        <div v-show="!isAddGood" class="">
            <button @click="goToGoodCart">go to cart</button>
            <button @click="closeGoodPopup">continue</button>
        </div>
    </div>
</template>

<script setup>
const {clickOutside} = usePopupClickOutside(isShowGoodPopup, closeGoodPopup)

const isAddGood = ref(true)
watch(isShowGoodPopup, (value) => {
    if (!value) {
        isAddGood.value = true
    }
})
const addGoodToCart = () => {
    addToCart(goodPopupData.value, 1)
    isAddGood.value = false
}

const goToGoodCart = () => {
    closeGoodPopup()
    openCart()
}
</script>

<style lang="scss" scoped>
.popup {
    position: fixed;
    width: 1000px;
    height: 1000px;
    background-color: aqua;
}
</style>