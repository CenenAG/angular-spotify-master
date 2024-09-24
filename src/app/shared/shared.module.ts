import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { HeaderuserComponent } from './components/headeruser/headeruser.component';
import { MediaplayerComponent } from './components/mediaplayer/mediaplayer.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { SideBarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { OrderListPipe } from './pipe/order-list.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';



@NgModule({
  declarations: [
    SideBarComponent,
    MediaplayerComponent,
    HeaderuserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    OrderListPipe,
    ImgBrokenDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideBarComponent,
    MediaplayerComponent,
    HeaderuserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    OrderListPipe,
    ImgBrokenDirective
  ]
})
export class SharedModule { }
