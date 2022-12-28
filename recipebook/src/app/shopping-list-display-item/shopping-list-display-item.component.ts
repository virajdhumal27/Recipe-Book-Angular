import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/Item';

@Component({
  selector: 'app-shopping-list-display-item',
  templateUrl: './shopping-list-display-item.component.html',
  styleUrls: ['./shopping-list-display-item.component.css']
})
export class ShoppingListDisplayItemComponent {
  @Input() item!: Item;
  @Output() itemDelete: EventEmitter<Item> = new EventEmitter();

  decreaseQuantity(): void {
    this.item.quantity = this.item.quantity-1;
    if (this.item.quantity < 2) {
      this.item.quantity = 1;
    }
    console.log("- triggered");
  }
  
  increaseQuantity(): void {
    this.item.quantity = this.item.quantity+1;
    console.log("+ triggered");
  }

  deleteItem(item: Item): void {
    console.log("item delete triggered");
    this.itemDelete.emit(item);
  }
}
