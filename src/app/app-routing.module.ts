import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './_components/home-page/home-page.component';
import { AboutComponent } from './_components/about/about.component';

const routes: Routes = [
	{
		path: '', 
		component: HomePageComponent
	},
	{
		path: 'about', 
		component: AboutComponent
	},
	{ path: '**', redirectTo: '404' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [ RouterModule ],
	declarations: []
})
export class AppRoutingModule { }