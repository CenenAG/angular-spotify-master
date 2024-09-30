import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';



@NgModule({
    imports: [
    CommonModule,
    HomeRoutingModule,
    HomePageComponent
]
})
export class HomeModule { }
