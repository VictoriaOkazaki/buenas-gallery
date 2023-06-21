export const usePopupClickOutside = (isShowPopup, closePopup) => {
    const canClose = ref(isShowPopup.value)
    const clickOutside = () => {
        if (canClose.value) {
            closePopup()
        }
    }
    
    watch(isShowPopup, async (value) => {
        if (value) {
            await wait(500)
            canClose.value = true
        } else {
            canClose.value = false
        }
    })

    return {clickOutside}
}