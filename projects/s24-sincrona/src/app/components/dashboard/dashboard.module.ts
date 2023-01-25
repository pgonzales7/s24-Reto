import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from '../../app-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    TableComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent,
    TableComponent,
    DashboardComponent
  ]
})
export class DashboardModule { }
