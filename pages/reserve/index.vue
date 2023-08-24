<template>
    <Header />
    <div class="reserve-bg">
        <section class="reserve">
            <div class="container">
                <p class="timetable__title span">Choose a&nbsp;date. A&nbsp;cost&nbsp;per&nbsp;seat&nbsp;is&nbsp;4$.
                    The&nbsp;amount on&nbsp;your&nbsp;card will&nbsp;be&nbsp;blocked until you&nbsp; visit
                    the&nbsp;cafe.</p>
                <div class="timetable__inner">
                    <div class="timetable__days">
                        <ReserveDay v-for="day in days" :day="day" :active="activeDay === day" @click="setActiveDay(day)"
                            @chooseHour="chooseHour" />
                    </div>
                    <NuxtLink :class="{ 'disabled': !reserveData }" to="../reserve/tables" class="reserve-btn btn-1">Choose a
                        table</NuxtLink>
                </div>
            </div>
        </section>
        <Footer />
    </div>
</template>

<script setup>
import dayjs from 'dayjs'

function getHours() {
    const hours = []

    const STEP_HOUR = 2
    let fromHour = 10
    const CLOSE_HOUR = 25

    const addHour = (fromHour, toHour) => {
        fromHour = fromHour % 24
        toHour = toHour % 24

        // TODO: dont add chosen hour range
        hours.push(`${fromHour}:00 - ${toHour}:00`)
    }

    while (fromHour < CLOSE_HOUR) {
        let toHour = fromHour + STEP_HOUR
        if (toHour > CLOSE_HOUR) {
            toHour = CLOSE_HOUR
        }
        addHour(fromHour, toHour)
        fromHour = toHour
    }

    return hours
}

function get7Days() {
    const days = []
    let curDay = dayjs()
    while (days.length !== 7) {
        days.push({
            name: curDay.format('dddd'),
            date: curDay.format('MMMM D'),
            hours: getHours(),
            activeHour: null
        })
        curDay = curDay.add(1, 'day')
    }
    return days
}
const days = ref(get7Days())

const activeDay = ref(null)
const setActiveDay = (day) => {
    if (activeDay.value === day) {
        return
    }
    for (const curDay of days.value) {
        curDay.activeHour = null
    }
    activeDay.value = day
}
const reserveData = useState('reserveData')
reserveData.value = null
const chooseHour = (range) => {
    activeDay.value.activeHour = range

    reserveData.value = {
        date: activeDay.value.date,
        hour: activeDay.value.activeHour,
    }
    console.log("reservedta", reserveData.value)
    // setTimeout case setActiveDay call set activeDay
    setTimeout(() => {
        activeDay.value = null
    }, 0)
}
</script>

<style lang="scss" scoped>
.disabled {
    opacity: 0.4;
    pointer-events: none;
    cursor: none;
}

span,
p {
    font-family: Delius Swash Caps, cursive;
    color: $text-color-light;
    font-weight: 400;
    line-height: 150%;
}

.timetable {
    &__inner {
        display: flex;
        align-items: center;
        flex-direction: column;
        position: relative;
    }

    &__title {
        margin-left: 142px;
    }

    &__days {
        margin-top: 90px;
        margin-bottom: calc(120px + 90px);
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 60px 90px;
    }
}

@media (max-width: 1600px) {
    .timetable {
        &__title {
            margin-left: 60px;
        }

        &__days {
            grid-gap: 60px 60px;
        }
    }
}

@media (max-width: 1400px) {
    .timetable {
        &__days {
            margin-top: 60px;
            margin-bottom: 90px;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 40px 60px;
        }
    }
}

@media (max-width: 1000px) {
    .timetable {
        &__days {
            grid-gap: 40px 40px;
        }
    }
}

@media (max-width: 700px) {
    .timetable {
        &__title {
            margin-left: 0;
        }

        &__days {
            margin-top: 40px;
            margin-bottom: calc(60px + 55px);
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: flex-start;
            justify-content: space-around;
            position: relative;
        }
    }
}
</style>