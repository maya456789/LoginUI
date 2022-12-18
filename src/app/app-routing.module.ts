import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './appPages/home/home.component';
import { LoginComponent } from './appPages/login/login.component';
import { DialogComponent } from './dialog/dialog.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { MyProductComponent } from './my-product/my-product.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},

  {path:'sidebar',component:SidebarComponent,children:[
    {path:'my-cart',component:MyCartComponent},
    {path:'my-product',component:MyProductComponent},
    {path:'dialog',component:DialogComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
