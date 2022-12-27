import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from '../RecipeModel';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe?: RecipeModel;

  constructor() { }
  
  ngOnInit(): void {
  }
}
