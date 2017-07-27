import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartPageComponent } from './../_components/cart-page/cart-page.component';

const routes: Routes = [
	{
		path: 'cart', 
		component: CartPageComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class StoreRoutingModule { }
