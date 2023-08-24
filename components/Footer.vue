<template>
    <footer class="footer">
        <div class="container footer-cont">
            <img ref="footerImg" src="../assets/images/footer-img.webp" alt="coffee cuo & cafe logo" class="footer__img">
            <div class="footer__inner">
                <span class="footer__copyright label">@2023 Buendia’s Gallery. All rights reserved.</span>
                <div class="footer__social">
                    <div class="footer__social-item">
                        <a href="https://instagram.com">
                            <span class="footer__social-title">instagram</span>
                        </a>
                    </div>
                    <div class="footer__social-item">
                        <a href="https://twitter.com">
                            <span class="footer__social-title">twitter</span>
                        </a>
                    </div>
                    <div class="footer__social-item">
                        <a href="https://youtube.com">
                            <span class="footer__social-title">youtube</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
const footerImg = ref()

useIntersection(footerImg, (entry) => {
    entry.target.style.animation = "show 1.5s ease-out"
    entry.target.style.transformOrigin = "bottom center"
}, {
    workTrueOnce: true,
    workTrueOnly: true
})
</script>

<style lang="scss" scoped>
.footer {
    background-color: $text-color-2;
    padding: 120px 0 90px;
    border-radius: 40px 40px 0px 0px;

    &-cont {
        display: flex;
        justify-content: right;
    }

    &__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80%;
    }

    &__img {
        width: 245px;
        height: 247px;
        position: absolute;
        bottom: 0;
        left: 0;
    }

    &__copyright {
        color: $text-color-light;
    }

    &__social {
        display: flex;
    }

    &__social-item {
        background-image: url(../assets/images/border.svg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        width: 118px;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 25px;

        &:last-child {
            margin-right: 0;
        }
    }

    &__social-title {
        font-family: 'Delius Swash Caps', cursive;
        font-weight: 400;
        font-size: 20px;
        line-height: 150%;
        color: $text-color-light;
    }
}

@media (max-width: 1600px) {
    .footer {
        &__inner {
            width: 74%;
        }

        &__img {
            width: 225px;
            height: 230px;
        }

        &__social-item {
            width: 96px;
            height: 73px;
        }

        &__social-title {
            font-size: 18px;
        }
    }
}

@media (max-width: 1300px) {
    .footer {
        padding: 100px 0 60px;

        &__inner {
            width: 55%;
            flex-direction: column;
            margin-right: 120px;
        }

        &__copyright {
            margin-bottom: 40px;
        }
    }
}

@media (max-width: 1000px) {
    .footer {
        padding: 80px 0 40px;

        &__inner {
            width: 66%;
            margin-right: 30px;
        }

        &__img {
            width: 185px;
            height: 169px;
        }

        &__social-item {
            width: 77px;
            height: 60px;
            margin-right: 20px;
        }

        &__social-title {
            font-size: 14px;
        }
    }
}
@media (max-width: 620px) {
    .footer {
        padding: 40px 0 20px;

        &__inner {
            width: 100%;
            margin-right: 0;
            justify-content: flex-end;
        }

        &__img {
            width: 136px;
            height: 146px;
        }
        &__copyright {
            margin-bottom: 20px;
            font-size: 14px;
            line-height: 18px;
        }
        &__social {
            flex-direction: column;
        }

        &__social-item {
            width: 67px;
            height: 53px;
            margin-right: 0;
            margin-bottom: 10px;
            &:last-child {
                margin-bottom: 0;
            }
        }

        &__social-title {
            font-size: 12px;
        }
    }
}
</style>