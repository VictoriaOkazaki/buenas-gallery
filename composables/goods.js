



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
            src:  '/images/menu/good-1.webp',
            title: 'South donut',
            price: '5.6',
            alt: 'donut',
            category: 'dessert'
        },
        {
            src:  '/images/menu/good-2.webp',
            title: 'Cherry croisant',
            price: '3.8',
            alt: 'croissant',
            category: 'dessert'
        },
        {
            src:  '/images/menu/good-3.webp',
            title: 'Granny’s cake',
            price: '10.8',
            alt: 'cake',
            category: 'dessert'
        },
        {
            src:  '/images/menu/good-4.webp',
            title: 'Buenas mochis',
            price: '7.6',
            alt: 'mochi',
            category: 'dessert'
        },
        {
            src:  '/images/menu/cof-1.webp',
            title: 'Arabica',
            price: '5.6',
            alt: 'arabica',
            category: 'coffee'
        },
        {
            src:  '/images/menu/cof-2.webp',
            title: 'Flat white',
            price: '3.8',
            alt: 'Flat white',
            category: 'coffee'
        },
        {
            src:  '/images/menu/cof-3.webp',
            title: 'Lungo',
            price: '10.8',
            alt: 'Lungo',
            category: 'coffee'
        },
        {
            src:  '/images/menu/cof-4.webp',
            title: 'Galão',
            price: '7.6',
            alt: 'Galão',
            category: 'coffee'
        },
        {
            src:  '/images/menu/cof-5.webp',
            title: 'Ristretto',
            price: '5.6',
            alt: 'Ristretto',
            category: 'coffee'
        },
        {
            src:  '/images/menu/cof-6.webp',
            title: 'Affogato',
            price: '5.6',
            alt: 'Affogato',
            category: 'coffee'
        },
        {
            src:  '/images/menu/cof-7.webp',
            title: 'Robusta',
            price: '5.6',
            alt: 'Robusta',
            category: 'coffee'
        },
        {
            src:  '/images/menu/cof-8.webp',
            title: 'Turkish',
            price: '5.6',
            alt: 'Turkish',
            category: 'coffee'
        },
        {
            src:  '/images/menu/cof-9.webp',
            title: 'Macchiato',
            price: '5.6',
            alt: 'Macchiato',
            category: 'coffee'
        },
        {
            src:  '/images/menu/cof-10.webp',
            title: 'Red eye',
            price: '5.6',
            alt: 'Red eye',
            category: 'coffee'
        },
        {
            src:  '/images/menu/cof-12.webp',
            title: 'Latte',
            price: '5.6',
            alt: 'Latte',
            category: 'coffee'
        },
        {
            src:  '/images/menu/cof-13.webp',
            title: 'Americano',
            price: '5.6',
            alt: 'Americano',
            category: 'coffee'
        },
        {
            src:  '/images/menu/des-5.webp',
            title: 'Dream cupcake',
            price: '5.6',
            alt: 'cupcake',
            category: 'dessert'
        },
        {
            src:  '/images/menu/des-6.webp',
            title: 'Cake with macarons',
            price: '3.8',
            alt: 'Cake with macarons',
            category: 'dessert'
        },
        {
            src:  '/images/menu/des-7.webp',
            title: 'Princess cupcake',
            price: '3.8',
            alt: 'Princess cupcake',
            category: 'dessert'
        },
        {
            src:  '/images/menu/des-8.webp',
            title: 'Fairytale macarons',
            price: '10.8',
            alt: 'macarons',
            category: 'dessert'
        },
        {
            src:  '/images/menu/cok-1.webp',
            title: 'Blue lagoon',
            price: '7.6',
            alt: 'Blue lagoon',
            category: 'cocktail'
        },
        {
            src:  '/images/menu/cok-2.webp',
            title: 'Sea breeze',
            price: '5.6',
            alt: 'coktail',
            category: 'coktail'
        },
        {
            src:  '/images/menu/cok-3.webp',
            title: 'Night wishes',
            price: '3.8',
            alt: 'cocktail',
            category: 'cocktail'
        },
        {
            src:  '/images/menu/cok-4.webp',
            title: 'French 75',
            price: '10.8',
            alt: 'cocktail',
            category: 'cocktail'
        },
        {
            src:  '/images/menu/cok-5.webp',
            title: 'Summer anthem',
            price: '7.6',
            alt: 'cocktail',
            category: 'cocktail'
        },
        {
            src:  '/images/menu/cok-6.webp',
            title: 'Lillet cocktail',
            price: '3.8',
            alt: 'cocktail',
            category: 'cocktail'
        },
        {
            src:  '/images/menu/cok-7.webp',
            title: 'Amaro Spritz',
            price: '10.8',
            alt: 'cocktail',
            category: 'cocktail'
        },
        {
            src:  '/images/menu/cok-8.webp',
            title: 'Strawberry Mimosa',
            price: '10.8',
            alt: 'cocktail',
            category: 'cocktail'
        },
        {
            src:  '/images/menu/cok-9.webp',
            title: 'Old Cuban',
            price: '3.8',
            alt: 'cocktail',
            category: 'cocktail'
        },
        {
            src:  '/images/menu/f-1.webp',
            title: 'Coal Burger',
            price: '24.5',
            alt: 'burger',
            category: 'food'
        },
        {
            src:  '/images/menu/f-2.webp',
            title: 'Lentil soup',
            price: '21.6',
            alt: 'soup',
            category: 'food'
        },
        {
            src:  '/images/menu/f-3.webp',
            title: 'Cream soup with crackers',
            price: '19.6',
            alt: 'soup',
            category: 'food'
        },
        {
            src:  '/images/menu/f-4.webp',
            title: 'Tacos trio',
            price: '29.8',
            alt: 'tacos',
            category: 'food'
        },
        {
            src:  '/images/menu/f-5.webp',
            title: 'Buendia`s burger',
            price: '15.8',
            alt: 'burger',
            category: 'food'
        },
        {
            src:  '/images/menu/f-6.webp',
            title: 'Pasta de Italiano',
            price: '25.5',
            alt: 'pasta',
            category: 'food'
        },
        {
            src:  '/images/menu/f-7.webp',
            title: 'Fruit assorti',
            price: '12.4',
            alt: 'assorti',
            category: 'food'
        },
        {
            src:  '/images/menu/f-8.webp',
            title: 'Vegetable salad',
            price: '8.4',
            alt: 'salad',
            category: 'food'
        },
        {
            src:  '/images/menu/f-9.webp',
            title: 'Lula-kebab',
            price: '58.5',
            alt: 'kabab',
            category: 'food'
        },
        {
            src:  '/images/menu/f-10.webp',
            title: 'Buendia`s steak',
            price: '38.8',
            alt: 'steak',
            category: 'food'
        },
        {
            src:  '/images/menu/t-1.webp',
            title: 'Blackberry tea',
            price: '8.8',
            alt: 'tea',
            category: 'tea'
        },
        {
            src:  '/images/menu/t-2.webp',
            title: 'Jasmine tea',
            price: '5.7',
            alt: 'tea',
            category: 'tea'
        },
        {
            src:  '/images/menu/t-3.webp',
            title: 'Orange tea',
            price: '5.2',
            alt: 'tea',
            category: 'tea'
        },
        {
            src:  '/images/menu/t-4.webp',
            title: 'Black tea',
            price: '4.5',
            alt: 'tea',
            category: 'tea'
        },
        {
            src:  '/images/menu/t-5.webp',
            title: 'Maroccan mint tea',
            price: '7.8',
            alt: 'tea',
            category: 'tea'
        },
        {
            src:  '/images/menu/t-6.webp',
            title: 'Green tea with thyme',
            price: '6.8',
            alt: 'tea',
            category: 'tea'
        },
        {
            src:  '/images/menu/t-7.webp',
            title: 'Carcade',
            price: '6.2',
            alt: 'tea',
            category: 'tea'
        },
        {
            src:  '/images/menu/t-8.webp',
            title: 'Hibiscus tea',
            price: '7.2',
            alt: 'tea',
            category: 'tea'
        },
    ]

    return { filters, allGoods }
}