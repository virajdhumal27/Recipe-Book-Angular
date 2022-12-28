import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListDisplayItemComponent } from './shopping-list-display-item.component';

describe('ShoppingListDisplayItemComponent', () => {
  let component: ShoppingListDisplayItemComponent;
  let fixture: ComponentFixture<ShoppingListDisplayItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListDisplayItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListDisplayItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
