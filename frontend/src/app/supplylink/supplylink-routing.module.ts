import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SupplierComponent } from "./components/supplier/supplier.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { WarehouseComponent } from "./components/warehouse/warehouse.component";
import { ProductComponent } from "./components/product/product.component";
import { SupplierEditComponent } from "./components/supplieredit/supplieredit.component";
import { WarehouseEditComponent } from "./components/warehouseedit/warehouseedit.component";

const routes: Routes = [
  {path : '', redirectTo : '/dashboard', pathMatch : 'full'},
  {path : 'dashboard', component : DashboardComponent},
  {path : 'supplier', component : SupplierComponent},
  {path : 'warehouse', component : WarehouseComponent},
  {path : 'product', component : ProductComponent},
  {path : 'supplierEdit', component : SupplierEditComponent},
  {path : 'warehouseEdit', component : WarehouseEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupplyLinkRoutingModule {}