<template>
    <html lang="en">
        <div class="wrapper">
        <slot />
    </div>
    </html>
</template>

<script setup>
</script>

<style>
@font-face {
  font-family: 'Dancing Script';
  src: url('../assets/fonts/DancingScript-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Dancing Script';
  src: url('../assets/fonts/DancingScript-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Delius Swash Caps';
  src: url('../assets/fonts/DeliusSwashCaps-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
</style>