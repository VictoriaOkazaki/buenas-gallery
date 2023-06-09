<template>
    <html lang="en">
        <div class="wrapper">
        <slot />
    </div>
    </html>
</template>

<script setup defer>
useHead({
    link: [
        {
            href: 'https://fonts.googleapis.com',
            rel: 'preconnect'
        },
        {
            href: 'https://fonts.gstatic.com',
            rel: 'preconnect',
            crossorigin: ''
        },
        {
            href: 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500&family=Delius+Swash+Caps&display=swap',
            rel: 'stylesheet'
        },
    ]
})
</script>

<style lang="scss" scoped></style>