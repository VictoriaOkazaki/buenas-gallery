<template>
    <ul class="header__info">
        <li class="header__info-item">
            <span>We’re open everyday from 10:00 to 1:00</span>
        </li>
        <li class="header__info-item">
            <a href="tel:+12055381468" class="header__info-link">+1 205-538-1468</a>
        </li>
        <li class="header__info-item">
            <a href="https://www.google.com/maps/place/Art+Cafe,+14+Bonn+Square,+Oxford+OX1+1LT,+Великобритания/@51.7516667,-1.2602778,17z/data=!4m6!3m5!1s0x4876c6a517c88c63:0xa076d20f99ccfb99!8m2!3d51.7516667!4d-1.2602778!16s%2Fg%2F1hc5wqv9d"
                class="header__info-link">Brentwood, 3601 Farm Meadow Drive</a>
        </li>
    </ul>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header {

    &__info-item,
    &__info-link {
        font-family: 'Delius Swash Caps', cursive;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: $text-color;

        &:nth-child(2) {
            margin: 10px 0;
        }
    }

    &__info-link {
        text-decoration: underline;
    }
}

@media (max-width: 1400px) {
    .header__info {

        &-item,
        &-link {
            font-size: 18px;
            line-height: 23px;

            &:nth-child(2) {
                margin: 6px 0;
            }
        }
    }
}

@media (max-width: 1200px) {
    .header__info {

        &-item,
        &-link {
            font-size: 14px;
            line-height: 17px;
        }
    }
}</style>