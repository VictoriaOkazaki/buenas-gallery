<template>
    <section class="books" id="books">
        <div class="container">
            <div class="books__inner">
                <div class="books-half">
                    <div class="books__list-cont" id="book-1">
                        <div class="books__list1-cont">
                            <div class="books__title-cont">
                                <h2 class="books__title title">Most popular books</h2>
                            </div>
                            <ul class="books__list" ref="bookList1">
                                <li class="books__list-item span">Keziah Dennis - Defender Of History</li>
                                <li class="books__list-item span">Hannah Macias - Enemy Of Joy</li>
                                <li class="books__list-item span">Willie Clayton - Gods Of Power</li>
                                <li class="books__list-item span">Tina Carver - Robots With Honor</li>
                                <li class="books__list-item span">Tanya Espinoza - Heroes And Foes</li>
                                <li class="books__list-item span">Janet Ruiz - Eating At The East</li>
                                <li class="books__list-item span">Kendra Macdonald - Officers And Strangers</li>
                                <li class="books__list-item span">Virgil Daniel - Obliteration Of The End</li>
                                <li class="books__list-item span">Cynthia Orozco - Ascension Of Eternity</li>
                            </ul>
                        </div>
                    </div>
                    <div class="books__img-cont" id="book-2">
                        <img src="../assets/images/books-1.webp" alt="bookcase" class="books__img">
                    </div>
                </div>
                <div class="books-half">
                    <div class="books__img-cont" id="book-3">
                        <img src="../assets/images/books-2.webp" alt="a book and a cup of coffee" class="books__img">
                    </div>
                    <div class="books__list-cont" id="book-4">
                        <ul class="books__list" ref="bookList2">
                            <li class="books__list-item span">Azaan Klein - Cat Of The Day</li>
                            <li class="books__list-item span">Theodore Ballard - Invited By A Storm</li>
                            <li class="books__list-item span">Xander Booker - Companion Of My Imagination</li>
                            <li class="books__list-item span">Talha Ho - Mice Of Despair</li>
                            <li class="books__list-item span">Anish Skinner - Women Of Dread</li>
                            <li class="books__list-item span">Milan Brock - Traitors And Enemies</li>
                            <li class="books__list-item span">Jonty Cochran - Witches And Foes</li>
                            <li class="books__list-item span">Safaa Yates - Victory Without Time</li>
                            <li class="books__list-item span">Lawrence Douglas - Temptations In The Moon</li>
                            <li class="books__list-item span">Lucy Peck - Chasing The Ashes</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const bookList1 = ref()
const bookList2 = ref()

useIntersection(bookList1, (entry) => {
    entry.target.style.animation = "show 1.5s ease-out"
    entry.target.style.transformOrigin = "top"
}, {
    workTrueOnce: true,
    workTrueOnly: true
})

useIntersection(bookList2, (entry) => {
    entry.target.style.animation = "show 1.5s ease-out"
    entry.target.style.transformOrigin = "top"
}, {
    workTrueOnce: true,
    workTrueOnly: true
})
</script>

<style lang="scss" scoped>
.books {
    &__inner {
        margin-bottom: 120px;
        border: 1px $text-color solid;
        border-radius: 40px;
    }

    &-half {
        display: flex;

        &:first-child {
            @extend %border;
        }
    }

    &__list-cont {
        width: 50%;
        padding: 60px 60px 90px 100px;
    }

    &__list-item {
        margin-bottom: 30px;
        color: $text-color;

        &:last-child {
            margin-bottom: 0;
        }
    }

    &__img-cont {
        width: 50%;
        display: flex;
        justify-content: center;
        padding: 90px 0 90px;

    }

    &__img {
        width: 538px;
        height: 807px;
    }

    &__title-cont {
        padding-bottom: 10px;
        @extend %border;
        margin-left: -100px;
        margin-right: -60px;
        margin-bottom: 60px;
        padding-left: 140px;
    }
}

#book-1,
#book-3 {
    border-right: 1px solid $text-color;
}

@media (max-width: 1600px) {
    .books {
        &__list-cont {
            width: 59%;
        }

        &__list-item {
            margin-bottom: 20px;
        }

        &__img {
            width: 410px;
            height: 615px;
        }
    }
}

#book-3 {
    order: 1;
    border-right: none;
}

#book-4 {
    border-right: 1px solid $text-color;
}

@media (max-width: 1300px) {
    .books {
        &-half {
            flex-direction: column;
            align-items: center;
        }

        &__title-cont {
            margin-bottom: 50px;
            margin-left: -140px;
            margin-right: -100px;
        }

        &__list-cont {
            padding: 50px 100px 0 140px;
            width: 100%;
        }

        &__img-cont {
            padding: 0;
            margin: 80px 0 80px;
            width: 640px;
            min-height: 400px;
            border-radius: 40px;
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        &__img {
            display: none;
        }
    }

    #book-1,
    #book-4 {
        border: none;
    }

    #book-2 {
        background-image: url(../assets/images/books-1.webp);
    }

    #book-3 {
        background-image: url(../assets/images/books-2.webp);
    }
}

@media (max-width: 1000px) {
    .books {
        &__inner {
            margin-bottom: 100px;
        }

        &__title-cont {
            margin-left: -110px;
            margin-right: -50px;
            padding-left: 110px;
        }

        &__list-cont {
            padding: 50px 50px 0 110px;
        }

        &__img-cont {
            margin: 60px 0 60px;
            width: 530px;
            min-height: 248px;
        }
    }
}
@media (max-width: 768px) {
.books {
    &__title-cont {
            margin-left: -80px;
            margin-right: -50px;
            margin-bottom: 30px;
            padding-left: 80px;
        }

        &__list-cont {
            padding: 50px 50px 0 80px;
        }
}
}
@media (max-width: 600px) {
    .books {
        &-half {
            border-radius: 40px;
            &:last-child {
                display: none;
            }
        }
        &__title-cont {
            margin-left: -40px;
            margin-right: -40px;
            padding-left: 40px;
        }

        &__list-cont {
            padding: 30px 40px 0 40px;
        }
        &__list-item {
            margin-bottom: 15px;
        }
        &__img-cont {
            margin: 30px 0 0;
            width: 100%;
            min-height: 220px;
        }
    }
}</style>