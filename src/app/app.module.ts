import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { RouterModule, Routes } from '@angular/router';
import { CompAtributosComponent } from './comp-atributos/comp-atributos.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CompAtributosComponent
  ],
  imports: [
    [RouterModule.forRoot(routes)],
    BrowserModule,
    FormsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
