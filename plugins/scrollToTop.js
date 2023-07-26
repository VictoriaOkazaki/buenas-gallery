import { scrollOnTopOfPage } from "~~/composables/scroll";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook("page:finish", () => {
        scrollOnTopOfPage()
    });
});