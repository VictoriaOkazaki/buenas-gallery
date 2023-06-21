<template>
    <div v-show="isShowGoodCart" class="cart" v-click-outside="clickOutside">
        cart: {{ goodCart }}
    </div>
</template>

<script setup>
const {clickOutside} = usePopupClickOutside(isShowGoodCart, closeCart)
</script>

<style lang="scss" scoped>
.cart {
    width: 1000px;
    height: 1000px;
    background-color: #fff;
    position: fixed;
}
</style>