import { RecipeItem } from "./RecipeItem";

export const RECIPES: RecipeItem[] = [
    {
        id: 1,
        name: 'Soup',
        ingrediants: [
            {
                name: 'Tomato',
                amount: 2
            },
            {
                name: 'Salt',
                amount: 1
            }
        ],
        image: 'SOUP_URL'
    },
    {
        id: 2,
        name: 'Salad',
        ingrediants: [
            {
                name: 'Tomato',
                amount: 2
            },
            {
                name: 'Spinach',
                amount: 1
            },
            {
                name: 'Carrot',
                amount: 1
            }
        ],
        image: 'Salad_URL'
    }
];