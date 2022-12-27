import { RecipeIngrediants } from "./RecipeIngredients";

export interface RecipeItem {
    id: number;
    name: string;
    ingrediants: RecipeIngrediants[];
    image: string;
}