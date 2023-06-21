type Categories = 'dessert' | 'tea' | 'coffee' | 'cocktail' | 'food'

interface ICategory {
    category: Categories
}

export const useFilteredGoods = (allGoods: ICategory[]) => {
    const category = ref<Categories>('dessert')
    const filteredGoods = computed(() => {
        return allGoods.filter(g => g.category === category.value)
    })

    return { category, filteredGoods }
}