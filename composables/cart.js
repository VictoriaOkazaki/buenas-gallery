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

export const totalCartPrice = computed(() => {
    let total = 0
    for (const good of goodCart.value) {
        total += good.count * good.price
    }

    return total.toFixed(2)
})