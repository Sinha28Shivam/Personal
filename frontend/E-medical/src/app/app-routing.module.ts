import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductsComponent } from './component/products/products.component';
import { LoginComponent } from './component/login/login.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './component/register/register.component';
import { TermsComponent } from './component/terms/terms.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { FeedbackComponent } from './component/feedback/feedback.component';
import { ForgotpassComponent } from './component/forgotpass/forgotpass.component';
import { SubmittedComponent } from './component/submitted/submitted.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { ProductdescriptionComponent } from './component/productdescription/productdescription.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: ProductsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'forgotpass', component: ForgotpassComponent},
  {path: 'submitted', component: SubmittedComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'desc', component: ProductdescriptionComponent},
  {path:'', redirectTo: '/products', pathMatch: 'full'},
  {path:'**', component: PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
