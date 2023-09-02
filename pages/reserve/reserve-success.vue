<template>
    <div class="success">
        <div class="container">
            <div class="success__inner">
                <div class="success__content">
                    <img src="/images/reserve/success.webp" alt="breakfast" class="success__img">
                    <div class="success__info">
                        <div class="success__info-text">
                            <p class="success__info-text text">Your booking is&nbsp;complete.</p>
                            <p v-if="reserveData" class="success__info-text text">Reserve details: {{reserveData.tableDesc}}, {{reserveData.date}},
                                {{ reserveData.hour }}, {{ reserveData.tableId }}</p>
                                <p class="success__info-text text" v-else>Data not found</p>
                        </div>
                        <button class="success__info-btn btn-1">Send to email</button>
                    </div>
                </div>
                <NuxtLink class="success__btn btn-2" to="/">Go home</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const reserveData = useState('reserveData')
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
}

.success {
    position: relative;
    background-color: $background-color;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &__content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__img {
        width: 716px;
        height: 650px;
        animation: appearFromLeft 1.5s ease-out;
    }

    &__info {
        background-color: $text-color;
        width: 830px;
        height: 550px;
        padding: 90px 0 90px 90px;
        border-radius: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        animation: appearFromLeftAndScale 1.5s ease-out 1.5s;
        animation-fill-mode: both;
    }

    &__info-text {
        color: $text-color-light;

        &:first-child {
            margin-bottom: 20px;
        }
    }

    &__btn {
        position: absolute;
        right: 120px;
        bottom: 20px;
        animation: appearFromBottom 1.5s ease-out 3s;
        animation-fill-mode: both;
    }
}

@media (max-width: 1800px) {
    .success {
        &__img {
            width: 737px;
            height: 670px;
        }

        &__info {
            width: 670px;
            height: 585px;
            padding: 80px 0 80px 80px;
        }
    }
}

@media (max-width: 1650px) {
    .success {
        &__img {
            width: 645px;
            height: 586px;
        }

        &__info {
            width: 511px;
            height: 446px;
            padding: 60px 0 60px 60px;
        }
    }
}

@media (max-width: 1400px) {
    .success {
        &__img {
            width: 530px;
            height: 483px;
        }

        &__info {
            width: 448px;
            height: 474px;
        }

        &__btn {
            right: 100px;
        }
    }
}

@media (max-width: 1200px) {
    .success {
        &__img {
            width: 414px;
            height: 377px;
        }

        &__info {
            width: 384px;
            height: 406px;
            padding: 40px;
        }

        &__btn {
            left: 100px;
        }
    }
}

@media (max-width: 1000px) {
    .success {
        &__content {
            flex-direction: column;
            align-items: flex-start;
        }

        &__info {
            width: 339px;
            height: 316px;
            align-self: flex-end;
            transform: translateY(-158px) !important;
        }

        &__info-text {
            color: $text-color-light;

            &:first-child {
                margin-bottom: 10px;
            }
        }

        &__btn {
            left: 80px;
        }
    }
}

@media (max-width: 650px) {
    .success {
        &__btn {
            left: 60px;
        }
    }
}

@media (max-width: 650px) {
    .success {
        &__img {
            width: 100%;
            height: auto;
        }

        &__info {
            width: 100%;
            transform: translateY(-79px) !important;
        }
    }
}

@media (max-width: 500px) {
    .success {
        &__info {
            height: 270px;
            transform: translateY(-68px) !important;
            padding: 20px 30px;
        }

        &__btn {
            left: 40px;
        }
    }
}

@media (max-width: 450px) {
    .success {
        &__info {
            height: 225px;
            transform: translateY(-56px) !important;
        }
    }
}</style>