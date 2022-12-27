import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from '../RecipeModel';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @Input() recipe!: RecipeModel;
  @Input() name!: string;
  @Input() ingrediants!: string;

  constructor() {}

  ngOnInit(): void {
  }

  addRecipe():void {
    console.log(this.name);
    console.log(this.ingrediants);
  }

}
