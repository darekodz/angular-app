import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './containers/items/items.component';
import { WorkersComponent } from './containers/workers/workers.component';
import { DatagridComponent } from './components/datagrid/datagrid.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ItemDetailComponent } from './containers/item-detail/item-detail.component';
import { AuthComponent } from './components/auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CORSInterceptor } from './utils/cors.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddItemComponent } from './components/add-item/add-item.component';
import { RegisterComponent } from './containers/register/register.component';
import { MapToIterablePipe } from './pipes/map-to-iterable.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    WorkersComponent,
    DatagridComponent,
    SearchComponent,
    ItemDetailComponent,
    AuthComponent,
    AddItemComponent,
    RegisterComponent,
    MapToIterablePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: CORSInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
