<template>
    <div class="order__details-top" @click="switchSelect">
        <span class="order__details-title label">{{ title }}</span>
        <img src="../assets/images/arrow.svg" alt="open arrow" class="arrow" :class="{ 'rotate': open }">
    </div>
    <Transition name="show" @after-leave="onAfterLeave">
        <ul v-show="open" class="order__details-list">
            <li v-for="item in items" @click="selectItem(item)" class="order__details-item label">{{ item.title }}</li>
        </ul>
    </Transition>
</template>

<script setup>
const props = defineProps(['item', 'isOpen', 'items', 'title'])
const emit = defineEmits(['update:item', 'update:isOpen'])

const open = ref(props.isOpen)
const switchSelect = () => {
    open.value = !open.value
}

const selectItem = (item) => {
    emit('update:item', item)
    open.value = false
}

watch(open, (value) => {
    if (value) { emit('update:isOpen', value) }
})

const onAfterLeave = () => {
    emit('update:isOpen', open.value)
}
</script>

<style lang="scss" scoped>
.show-enter-active {
    animation: show .5s ease-out;
}

.show-leave-active {
    animation: hide .5s ease-out;
}

.label {
    font-size: 28px;
    line-height: 150%;
}

.rotate {
    transform: rotate(180deg);
}

.arrow {
    width: 28px;
    height: 14px;
    margin-left: 15px;
}

.order {
    &__details-top {
        padding: 0 20px;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
    }

    &__details-list {
        margin-top: 40px;
        padding: 20px;
        background-color: $text-color-light;
        width: 422px;
        border-radius: 40px 40px 0px 0px;
        transform-origin: top;
    }

    &__details-item {
        padding: 10px;
        margin-bottom: 30px;
        @extend %border;

        &:last-child {
            border: none;
            margin-bottom: 0;
        }
    }
}

@media (max-width: 1700px) {
    .label {
        font-size: 24px;
    }
}

@media (max-width: 1200px) {
    .order {
        &__details-top {
            width: 422px;
        }

        &__details-list {
            width: 422px;
        }
    }
}

@media (max-width: 600px) {
    .label {
        font-size: 21px;
    }

    .order {
        &__details-list {
            margin-top: 30px;
            width: 100%;
            padding-right: 0;
        }

        &__details-top {
            width: 100%;
        }
    }
}
</style>