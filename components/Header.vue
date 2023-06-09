<template>
    <title>Buendia's Gallery</title>
    <meta name="Art cafe with books">
    <RawHeader @switchBurger="switchBurger" class="main-header" />
    <Transition name="fade">
        <div v-show="isBurgerWindow" class="burger-header">
          <RawHeader class="hidden-header" />
          <div class="burger-window">
              <div class="container burger-window-cont">
                  <div class="burger-window__inner">
                      <img src="../assets/images/gallery/side.svg" alt="buendias coffee" class="burger-window__side">
                      <HeaderMenu class="burger__menu" />
                      <HeaderInfo />
                  </div>
              </div>
              <img src="../assets/images/hero-img.webp" alt="art" class="burger-window__img">
          </div>
      </div>
    </Transition>
</template>

<script setup>
import { isBurgerWindow } from '~/composables/burger-window'

const switchBurger = () => {
  isBurgerWindow.value = !isBurgerWindow.value
}
</script>

<style lang="scss" scoped>
.main-header {
    z-index: 20;
}
.fade-enter-active {
  animation: fadeIn .5s ease-out;
}
.fade-leave-active {
  animation: fadeOut .5s ease-out;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.burger-header {
    position: fixed;
    z-index: 15;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.hidden-header {
    visibility: hidden;
}
.header__info {
    display: none;
    height: fit-content;
}

.burger-window {
    width: 100vw;
    flex-grow: 1;
    background-color: $background-color;
    position: relative;
    z-index: 6;

    &-cont {
        height: 100%;
    }

    &__inner {
        display: flex;
        padding-left: 40px;
        padding-top: 40px;
        border-left: 1px solid $text-color;
        height: 100%;
    }

    &__side {
        width: 59px;
        height: 371px;
    }

    &__img {
        width: 442px;
        height: 300px;
        position: absolute;
        bottom: 0;
        right: 0;
        border-radius: 40px 0 0 0;
    }
}

@media (max-width: 1000px) {
    .burger__menu {
        display: flex;
        flex-direction: column;
        margin-left: 40px;
    }
}

@media (max-width: 768px) {
    .burger-window {
        &__inner {
            border-left: none;
            padding-left: 0;
            padding-top: 30px;
        }
    }

    .header__info {
        display: block;
        transform: translateY(40px);
        margin-left: 12%;
    }
}

@media (max-width: 600px) {
    .header__info {
        margin-left: 0;
        position: absolute;
        bottom: 284px;
        right: 40px;
        &-item,
        &-link {
            font-size: 12px;
        }
    }
    .burger-window {
        &__side {
            width: 36px;
            height: 260px;
        }
        &__img {
            width: 368px;
            height: 224px;
            position: absolute;
            bottom: 0;
            right: 0;
            border-radius: 40px 0 0 0;
        }
    }
}
</style>