import { RecipeModel } from "./RecipeModel";

export const RECIPES: RecipeModel[] = [
    {
        id: 1,
        name: 'Tomato Soup',
        ingrediants: ["Tomatoes 4", "Water 1ltr"
        ],
        image: 'https://images.unsplash.com/photo-1620791144170-8a443bf37a33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
    },
    {
        id: 2,
        name: 'Mix Vegetable Salad',
        ingrediants: [ "2 Tomatoes", "1 Spinach", "2 Carrots"
            // {
            //     name: 'Tomato',
            //     amount: 2
            // },
            // {
            //     name: 'Spinach',
            //     amount: 1
            // },
            // {
            //     name: 'Carrot',
            //     amount: 1
            // }
        ],
        image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1078&q=80'
    },
    {
        id: 3,
        name: 'Italian Pasta',
        ingrediants: [
            // {
            //     name: 'Tomato',
            //     amount: 2
            // },
            // {
            //     name: 'Spinach',
            //     amount: 1
            // },
            // {
            //     name: 'Carrot',
            //     amount: 1
            // }
        ],
        image: 'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    }
];