import { RecipeIngrediants } from "./RecipeIngredients";

export interface RecipeModel {
    id: number;
    name: string;
    ingrediants: RecipeIngrediants[];
    image: string;
}