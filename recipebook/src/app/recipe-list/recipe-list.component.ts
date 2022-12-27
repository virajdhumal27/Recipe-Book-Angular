import { Component, OnInit } from '@angular/core';
import { RecipeListService } from '../recipe-list.service';
import { RecipeModel } from '../RecipeModel';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: RecipeModel[] = [];
  
  constructor(private recipeListService: RecipeListService) {}

  ngOnInit(): void {
    this.recipes = this.recipeListService.getRecipeList();
  }

}
