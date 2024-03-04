import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidencesComponent } from './residences/residences.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path:'',redirectTo:'product',pathMatch:"full"},
  {path:'apartments/:id',component:ApartmentsComponent},
  {path:'product/:id',component:DetailProductComponent},
  {path:'product',component:HomeComponent},
  {path:'residence',component:ResidencesComponent},
  {path:'form',component:ReactiveFormsComponent},
  {path:'addProduct',component:AddProductComponent},
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
