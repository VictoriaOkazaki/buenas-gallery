<template>
    <div class="ellipse" v-for="n in slidesCount" :class="{active: getActivity(n - 1)}" @click="goTo(n - 1)">
        <svg class="el-svg" width="30" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="el-path"
                d="M29.5 19.61C29.5 24.9251 27.8515 29.7185 25.2095 33.1726C22.5678 36.6262 18.9537 38.72 15 38.72C11.0463 38.72 7.43224 36.6262 4.79054 33.1726C2.14848 29.7185 0.5 24.9251 0.5 19.61C0.5 14.2949 2.14848 9.50147 4.79054 6.04741C7.43224 2.59383 11.0463 0.5 15 0.5C18.9537 0.5 22.5678 2.59383 25.2095 6.04741C27.8515 9.50147 29.5 14.2949 29.5 19.61Z"
                stroke="#250C00" />
        </svg>
    </div>
</template>

<script setup>
const props = defineProps({
    slidesCount: {
        required: true,
        type: Number
    },
    activeIndex: {
        required: true,
        type: Number
    },
    goTo: {
        required: true,
        type: Function
    },
})
const getActivity = (index) => {
    return index === props.activeIndex
}
</script>

<style lang="scss" scoped>
.ellipse {
    margin-bottom: 40px;
    cursor: pointer;

    &:last-child {
        margin-bottom: 0;
    }
}

.ellipse.active {
    .el-svg {
        fill: $acsent-color;
    }

    .el-path {
        stroke: none;
    }
}

.el-path {
    stroke: $text-color;
}

@media (max-width: 1600px) {
    .ellipse {
        margin-bottom: 20px;
    }
}

@media (max-width: 1000px) {
    .ellipse {
        margin-bottom: 8px;
    }

    .ellipse,
    .el-svg {
        width: 18px;
        height: 23px;
    }
}
@media (max-width: 400px) {
.ellipse,
.el-svg {
    width: 12px;
    height: 15px;
}
}
</style>