import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { EventComponent } from './event/event.component';
import { FooterComponent } from './footer/footer.component'; 
import { RegisterComponent } from './component/register/register.component';
import { TermsComponent } from './component/terms/terms.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { FeedbackComponent } from './component/feedback/feedback.component';
import { ForgotpassComponent } from './component/forgotpass/forgotpass.component';
import { SubmittedComponent } from './component/submitted/submitted.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { ProductdescriptionComponent } from './component/productdescription/productdescription.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    FilterPipe,
    LoginComponent,
    PagenotfoundComponent,
    EventComponent,
    FooterComponent,
    RegisterComponent,
    TermsComponent,
    ContactusComponent,
    AboutusComponent,
    FeedbackComponent,
    ForgotpassComponent,
    SubmittedComponent,
    CheckoutComponent,
    ProductdescriptionComponent,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
