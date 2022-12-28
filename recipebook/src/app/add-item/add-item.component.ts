import { Component, Input, OnInit } from '@angular/core';
import { RecipeListService } from '../recipe-list.service'; 
import { RecipeModel } from '../RecipeModel';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @Input() recipe!: RecipeModel;
  @Input() name!: string;
  @Input() ingrediantsInput!: string;
  @Input() ingrediants!: string[];
  @Input() imageUrl!: string;

  constructor(private recipeListService: RecipeListService) {}

  ngOnInit(): void {
  }

  addRecipe():void {
    
    this.ingrediants = this.ingrediantsInput.split(',');
    console.log(this.ingrediants);
    
    this.recipe = {
      id: 1,
      name: this.name,
      ingrediants: this.ingrediants,
      image: this.imageUrl
    }
    // this.recipe.name = this.name;
    // this.recipe.ingrediants = this.ingrediants;
    this.recipeListService.addRecipe(this.recipe);
    console.info("Recipe Added successfully!")
  }

}
