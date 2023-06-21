



const filters = [
    {
        title: 'Coffee',
        category: 'coffee'
    },
    {
        title: 'Tea',
        category: 'tea'
    },
    {
        title: 'Cocktails',
        category: 'cocktail'
    },
    {
        title: 'Desserts',
        category: 'dessert'
    },
    {
        title: 'Foods',
        category: 'food'
    }
]

export const useGoods = () => {
    const config = useRuntimeConfig()
    const baseUrl = config.public.baseUrl

    const allGoods = [
        {
            src: baseUrl + '/images/menu/good-1.webp',
            title: 'South donut',
            price: '5.6',
            alt: 'donut',
            category: 'dessert'
        },
        {
            src: baseUrl + '/images/menu/good-2.webp',
            title: 'Cherry croisant',
            price: '3.8',
            alt: 'croissant',
            category: 'dessert'
        },
        {
            src: baseUrl + '/images/menu/good-3.webp',
            title: 'Granny’s cake',
            price: '10.8',
            alt: 'cake',
            category: 'dessert'
        },
        {
            src: baseUrl + '/images/menu/good-4.webp',
            title: 'Buenas mochis',
            price: '7.6',
            alt: 'mochi',
            category: 'dessert'
        },
        {
            src: baseUrl + '/images/menu/good-1.webp',
            title: 'South donut',
            price: '5.6',
            alt: 'donut',
            category: 'dessert'
        },
        {
            src: baseUrl + '/images/menu/good-2.webp',
            title: 'tea',
            price: '3.8',
            alt: 'croissant',
            category: 'tea'
        },
        {
            src: baseUrl + '/images/menu/good-3.webp',
            title: 'tea',
            price: '10.8',
            alt: 'cake',
            category: 'tea'
        },
        {
            src: baseUrl + '/images/menu/good-4.webp',
            title: 'tea',
            price: '7.6',
            alt: 'mochi',
            category: 'tea'
        },
        {
            src: baseUrl + '/images/menu/good-1.webp',
            title: 'Macchiato',
            price: '5.6',
            alt: 'donut',
            category: 'coffee'
        },
        {
            src: baseUrl + '/images/menu/good-1.webp',
            title: 'Macchiato',
            price: '5.6',
            alt: 'donut',
            category: 'coffee'
        },
        {
            src: baseUrl + '/images/menu/good-1.webp',
            title: 'Macchiato',
            price: '5.6',
            alt: 'donut',
            category: 'coffee'
        },
        {
            src: baseUrl + '/images/menu/good-1.webp',
            title: 'Macchiato',
            price: '5.6',
            alt: 'donut',
            category: 'coffee'
        },
        {
            src: baseUrl + '/images/menu/good-1.webp',
            title: 'Macchiato',
            price: '5.6',
            alt: 'donut',
            category: 'coffee'
        },
        {
            src: baseUrl + '/images/menu/good-1.webp',
            title: 'Macchiato',
            price: '5.6',
            alt: 'donut',
            category: 'coffee'
        },
        {
            src: baseUrl + '/images/menu/good-1.webp',
            title: 'Macchiato',
            price: '5.6',
            alt: 'donut',
            category: 'coffee'
        },
        {
            src: baseUrl + '/images/menu/good-1.webp',
            title: 'Macchiato',
            price: '5.6',
            alt: 'donut',
            category: 'coffee'
        },
        {
            src: baseUrl + '/images/menu/good-1.webp',
            title: 'Macchiato',
            price: '5.6',
            alt: 'donut',
            category: 'coffee'
        },
        {
            src: baseUrl + '/images/menu/good-1.webp',
            title: 'Macchiato',
            price: '5.6',
            alt: 'donut',
            category: 'coffee'
        },
        {
            src: baseUrl + '/images/menu/good-1.webp',
            title: 'Turkish',
            price: '3.8',
            alt: 'croissant',
            category: 'coffee'
        },
        {
            src: baseUrl + '/images/menu/good-2.webp',
            title: 'latte',
            price: '3.8',
            alt: 'croissant',
            category: 'coffee'
        },
        {
            src: baseUrl + '/images/menu/good-3.webp',
            title: 'Granny’s cake',
            price: '10.8',
            alt: 'cake'
        },
        {
            src: baseUrl + '/images/menu/good-4.webp',
            title: 'Buenas mochis',
            price: '7.6',
            alt: 'mochi'
        },
        {
            src: baseUrl + '/images/menu/good-1.webp',
            title: 'South donut',
            price: '5.6',
            alt: 'donut'
        },
        {
            src: baseUrl + '/images/menu/good-2.webp',
            title: 'Cherry croisant',
            price: '3.8',
            alt: 'croissant'
        },
        {
            src: baseUrl + '/images/menu/good-3.webp',
            title: 'Granny’s cake',
            price: '10.8',
            alt: 'cake'
        },
        {
            src: baseUrl + '/images/menu/good-4.webp',
            title: 'Buenas mochis',
            price: '7.6',
            alt: 'mochi'
        },
        {
            src: baseUrl + '/images/menu/good-2.webp',
            title: 'Cherry croisant',
            price: '3.8',
            alt: 'croissant'
        },
        {
            src: baseUrl + '/images/menu/good-3.webp',
            title: 'Granny’s cake',
            price: '10.8',
            alt: 'cake'
        }
    ]

    return { filters, allGoods }
}