import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './sign-in/sign-in.component';

import { AuthRoutingModule } from './auth.routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, SharedModule, FormsModule],
  declarations: [AuthComponent, SignInComponent, SignUpComponent],
})
export class AuthModule {}
