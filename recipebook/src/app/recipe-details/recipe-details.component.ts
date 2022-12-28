import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeListService } from '../recipe-list.service';
import { RecipeModel } from '../RecipeModel';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe!: RecipeModel;
  ingrediantsInput: string = "";
  id!: number;

  constructor(
    private recipeListService: RecipeListService,
    private route: ActivatedRoute
  ) {

   }

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipe = this.recipeListService.getRecipe(this.id);
  }

  getIngrediants(): string {
    return this.recipe.ingrediants.join(', ');
  }

  updateRecipe(): void {
    this.recipe.ingrediants = this.ingrediantsInput.split(',');

    this.recipeListService.updateRecipe(this.id, this.recipe);
  }

}
