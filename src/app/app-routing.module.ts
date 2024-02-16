import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BakersComponent } from './components/bakers/bakers.component';
import { BannerComponent } from './components/banner/banner.component';
import { NewComponent } from './components/new/new.component';
import { ProductsComponent } from './components/products/products.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ReviewComponent } from './components/review/review.component';
import { ModalComponent } from './components/modal/modal.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartComponent } from './components/cart/cart.component';
import { OurproductsComponent } from './components/ourproducts/ourproducts.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {path: "", component : HomeComponent},
  {path: "about", component : AboutComponent},
  {path: "banner", component : BannerComponent},
  {path: "bakers", component : BakersComponent},
  {path: "new", component : NewComponent},
  {path: "modal", component :ModalComponent},
  {path: "products", component : ProductsComponent},
  {path: "questions", component :QuestionsComponent },
  {path: "review", component :ReviewComponent },
  {path: "aboutus", component :AboutusComponent},
  {path: "contact", component :ContactComponent},
  {path: "cart", component :CartComponent},
  {path: "ourproducts", component :OurproductsComponent},
  {path: "checkout", component :CheckoutComponent},
  {path: "dashboard", component :DashboardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
