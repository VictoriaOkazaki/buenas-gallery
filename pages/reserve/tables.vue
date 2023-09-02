<template>
    <Header />
    <div class="reserve-bg">
        <section class="reserve">
            <div class="container">
                <div class="tables__inner">
                    <span class="tables__title title">Choose a table</span>
                    <div class="">
                        <span>Write your name</span>
                        <input type="text" v-model="personName">
                        <div class="error" v-if="isNameErr">Enter your name</div>
                    </div>
                    <div class="tables__list">
                        <div :class="{ 'active-table': activeTable && table.id === activeTable.id }" v-for="table in tables"
                            class="tables__item" @click="chooseTable(table)">
                            <img :src="table.src" :alt="table.alt" class="tables__item-img">
                        </div>
                    </div>
                    <div class="error" v-if="isTableErr">choose table</div>
                    <div class="reserve-btn tables__btn-cont">
                        <span class="tables__price title">{{ tablePrice }}</span>
                        <button :class="{ 'reserve-disabled': disabled }" @click="reserveTable"
                            class="tables__btn btn-1">Reserve the table</button>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
</template>

<script setup>
const tables = [
    {
        id: '1',
        src: '/images/reserve/4.webp',
        alt: '4 seats table',
        price: 16,
        person_amount: 4
    },
    {
        id: '2',
        src: '/images/reserve/2.webp',
        alt: '2 seats table',
        price: 8,
        person_amount: 2
    },
    {
        id: '3',
        src: '/images/reserve/3.webp',
        alt: '3 seats table',
        price: 12,
        person_amount: 3
    },
    {
        id: '4',
        src: '/images/reserve/2.webp',
        alt: '2 seats table',
        price: 8,
        person_amount: 2
    },
    {
        id: '5',
        src: '/images/reserve/3.webp',
        alt: '3 seats table',
        price: 12,
        person_amount: 3
    },
    {
        id: '6',
        src: '/images/reserve/2.webp',
        alt: '2 seats table',
        price: 8,
        person_amount: 2
    },
    {
        id: '7',
        src: '/images/reserve/5.webp',
        alt: '5 seats table',
        price: 20,
        person_amount: 5
    },
    {
        id: '8',
        src: '/images/reserve/2.webp',
        alt: '2 seats table',
        price: 8,
        person_amount: 2
    }
]

const reserveData = useState('reserveData')

const router = useRouter()
if (!reserveData.value) {
    router.push('/reserve')
}
reserveData.value.tableId = null
reserveData.value.tableDesc = null
reserveData.value.price = null

const personName = ref('')


const activeTable = ref(null)
const tablePrice = computed(() => {
    if (!activeTable.value) return ''
    return activeTable.value.price + '$'
})
const chooseTable = (table) => {
    reserveData.value.tableId = 'table ' + table.id,
        reserveData.value.tableDesc = table.person_amount + ' persons',
        reserveData.value.price = table.price
    activeTable.value = table
}

const nameNoChosen = () => {
    return !personName.value
}

const tableNoChosen = () => {
    return !reserveData.value.tableId
}

const disabled = computed(() => {
    return nameNoChosen() || tableNoChosen()
})

const isNameErr = ref(false)
const isTableErr = ref(false)

const paymentData = useState('paymentData')

const reserveTable = () => {
    isNameErr.value = nameNoChosen()
    isTableErr.value = tableNoChosen()
    if (isNameErr.value || isTableErr.value) return
    reserveData.value.personName = personName.value

    paymentData.value = {
        price: reserveData.value.price
    }
    router.push('/payment?type=booking')
    console.log('reservedata', reserveData.value)
}

</script>

<style lang="scss" scoped>
span {
    color: $text-color-light;
}

.error {
    color: red;
}

.active-table {
    background-color: red !important;
}

.tables {
    &__inner {
        margin-left: 142px;
        position: relative;
        padding-bottom: calc(120px + 90px);
    }

    &__list {
        margin-top: 60px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 120px;
    }

    &__item {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &:active,
        &:hover {
            opacity: 60%;
        }
    }

    &__item-img {
        width: 248px;
    }

    &__btn {
        pointer-events: all;
        cursor: pointer;
    }

    &__btn-cont {
        display: flex;
        align-items: center;
    }

    &__price {
        margin-right: 60px;
    }
}

@media (max-width: 1600px) {
    .tables {
        &__inner {
            margin-left: 60px;
        }

        &__item-img {
            width: 178px;
        }

        &__price {
            margin-right: 40px;
        }
    }
}

@media (max-width: 1400px) {
    .tables {
        &__inner {
            padding-bottom: calc(100px + 90px);
        }

        &__list {
            margin-top: 50px;
        }

        &__item-img {
            width: 135px;
        }
    }
}

@media (max-width: 1000px) {
    .tables {
        &__inner {
            padding-bottom: calc(90px + 70px);
        }

        &__list {
            margin-top: 40px;
            grid-gap: 80px;
        }

        &__price {
            margin-right: 30px;
        }
    }
}

@media (max-width: 768px) {
    .tables {
        &__inner {
            margin-left: 0;
            padding-bottom: calc(60px + 55px);
        }

        &__list {
            margin-top: 30px;
            grid-gap: 50px;
        }

        &__item-img {
            width: 98px;
        }

        &__price {
            margin-right: 20px;
        }
    }
}

@media (max-width: 550px) {
    .tables {
        &__item-img {
            width: 61px;
        }
    }
}
</style>