import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutSharedModule } from "../../projects/Checkout/src/app/app.module";
import { DetectionSharedModule } from "../../projects/Detection/src/app/app.module";

const routes: Routes = [
    {
        path: 'checkout',
        loadChildren: '../../projects/Checkout/src/app/app.module#CheckoutSharedModule'
    },
    {
        path: 'detection',
        loadChildren: '../../projects/Detection/src/app/app.module#DetectionSharedModule'
    },
    { path: '**', redirectTo: '/checkout/one' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        CheckoutSharedModule.forRoot(),
        DetectionSharedModule.forRoot()
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
