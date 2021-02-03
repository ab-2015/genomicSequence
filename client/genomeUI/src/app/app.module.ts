import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PathogenDataService} from '../services/pathogen.data.service';
import { AddPathogenComponent } from './add-pathogen/add-pathogen.component';
import { ListPathogenComponent } from './list-pathogen/list-pathogen.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPathogenComponent,
    ListPathogenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PathogenDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
