<template>
    <section class="contacts" id="contacts">
        <div class="contacts__title-cont">
            <h2 class="contacts__title title">Our contacts</h2>
        </div>
        <div class="container">
            <div class="contacts__inner">
                <div class="contacts__content">
                    <div class="contacts__map">
                        <iframe class="contacts__map-frame" title="Art cafe"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2470.0041694523543!2d-1.262249823548184!3d51.7512473218698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a517c88c63%3A0xa076d20f99ccfb99!2sArt%20Cafe!5e0!3m2!1sru!2saz!4v1685538358894!5m2!1sru!2saz"
                            width="830" height="500" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div class="contacts__map-bg"></div>
                    </div>
                    <div class="contacts__content-block">
                        <h4 class="contacts__subtitle contacts__subtitle-1">Brentwood, 3601 Farm Meadow Drive</h4>
                        <h4 class="contacts__subtitle contacts__subtitle-2">+1 205-538-1468</h4>
                        <p class="contacts__text contacts__text-1 text">Drop in to relax and get enjoy reading the best
                            books while having great
                            meals. Contemplate art exhibits, discuss them with a cup of fresh coffe in your hand. Get in
                            touch
                            with people who are be on the same wavelength.
                        </p>
                        <p class="contacts__text text">There is a free parking for cars and bicycles available.</p>
                    </div>
                </div>
                <div class="contacts__content">
                    <div class="contacts__content-block">
                        <h4 class="contacts__subtitle contacts__subtitle-1">We’re open everyday from 10:00 to 1:00</h4>
                        <p class="contacts__text contacts__text-3 text">The kitchen stops working 30 minutes before the cafe
                            closes.</p>
                        <OfferButtons class="contacts__btns" />
                    </div>
                    <img src="../assets/images/contact.webp" alt="cafe terraced street" class="contacts__img">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.contacts {
    &__title-cont {
        width: 35%;
        padding-bottom: 20px;
        @extend %border;
        padding-left: 120px;
    }

    &__inner {
        margin-bottom: 180px;
    }

    &__content {
        display: flex;
        justify-content: space-between;
        margin-top: 90px;

        &:last-child {
            align-items: center;
        }
    }
&__map {
    position: relative;
}
&__map-bg {
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: linear-gradient(0deg, rgba(255, 212, 193, 0.3), rgba(255, 212, 193, 0.3));
}
    &__content-block {
        width: 41%;
    }

    &__subtitle {
        font-family: 'Delius Swash Caps', cursive;
        font-weight: 400;
        color: $text-color;
        font-size: 28px;
        line-height: 42px;
    }

    &__subtitle-1 {
        margin-bottom: 10px;
    }

    &__subtitle-2 {
        margin-bottom: 40px;
    }

    &__text-1 {
        margin-bottom: 20px;
    }

    &__text-3 {
        margin-top: 30px;
    }

    &__img {
        width: 830px;
        height: 500px;
    }

    &__btns {
        margin-top: 90px;
    }
}

@media (max-width: 1700px) {
    .contacts {
        &__title-cont {
            width: 48%;
        }

        &__subtitle {
            font-size: 24px;
            line-height: 36px;
        }

        &__content {
            flex-direction: column;

            &:last-child {
                align-items: flex-start;
            }
        }

        &__content-block {
            transform: translateX(415px);
            width: 57%;
        }

        &__map,
        &__img {
            margin-bottom: 60px;
        }

        &__img {
            order: -1;
        }

        &__subtitle-2 {
            margin-bottom: 30px;
        }

        &__btns {
            margin-top: 60px;
        }
    }
}

@media (max-width: 1250px) {
    .contacts {
        &__title-cont {
            width: 50%;
            padding-left: 100px;
        }

        &__content {
            margin-top: 80px;
        }
        &__content-block {
            transform: translateX(30%);
            width: 69%;
        }

        &__map,
        &__img{
            margin-bottom: 50px;
            width: 100%;
        }
        &__map-frame  {
            width: 100%;
        }
        &__img {
            height: auto;
        }

        &__btns {
            margin-top: 50px;
        }

        &__text-3 {
            margin-top: 20px;
        }
    }
}
@media (max-width: 1000px) {
    .contacts {
        &__inner {
            margin-bottom: 150px;
        }
        &__title-cont {
            padding-bottom: 10px;
            padding-left: 80px;
        }
        &__content {
            margin-top: 60px;
        }
        &__content-block {
            transform: translateX(18%);
            width: 76%;
        }
&__subtitle {
    font-size: 21px;
    line-height: 32px;
}
        &__map,
        &__img {
            margin-bottom: 30px;
        }
        &__text-1 {
            margin-bottom: 10px;
        }
        &__subtitle-1 {
            margin-bottom: 5px;
        }
    }
}
@media (max-width: 768px) {
    .contacts {
        &__inner {
            margin-bottom: 80px;
        }
        &__title-cont {
            width: 48%;
            padding-left: 60px;
        }
        &__content {
            margin-top: 40px;
        }
        &__content-block {
            transform: translateX(0);
            width: 100%;
        }
        &__subtitle {
    font-size: 18px;
    line-height: 27px;
}
        &__map,
        &__img {
            margin-bottom: 30px;
        }
        &__map-frame {
            height: 370px;
        }
        &__map-frame {
            height: 270px;
        }
        &__text-3 {
            margin-top: 15px;
        }
        &__subtitle-1 {
            margin-bottom: 5px;
        }
        &__btns {
            margin-top: 40px;
        }
    }
}
@media (max-width: 500px) {
    .contacts {
        &__title-cont {
            padding-left: 40px;
        }
        &__map-frame {
            height: 220px;
        }
    }
}
@media (max-width: 400px) {
    .contacts {
        &__map-frame {
            height: 170px;
        }
    }
}
</style>