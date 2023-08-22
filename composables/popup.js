export const isShowGoodPopup = ref(false)
export const goodPopupData = ref(null)

export const showGoodPopup = (good) => {
    isShowGoodPopup.value = true
    goodPopupData.value = good
}
export const closeGoodPopup = () => {
    isShowGoodPopup.value = false
    goodPopupData.value = null
}

export const isShowGoodCart = ref(false)
export const openCart = () => {
    isShowGoodCart.value = true
}
export const closeCart = () => {
    isShowGoodCart.value = false
}