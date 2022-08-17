import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from 'src/store/store.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
