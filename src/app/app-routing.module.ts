import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './containers/items/items.component';
import { WorkersComponent } from './containers/workers/workers.component';
import { ItemDetailComponent } from './containers/item-detail/item-detail.component';
import { RegisterComponent } from './containers/register/register.component';

const routes: Routes = [
  { path: 'items', component: ItemsComponent },
  { path: 'workers', component: WorkersComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'items/:id', component: ItemDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
