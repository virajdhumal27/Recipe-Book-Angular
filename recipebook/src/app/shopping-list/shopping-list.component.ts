import { Component } from '@angular/core';
import { Item } from '../Item';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  items: Item[];

  constructor() {
    this.items = []
  }

  deleteItem(item: Item) {
    console.log(item);
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  
  addItem(item: Item): void {
    console.log(item);
    this.items.push(item);
  }
}
