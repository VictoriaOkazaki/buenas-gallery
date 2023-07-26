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
                        <div v-for="day in days" class="timetable__day">
                            <span class="timetable__day-title">{{ day.name }}</span>
                            <span class="timetable__day-date">{{ day.date }}</span>
                        </div>
                    </div>
                    <NuxtLink href="../reserve/tables" class="reserve-btn btn-1">Choose a table</NuxtLink>
                </div>
            </div>
        </section>
        <Footer />
    </div>
</template>

<script setup>
const days = [
    {
        name: 'Monday',
        date: 'July 10',
        chosen: false
    },
    {
        name: 'Tuesday',
        date: 'July 11',
        chosen: false
    },
    {
        name: 'Wednesday',
        date: 'July 12',
        chosen: false
    },
    {
        name: 'Thursday',
        date: 'July 13',
        chosen: false
    },
    {
        name: 'Friday',
        date: 'July 14',
        chosen: false
    },
    {
        name: 'Saturday',
        date: 'July 15',
        chosen: false
    },
    {
        name: 'Sunday',
        date: 'July 16',
        chosen: false
    }
]
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

        &__day {
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
        &__days {
            grid-gap: 40px 40px;
        }

        &__day {
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

        &__day {
            width: 183px;
            height: 140px;
            background-image: url(../../assets/images/circle-rev.svg);

            &:nth-child(3),
            &:nth-child(4),
            &:last-child {
                align-self: flex-end;
            }
        }

        &__day-title {
            font-size: 28px;
        }

        &__day-date {
            font-size: 16px;
        }
    }
}
</style>