import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

// ** Mis Components **
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
