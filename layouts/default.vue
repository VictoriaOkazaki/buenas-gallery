<template>
    <html lang="en">
        <div class="wrapper">
          <slot />
          <GoodPopup />
          <Cart />
      </div>
    </html>
</template>

<script setup>
useHead({
  title: "Buendia's Gallery",
  meta: [
    { name: 'description', content: 'Art cafe with books' }
  ]
})
</script>

<style>
@font-face {
  font-family: 'Dancing Script';
  src: url('../assets/fonts/DancingScript-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Dancing Script';
  src: url('../assets/fonts/DancingScript-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Delius Swash Caps';
  src: url('../assets/fonts/DeliusSwashCaps-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
</style>