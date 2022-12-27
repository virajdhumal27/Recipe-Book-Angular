import { Injectable, OnInit } from '@angular/core';
import { RECIPES } from './MockRecipes';
import { RecipeItem } from './RecipeItem';

@Injectable({
  providedIn: 'root'
})
export class RecipeListService implements OnInit{

  constructor() { }

  ngOnInit(): void {
  }

  getRecipeList(): RecipeItem[] {
    return RECIPES;
  }
}
