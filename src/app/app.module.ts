import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule as NgRxStore } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { BooksEffects } from './_effects/books'

import { AppComponent } from './_components/app/app.component';
import { NavComponent } from './_components/nav/nav.component';
import { HomePageComponent } from './_components/home-page/home-page.component';

import { SharedModule } from './shared.module';
import { StoreModule } from './store/store.module';
import { reducers, initialState } from './_reducers/index';

import { ApiService } from './_services/api/api.service'

@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		HomePageComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		NgRxStore.forRoot(reducers),
		EffectsModule.forRoot([BooksEffects]),
		BrowserModule,
		StoreModule
	],
	providers: [ApiService],
	bootstrap: [AppComponent]
})
export class AppModule { }
