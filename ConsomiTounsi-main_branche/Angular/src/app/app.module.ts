import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from "@angular/common";
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { DeliveryagentComponent } from './deliveryagent/deliveryagent.component';

import { UsersComponent } from './users/users.component';
import { ListprodComponent } from './products/listprod/listprod.component';
import { CreateprodComponent } from './products/createprod/createprod.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UpdateprodComponent } from './products/updateprod/updateprod.component';
import { ContactComponent } from './contact/contact.component';
import { AdComponent } from './ad/ad.component';
import { CreateadComponent } from './ad/createad/createad.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { CreateStockComponent } from './create-stock/create-stock.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { AisleDetailsComponent } from './aisle-details/aisle-details.component';
import { UpdateAilseComponent } from './update-ailse/update-ailse.component';
import { CreateAisleComponent } from './create-aisle/create-aisle.component';
import { AisleListComponent } from './aisle-list/aisle-list.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { SellerResgistrationComponent } from './client/seller-resgistration/seller-resgistration.component';
import { AdminComponent } from './admin/admin.component';
import { ClientResgistrationComponent } from './client/client-resgistration/client-resgistration.component';
import { LoginComponent } from './login/login.component';
import { BillComponent } from './shop/bill/bill.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { LigneorderComponent } from './shop/ligneorder/ligneorder.component';
import { ButtonPaypalComponent } from './shop/button-paypal/button-paypal.component';
import { BonComponent } from './shop/bon/bon.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { DeliveryComponent } from './delivery/delivery.component';
import { MapBoxComponent } from './map-box/map-box.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { MailComponent } from './mail/mail.component';
import { ProductsComponent } from './products/products/products.component';
import { TestComponent } from './test/test.component';
import { SearchrPipe } from './searchr.pipe';
import { CategoryComponent } from './category/category.component';
import { AddcategComponent } from './category/addcateg/addcateg.component';
import { ListcategComponent } from './category/listcateg/listcateg.component';
import { UpdatecategoryComponent } from './category/updatecategory/updatecategory.component';







@NgModule({
  declarations: [
    AppComponent,
  
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    DeliveryagentComponent,
    UsersComponent,
    ListprodComponent,
    CreateprodComponent,
    UpdateprodComponent,
    ContactComponent,
    AdComponent,
    CreateadComponent,
    StockListComponent,
    CreateStockComponent,
    UpdateStockComponent,
    StockDetailsComponent,
    ClientListComponent,
    AisleDetailsComponent,
    UpdateAilseComponent,
    CreateAisleComponent,
    AisleListComponent,
    SendMailComponent,
    SellerResgistrationComponent,
    AdminComponent,
    ClientResgistrationComponent,
    LoginComponent,
    BillComponent,
    CheckoutComponent,
    LigneorderComponent,
    ButtonPaypalComponent,
    BonComponent,
    SearchfilterPipe,
    DeliveryComponent,
    MapBoxComponent,
    ComplaintComponent,
    MailComponent,
    ProductsComponent,
    TestComponent,
    SearchrPipe,
    CategoryComponent,
    AddcategComponent,
    ListcategComponent,
    UpdatecategoryComponent
    
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],

 
})
export class AppModule { }
