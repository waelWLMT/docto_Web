import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';



@NgModule({
  declarations: [
    SideBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarComponent   
  ]
})
export class SharedModule { }
