import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateprodComponent } from './products/createprod/createprod.component';
import { DeliveryagentComponent } from './deliveryagent/deliveryagent.component';
import { HomeComponent } from './home/home.component';
import { ListprodComponent } from './products/listprod/listprod.component';


import { UsersComponent } from './users/users.component';
import { ContactComponent } from './contact/contact.component';
import { AdComponent } from './ad/ad.component';
import { CreateadComponent } from './ad/createad/createad.component';
import { LoginComponent } from './login/login.component';

import { ClientResgistrationComponent } from './client/client-resgistration/client-resgistration.component';
import { AdminComponent } from './admin/admin.component';
import { SellerResgistrationComponent } from './client/seller-resgistration/seller-resgistration.component';
import { SellerComponent } from './seller/seller.component';
import { ClientComponent } from './client/client.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { CreateStockComponent } from './create-stock/create-stock.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { AisleListComponent } from './aisle-list/aisle-list.component';
import { CreateAisleComponent } from './create-aisle/create-aisle.component';
import { UpdateAilseComponent } from './update-ailse/update-ailse.component';
import { AisleDetailsComponent } from './aisle-details/aisle-details.component';
import { BillComponent } from './shop/bill/bill.component';
import { lignedecommande } from './model/lignedecommande';
import { LigneorderComponent } from './shop/ligneorder/ligneorder.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { OrderComponent } from './shop/order/order.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { MapBoxComponent } from './map-box/map-box.component';
import { ProductsComponent } from './products/products/products.component';
import { UpdateprodComponent } from './products/updateprod/updateprod.component';
import { TestComponent } from './test/test.component';
import { CategoryComponent } from './category/category.component';
import { AddcategComponent } from './category/addcateg/addcateg.component';
import { ListcategComponent } from './category/listcateg/listcateg.component';


const routes: Routes = [
 
       {path:"home", component: HomeComponent},
       {path:"Orders",component:OrderComponent},
       {path:"deliveryagent",component:DeliveryagentComponent},
      {path:"Products",component:ProductsComponent},
       {path:"Createprod",component:CreateprodComponent},
       {path:"Listprod",component:ListprodComponent},
       {path:"Contact",component:ContactComponent},
       {path:"Ad",component:AdComponent},
       {path:'createAd',component:CreateadComponent},
       {path:"login", component:LoginComponent},
       {path:"clients", component:AdminComponent},
       {path:"register-client", component:ClientResgistrationComponent},
       {path:"register-seller", component:SellerResgistrationComponent},
       {path:"", redirectTo:"/home", pathMatch:"full"},
       {path:"SELLER", component:SellerComponent},
       {path:"CLIENT", component:ClientComponent},
       {path: 'stocks', component: StockListComponent},
       {path: 'create-stock', component: CreateStockComponent},
       {path: 'update-stock/:id', component: UpdateStockComponent},
       {path: 'stock-details/:id', component: StockDetailsComponent},
       {path: 'Aisles', component: AisleListComponent},
       {path: 'create-aisle', component: CreateAisleComponent},
       {path: 'update-aisle/:id', component: UpdateAilseComponent},
       {path: 'aisle-details/:id', component: AisleDetailsComponent},
       {path:"ADMIN",component:AdminComponent},
       {path:"DELIVERYAGENT", component:ClientComponent},
       {path:'Bills',component:BillComponent},
       {path:'caddies',component:LigneorderComponent},
       {path:'checkout',component:CheckoutComponent},
       {path: 'Delivery', component: DeliveryComponent},
       {path: 'Complaint', component: ComplaintComponent},
       {path: 'MapBox', component: MapBoxComponent},
       {path:"updateProd/:id",component:UpdateprodComponent},
       {path:'Test',component:TestComponent},
       {path:'Category',component:CategoryComponent},
       {path:"Addcategory",component:AddcategComponent},
       {path:"Listcateg",component:ListcategComponent},
    
      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
