<template>
    <div class="timetable__day">
        <div v-if="active">
            <span @click="emit('chooseHour', range)" v-for="range in day.hours">{{ range }}</span>
        </div>
        <div v-else>
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
    &__day {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 251px;
        height: 328px;
        background-image: url(../../assets/images/circle.svg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        cursor: pointer;

        &:hover {
            background-image: url(../../assets/images/circle-bg.svg);
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
</style>