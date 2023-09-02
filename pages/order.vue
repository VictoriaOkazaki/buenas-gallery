<template>
    <section class="order">
        <div class="container">
            <div class="order__inner">
                <div class="order__user-info-cont">
                    <form class="order__user-info">
                        <div class="order__user-info-item">
                            <label for="name" class="label">Name</label>
                            <input type="text" name="name" class="order__user-info-input label" id="input-1">
                        </div>
                        <div class="order__user-info-item">
                            <label for="phone" class="label">Phone</label>
                            <input type="tel" name="phone" class="order__user-info-input label" id="input-2">
                        </div>
                        <div class="order__user-info-item">
                            <label for="number" class="label">Number of persons</label>
                            <input type="number" name="number" class="order__user-info-input label" id="input-3">
                        </div>
                    </form>
                </div>
                <div class="order__details">
                    <OrderSelect title="Payment method" :items="paymentItems" v-model:item="paymentMethod"
                        v-model:isOpen="paymentOpen" />
                    <div v-if="!paymentOpen" class="select">
                        <div v-if="paymentMethod" class="select__text label">{{ paymentMethod.title }}</div>
                        <NuxtLink to="/payment?type=order" v-if="paymentMethod?.id === 'online_card'"
                            class="select__btn btn-2">Go to
                            payment -></NuxtLink>
                    </div>
                </div>
                <div class="order__details">
                    <OrderSelect title="Delievery" :items="delieveryItems" v-model:item="delieveryMethod"
                        v-model:isOpen="delieveryOpen" />
                    <div v-if="!delieveryOpen" class="select">
                        <div v-if="delieveryMethod?.id === 'takeaway'" class="takeaway">
                            <TakeawaySelect :items="takeawayItems" v-model:item="takeawayPoint"
                                v-model:isOpen="takeawayOpen" />
                            <div v-if="!takeawayOpen" class="select select__text label">{{ takeawayPoint.title }}</div>
                        </div>
                        <input v-if="delieveryMethod?.id === 'courier'" placeholder="Your adress" type="text" name="adress"
                            class="order__user-info-input label" id="input-4">
                    </div>
                </div>
            </div>
            <NuxtLink href="/payment?type=order" class="btn-1">Send</NuxtLink>
        </div>
    </section>
</template>

<script setup>
const paymentMethod = ref(null)
const delieveryMethod = ref(null)
const takeawayPoint = ref(null)

const paymentOpen = ref(true)
const delieveryOpen = ref(true)
const takeawayOpen = ref(true)

const paymentItems = [
    {
        title: 'Online with a card',
        id: 'online_card'
    },
    {
        title: 'Upon receipt with a card',
        id: 'received_card'
    },
    {
        title: 'Upon receipt with cash',
        id: 'received_cash'
    }
]

const delieveryItems = [
    {
        title: 'By courier',
        id: 'courier'
    },
    {
        title: 'Takeaway',
        id: 'takeaway'
    }
]

const takeawayItems = [
    {
        title: 'Mt Pleasant',
        adress: '1055 Johnnie Dodds Blvd'
    },
    {
        title: 'Milton Keynes',
        adress: '930 Commonwealth Ave'
    }
]
</script>

<style lang="scss" scoped>
.takeaway {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.select {
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: self-start;

    &__text {
        color: $text-color-2;
        display: flex;
    }

    &__btn {
        margin-top: 40px;
    }
}

.label {
    font-size: 28px;
    line-height: 150%;
}

input {
    border: none;
    background: none;
    opacity: .5;

    &:active,
    &:focus,
    &:hover {
        outline: none !important;
    }
}

#input-1,
#input-2 {
    width: 410px;
}

#input-3 {
    width: 245px;
}

#input-4 {
    padding: 0 10px 10px 10px;
}

.arrow {
    width: 28px;
    height: 14px;
    margin-left: 15px;
}

.order {
    padding-bottom: 120px;

    &__inner {
        margin: 120px 0 150px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
    }

    &__user-info,
    &__details {
        display: flex;
        flex-direction: column;
    }

    &__user-info {
        width: 505px;
        margin: 60px 0;
    }

    &__user-info-item {
        display: flex;
        margin-bottom: 60px;
        width: 100%;
        justify-content: space-between;

        &:last-child {
            margin-bottom: 0;
        }
    }

    &__user-info-input {
        border-bottom: 1px $text-color solid;
    }

    &__details {
        align-items: flex-start;
        width: 422px;
    }
}

@media (max-width: 1700px) {
    .label {
        font-size: 24px;
    }

    #input-3 {
        width: 270px;
    }

    .container {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .order {
        &__inner {
            align-items: flex-start;
            justify-content: space-around;
        }

        &__user-info {
            margin: 0;
        }

        &__user-info-cont {
            width: 100%;
            display: flex;
            justify-content: center;
        }

        &__user-info {
            width: 495px;
        }

        &__details {
            margin-top: 120px;
        }
    }
}

@media (max-width: 1200px) {
    .select {
        align-items: center;
    }

    .order {
        &__inner {
            margin: 90px 0 120px;
        }

        &__details {
            width: 100%;
            display: flex;
            align-items: center;
            margin-top: 90px;
        }
    }
}

@media (max-width: 1000px) {
    .order {
        &__user-info-item {
            margin-bottom: 60px;
        }
    }
}

@media (max-width: 600px) {
    .select {
        width: 100%;
    }

    .select,
    .select__btn {
        margin-top: 30px;
    }

    #input-1,
    #input-2 {
        width: 204px;
    }

    #input-3 {
        width: 85px;
    }

    .label {
        font-size: 21px;
    }

    .order {
        padding-bottom: 100px;

        &__inner {
            margin: 80px 0 100px;
        }

        &__user-info {
            width: 288px;
        }

        &__user-info-item {
            margin-bottom: 30px;
        }

        &__details {
            margin-top: 80px;
        }
    }
}
</style>