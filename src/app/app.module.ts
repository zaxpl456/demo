import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { SpoolsComponent } from './spools/spools.component';
import { SpoolsFormComponent } from './spools-form/spools-form.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
const appRoutes : Routes =[


  {
    path: 'spools',
    component: SpoolsComponent,
  },

  {
    path: 'spools-form/:id',
    component: SpoolsFormComponent,
  },

  {
    path: 'spools-form',
    component: SpoolsFormComponent,
  }
];


@NgModule({
  declarations: [
    AppComponent,
    SpoolsComponent,
    SpoolsFormComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,





  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
