import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasePageComponent } from './base-page/base-page.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [	
    AppComponent,
    BasePageComponent,
      ProductCardComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
