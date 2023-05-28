<template>
    <a v-if="link.href.startsWith('#')"
        :href="link.href" @click.prevent="smoothScrollToSection(link.href.substring(1))">
        {{ link.title }}
    </a>
    <NuxtLink v-else :to="link.href">{{ link.title }}</NuxtLink>
</template>

<script setup>
defineProps({
    link: {
        required: true
    }
})
</script>

<style lang="scss" scoped></style>