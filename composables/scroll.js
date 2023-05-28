export const smoothScrollToSection = (elemId) => {
    const elemToScroll = document.getElementById(elemId);

    elemToScroll.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}