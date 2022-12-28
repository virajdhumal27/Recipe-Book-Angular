import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { ShoppingListItemsComponent } from './shopping-list-items/shopping-list-items.component';

const routes: Routes = [
  { path: 'recipe-list', component: RecipeListComponent },
  { path: 'shopping-list-items', component: ShoppingListItemsComponent },
  { path: 'add-item', component: AddItemComponent},
  { path: 'recipe-details/:id', component: RecipeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
