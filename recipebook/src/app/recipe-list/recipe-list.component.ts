import { Component, OnInit } from '@angular/core';
import { RecipeListService } from '../recipe-list.service';
import { RecipeItem } from '../RecipeItem';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: RecipeItem[] = [];
  
  constructor(private recipeListService: RecipeListService) {}

  ngOnInit(): void {
    this.recipes = this.recipeListService.getRecipeList();
  }

}
