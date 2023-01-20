import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { UserButtonComponent } from './components/user-button/user-button.component';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    SearchBarComponent,
    HeaderComponent,
    FooterComponent,
    UserButtonComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  exports: [SearchBarComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
