import { isBurgerWindow } from './burger-window'

export const smoothScrollToSection = (elemId) => {
    isBurgerWindow.value = false;
    const elemToScroll = document.getElementById(elemId);

    elemToScroll.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}