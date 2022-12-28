import { Injectable, OnInit } from '@angular/core';
import { RECIPES } from './MockRecipes';
import { RecipeModel } from './RecipeModel';

@Injectable({
  providedIn: 'root'
})
export class RecipeListService implements OnInit{

  idCounter: number;
  recipes: RecipeModel[];

  constructor() {
    this.recipes = RECIPES;
    this.idCounter = this.recipes.length;
  }

  ngOnInit(): void {
  }

  addRecipe(recipe: RecipeModel): void {
    recipe.id = ++this.idCounter;
    this.recipes.push(recipe);
  }

  getRecipeList(): RecipeModel[] {
    return this.recipes;
  }
}
