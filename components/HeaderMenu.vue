<template>
    <nav class="menu">
        <AppLink class="menu__item" v-for="link in links" :link="link"></AppLink>
    </nav>
</template>

<script setup>
const route = useRoute()
let links = [
    {
        title: 'Menu',
        href: '#menu'
    },
    {
        title: 'Books',
        href: '#books'
    },
    {
        title: 'Arts',
        href: '#arts'
    },
    {
        title: 'Gallery',
        href: '#gallery'
    },
    {
        title: 'Contacts',
        href: '#contacts'
    }
];

if (route.name === 'menu') {
    links = [
        {
            title: 'Home',
            href: '/'
        },
        {
            title: 'Reserve a table',
            href: '/reserve'
        }
    ]
} else if (route.name === 'menu-category') {
    links = [
        {
            title: 'Home',
            href: '/'
        },
        {
            title: 'Reserve a table',
            href: '/reserve'
        },
        {
            title: 'Menu',
            href: '/menu'
        }
    ]
} else if (route.name === 'reserve') {
    links = [
        {
            title: 'Home',
            href: '/'
        },
        {
            title: 'Menu',
            href: '/menu'
        }
    ]
} else if (route.name === 'reserve-tables') {
    links = [
        {
            title: 'Home',
            href: '/'
        },
        {
            title: 'Menu',
            href: '/menu'
        },
        {
            title: 'Timetable',
            href: '/reserve'
        }
    ]
}
</script>

<style lang="scss" scoped>
.menu {
    &__item {
        margin-right: 30px;
        font-family: 'Delius Swash Caps', cursive;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: $text-color;
        transition: all .4s ease-out;

        &:hover,
        &:active {
            color: $acsent-color;
        }

        &:last-child {
            margin-right: 0;
        }
    }
}

@media (max-width: 1400px) {
    .menu {
        &__item {
            margin-right: 15px;
            font-size: 18px;
            line-height: 23px;
        }
    }
}

@media (max-width: 1000px) {
    .menu {
        &__item {
            margin-right: 0;
            margin-bottom: 25px;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}

@media (max-width: 650px) {
    .menu {
        &__item {
            margin-bottom: 20px;
        }
    }
}
</style>