import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from 'src/models/model.module';
import { CounterDirective } from './counter.directive';
import { StoreComponent } from './store.component';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule], // store module depende de estos modulos
  declarations: [StoreComponent, CounterDirective], // declare the StoreComponent
  exports: [StoreComponent], // export the StoreComponent
})
export class StoreModule {}
