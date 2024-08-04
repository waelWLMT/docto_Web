import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [
    AddUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [AddUserComponent]
})
export class UserModule { }
