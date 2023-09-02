<template>
    <section class="payment">
        <div class="container">
            <div class="payment__inner">
                <span class="label">There will be a payment service. Payment amount: {{ price }}$</span>
                <img src="../assets/images/bank-card.webp" alt="bank card" class="payment__img">
                <button @click="pay" class="btn-1">Press like you pay</button>
            </div>
        </div>
    </section>
</template>

<script setup>
const paymentData = useState('paymentData')
const route = useRoute()
const router = useRouter()

const type = route.query.type

const price = ref(0)
if (type === 'order') {
    price.value = roundPrice(totalCartPrice.value)
} else if (type === 'booking' && paymentData.value) {
    price.value = paymentData.value.price
}

const pay = () => {
    if (!price.value) return
    console.log('success payment', price.value)
    if (type === 'order') {//cart payment
        router.push('/order')
    } else if (type === 'booking') {
        router.push('/reserve/reserve-success')
    }
}
</script>

<style lang="scss" scoped>
.payment {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;

    &__inner {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__img {
        width: 667px;
        height: 421px;
        margin: 60px 0;
    }
}

@media (max-width: 1200px) {
    .payment__img {
        width: 493px;
        height: 311px;
        margin: 40px 0;
    }
}

@media (max-width: 768px) {
    .payment__img {
        width: 271px;
        height: 171px;
    }
}
</style>