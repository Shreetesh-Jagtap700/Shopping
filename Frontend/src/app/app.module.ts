import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './Components/Pages/cart/cart.component';
import { HomepageComponent } from './Components/Pages/homepage/homepage.component';
import { SignupComponent } from './Components/Pages/signup/signup.component';
import { SigninComponent } from './Components/Pages/signin/signin.component';
import { FooterComponent } from './Components/Utilities/footer/footer.component';
import { HeaderComponent } from './Components/Utilities/header/header.component';
import { AboutComponent } from './Components/Pages/about/about.component';
import { ContactComponent } from './Components/Pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomepageComponent,
    SignupComponent,
    SigninComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
