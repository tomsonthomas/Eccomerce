import { UserHomeRoutingModule } from './userhome-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserhomePage } from './userhome.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
   UserHomeRoutingModule
  ],
  declarations: [UserhomePage]
})
export class UserhomePageModule {}
