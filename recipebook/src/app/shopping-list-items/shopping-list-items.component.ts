import { Component } from '@angular/core';
import { Item } from 'src/app/Item';

@Component({
  selector: 'app-shopping-list-items',
  templateUrl: './shopping-list-items.component.html',
  styleUrls: ['./shopping-list-items.component.css']
})
export class ShoppingListItemsComponent {
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
