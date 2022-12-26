import { Component, OnInit } from '@angular/core';
import { RecipeItem } from '../RecipeItem';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: RecipeItem[] = [];
  
  constructor() {}

  ngOnInit(): void {
  }

}
