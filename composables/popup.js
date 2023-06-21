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

export const goodCart = ref([])
export const addToCart = (good, amount) => {
    if (typeof amount !== 'number' || amount <= 0) {
        throw new Error('amount is not a positive number')
    }
    const findGood = goodCart.value.find(g => g.title === good.title)
    if (findGood) {
        findGood.count += amount
        return
    }
    const cartGood = { ...good, count: amount }
    goodCart.value = [...goodCart.value, cartGood]
}

export const clearCart = () => {
    goodCart.value = []
}

export const isShowGoodCart = ref(false)
export const openCart = () => {
    isShowGoodCart.value = true
}
export const closeCart = () => {
    isShowGoodCart.value = false
}