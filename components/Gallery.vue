<template>
    <section class="gallery" id="gallery">
        <div class="gallery__title-cont">
            <h2 class="gallery__title title">Gallery</h2>
        </div>
        <div class="container">
            <div class="gallery__inner">
                <div class="gallery__content">
                    <div ref="galleryImgs" class="gallery__imgs">
                        <div class="gallery__imgs-list gallery__imgs-list1">
                            <img src="../assets/images/gallery/gal1-1.webp" alt="building"
                                class="gallery__img gallery__img-ver">
                            <img src="../assets/images/gallery/gal1-2.webp" alt="statuette & newspaper"
                                class="gallery__img gallery__img-ver">
                        </div>
                        <img src="../assets/images/gallery/gal-center.webp" alt="cheese pancake"
                            class="gallery__img gallery__img-hor gallery__img-center">
                        <div class="gallery__imgs-list gallery__imgs-list2">
                            <img src="../assets/images/gallery/gal2-1.webp" alt="coffee cup & book"
                                class="gallery__img gallery__img-hor">
                            <img src="../assets/images/gallery/gal2-2.webp" alt="books-lightings"
                                class="gallery__img gallery__img-hor">
                        </div>
                        <div class="gallery__imgs-list gallery__imgs-list3">
                            <img src="../assets/images/gallery/gal3-1.webp" alt="bookshelf"
                                class="gallery__img gallery__img-ver">
                            <img src="../assets/images/gallery/gal3-2.webp" alt="pie" class="gallery__img gallery__img-ver">
                        </div>
                    </div>
                    <img src="../assets/images/gallery/side.webp" alt="buendia's coffee" class="gallery__side-img">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const galleryImgs = ref()

useIntersection(galleryImgs, (entry) => {
    entry.target.style.animation = "show 1.5s ease-out"
    entry.target.style.animationFillMode = "both"
    entry.target.style.transformOrigin = "top"
}, {
    workTrueOnce: true,
    workTrueOnly: true
})
</script>

<style lang="scss" scoped>
.gallery {
    &__inner {
        margin-bottom: 120px;
    }

    &__title-cont {
        display: flex;
        justify-content: flex-end;
    }

    &__title {
        width: 86%;
        @extend %border;
        padding-bottom: 20px;
    }

    &__content {
        margin-top: 90px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__side-img {
        width: 91px;
        height: 617px;
    }

    &__imgs {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        width: 92%;
        position: relative;
        transform-origin: top left;
    }

    &__imgs-list {
        display: flex;
        flex-direction: column;
    }

    &__imgs-list2 {
        height: 1025px;
        justify-content: space-between;
    }

    &__img-ver {
        width: 392px;
        height: 505px;

        &:last-child {
            margin-top: 160px;
        }
    }

    &__img-hor {
        width: 410px;
        height: 308px;
    }

    &__img-center {
        position: absolute;
        // left: calc(50% - 410px/2 - (100% - 92% - 91px));
        left: calc(50% - 410px/2);
    }
}

@media (max-width: 1600px) {
    .gallery {
        &__title {
            width: 84%;
        }

        &__imgs {
            width: 90%;
        }

        &__imgs-list2 {
            order: 3;
            flex-direction: row;
            height: auto;
            margin-top: 100px;
            justify-content: space-between;
            width: 100%;
        }

        &__img-ver {
            &:last-child {
                margin-top: 150px;
            }
        }

        &__img-center {
            top: 443px;
        }
    }
}

@media (max-width: 1300px) {
    .gallery {
        &__title {
            width: 74%;
        }

        &__imgs {
            width: 100%;
        }

        &__img-ver {
            width: 325px;
            height: 418px;

            &:last-child {
                margin-top: 150px;
            }
        }

        &__img-hor {
            width: 341px;
            height: 257px;
        }

        &__img-center {
            top: 398px;
            left: calc(50% - 341px/2);
        }

        &__side-img {
            display: none;
        }
    }
}

@media (max-width: 1000px) {
    .gallery {
        &__title {
            width: 77%;
            padding-bottom: 10px;
        }

        &__content {
            margin-top: 60px;
        }

        &__img-ver {
            width: 260px;
            height: 334px;

            &:last-child {
                margin-top: 190px;
            }
        }

        &__img-hor {
            width: 272px;
            height: 204px;
        }

        &__img-center {
            top: 334px;
            left: calc(50% - 272px/2);
        }
    }
}

@media (max-width: 700px) {
    .gallery {
        &__title {
            width: 69%;
        }

        &__inner {
            margin-bottom: 100px;
        }

        &__content {
            margin-top: 40px;
        }

        &__imgs {
            flex-direction: column;
        }

        &__imgs-list2 {
            flex-direction: column;
            align-items: center;
        }

        &__imgs-list1,
        &__imgs-list3 {
            margin-bottom: 30px;
        }

        &__imgs-list2 {
            margin-top: 0;
        }

        &__img {
            width: 100%;
            height: auto;
            margin-bottom: 30px;

            &:last-child {
                margin-bottom: 0;
            }
        }

        &__img-ver {
            &:last-child {
                margin-top: 0;
            }
        }

        &__img-center {
            position: initial;
        }
    }
}
</style>