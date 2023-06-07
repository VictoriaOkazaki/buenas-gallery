<template>
    <div class="offer__btns">
        <a href="#" class="offer__btn btn-1">Reserve a&nbsp;table</a>
        <a href="#" class="offer__btn btn-2">Order online</a>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.offer {
    &__btns {
        display: flex;
    }

    &__btn {
        &:first-child {
            margin-right: 60px;
        }
    }
}

@media (max-width: 1600px) {
    .offer {
        &__btn {
            &:first-child {
                margin-right: 40px;
            }
        }
    }
}

@media (max-width: 1000px) {
    .offer {
        &__btn {
            &:first-child {
                margin-right: 30px;
            }
        }
    }
}

@media (max-width: 400px) {
    .offer {
        &__btn {
            &:first-child {
                margin-right: 7px;
            }
        }
    }
}</style>