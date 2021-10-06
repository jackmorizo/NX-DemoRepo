import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { DataTablesExampleComponent } from './data-tables-example/data-tables-example.component';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { CustomDataTablesExampleComponent } from './custom-data-tables-example/custom-data-tables-example.component';




import { MaterialModule } from '@demorepo/material';
import { FxDataTableModule } from '@demorepo/shared/ui';






@NgModule({
  declarations: [
    AppComponent,
    DataTablesExampleComponent,
    AppNavigationComponent,
    CustomDataTablesExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FxDataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }