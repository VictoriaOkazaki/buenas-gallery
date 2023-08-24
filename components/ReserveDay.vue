<template>
    <div class="timetable__day-cont">
        <div class="timetable__hours" v-if="active">
            <span class="timetable__hour" @click="emit('chooseHour', range)" v-for="range in day.hours">{{ range }}</span>
        </div>
        <div class="timetable__day" v-else>
            <span class="timetable__day-title">{{ day.name }}</span>
            <span class="timetable__day-date">{{ day.date }}</span>
            <span v-if="day.activeHour" class="timetable__day-date">{{ day.activeHour }}</span>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits([
    'chooseHour'
])
defineProps([
    'day',
    'active'
])
</script>

<style lang="scss" scoped>
span,
p {
    font-family: Delius Swash Caps, cursive;
    color: $text-color-light;
    font-weight: 400;
    line-height: 150%;
}

.timetable {
    &__hours {
        background-image: url(../assets/images/circle-bg.svg);
    }
    &__day {
        background-image: url(../assets/images/circle.svg);
        transition: all .8s ease-out;
    }
    &__hours,
    &__day {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 251px;
        height: 328px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }

    &__hour {
        font-size: 18px;
        line-height: 150%;
        margin-bottom: 5px;
        cursor: pointer;

        &:last-child {
            margin-bottom: 0;
        }

        &:hover,
        &:active {
            color: $text-color;
        }
    }

    &__day {
        cursor: pointer;

        &:hover {
            background-image: url(../assets/images/circle-bg.svg);
            transition: all .8s ease-out;
        }
    }

    &__day-title {
        font-size: 36px;
        margin-bottom: 10px;
    }

    &__day-date {
        font-size: 28px;
    }
}

@media (max-width: 1400px) {
    .timetable {
        &__hour {
            font-size: 16px;
        }

        &__day,
        &__hours {
            width: 214px;
            height: 280px;
        }

        &__day-title {
            font-size: 34px;
        }

        &__day-date {
            font-size: 21px;
        }
    }
}

@media (max-width: 1000px) {
    .timetable {
        &__hour {
            font-size: 14px;
        }

        &__day,
        &__hours {
            width: 180px;
            height: 236px;
        }

        &__day-title {
            font-size: 30px;
        }

        &__day-date {
            font-size: 18px;
        }
    }
}

@media (max-width: 700px) {
    .timetable {
        &__day-cont {

            &:nth-child(3),
            &:nth-child(4),
            &:last-child {
                align-self: flex-end;
            }
        }

        &__day {
            width: 183px;
            height: 140px;
            background-image: url(../assets/images/circle-rev.svg);
        }

        &__day-title {
            font-size: 28px;
        }

        &__day-date {
            font-size: 16px;
        }
    }
}</style>