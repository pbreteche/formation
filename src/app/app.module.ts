import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { CreateComponent } from './components/create/create.component';
import {VineyardManagerService} from '../models/vineyard-manager.service';
import {RouterModule} from '@angular/router';
import {AdminGuard} from './admin-guard';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DetailComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: MenuComponent},
      {
        path: ':id',
        children: [
          { path: '', component: DetailComponent },
          { path: 'edit', component: EditComponent, data: { sideBar: 'admin-bar' }, canActivate: [ AdminGuard ] }
        ]
      },
      { path: 'create', component: CreateComponent, outlet: 'popup'},
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ],
  providers: [
    //VineyardManagerService => identique à la ligne suivante
    { provide: VineyardManagerService, useClass: VineyardManagerService },
    AdminGuard
    // autres exemples de déclaration de services
    // { provide: VINEYARD_LIST_TOKEN, useFactory: vineyardFactory, deps: [42] },
    // { provide: VINEYARD_LIST_TOKEN, useExisting: VineyardManagerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
