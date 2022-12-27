import { Injectable, OnInit } from '@angular/core';
import { RECIPES } from './MockRecipes';
import { RecipeModel } from './RecipeModel';

@Injectable({
  providedIn: 'root'
})
export class RecipeListService implements OnInit{

  recipes: RecipeModel[];

  constructor() {
    this.recipes = RECIPES;
  }

  ngOnInit(): void {
  }

  getRecipeList(): RecipeModel[] {
    return this.recipes;
  }
}
