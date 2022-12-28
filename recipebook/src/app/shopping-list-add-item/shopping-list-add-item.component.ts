import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../Item';

@Component({
  selector: 'app-shopping-list-add-item',
  templateUrl: './shopping-list-add-item.component.html',
  styleUrls: ['./shopping-list-add-item.component.css']
})
export class ShoppingListAddItemComponent {
  idCounter: number;
  title!: string;
  quantity!: number;
  @Output() itemAdd: EventEmitter<Item> = new EventEmitter();

  constructor() {
    this.idCounter = 0;
  }

  onSubmit(): void {
    this.idCounter++;
    const item: Item = {
      id:this.idCounter,
      title: this.title,
      quantity: Number(this.quantity)
    }

    this.itemAdd.emit(item);
  }
}
