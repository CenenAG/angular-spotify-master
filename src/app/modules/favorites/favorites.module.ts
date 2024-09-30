import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';


@NgModule({
    imports: [
    CommonModule,
    FavoritesRoutingModule,
    FavoritePageComponent
]
})
export class FavoritesModule { }
