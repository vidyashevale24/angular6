import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes , RouterModule, Router} from '@angular/router';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

const r: Routes=[
  {path: '', component: HomeComponent},
  {path: 'Users', component: UsersComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Register', component: RegisterComponent}
 ];
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule .forRoot(r),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
