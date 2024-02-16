import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { NewComponent } from './components/new/new.component';
import { BakersComponent } from './components/bakers/bakers.component';
import { ReviewComponent } from './components/review/review.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ModalComponent } from './components/modal/modal.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartComponent } from './components/cart/cart.component';
import { OurproductsComponent } from './components/ourproducts/ourproducts.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    ProductsComponent,
    NewComponent,
    BakersComponent,
    ReviewComponent,
    QuestionsComponent,
    ModalComponent,
    AboutusComponent,
    ContactComponent,
    CartComponent,
    OurproductsComponent,
    CheckoutComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
