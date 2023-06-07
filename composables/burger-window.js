export const isBurgerWindow = ref(false)

watch(isBurgerWindow, (val) => {
    const bodyEl = document.getElementsByTagName('body')[0]
    if (val)
        bodyEl.classList.add('disable-scroll')
    else
        bodyEl.classList.remove('disable-scroll')
})