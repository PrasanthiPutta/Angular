import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { RouterModule, Routes } from '@angular/router';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { DbdataService } from './dbdata.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit',
    component: EditComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    SlimLoadingBarModule,
    HttpClientModule
    
  ],
  providers: [DbdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
