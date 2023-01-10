import { Component, Input, OnInit } from '@angular/core';
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
  @Input() ingrediantsInput!: string;
  @Input() name!: string;
  @Input() ingrediants!: string[];
  @Input() imageUrl!: string;
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

    this.name = this.recipe.name;
    this.ingrediantsInput = this.getIngrediants();
    this.imageUrl = this.recipe.image;
  }

  getIngrediants(): string {
    return this.recipe.ingrediants.join(', ');
  }

  updateRecipe(): void {
    console.log(this.ingrediantsInput);
    this.recipe.ingrediants = this.ingrediantsInput.split(',');
    this.recipe.name = this.name;
    this.recipe.image = this.imageUrl;
    this.recipeListService.updateRecipe(this.id, this.recipe);
  }

}
