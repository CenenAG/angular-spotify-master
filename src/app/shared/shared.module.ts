import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderuserComponent } from './components/headeruser/headeruser.component';
import { MediaplayerComponent } from './components/mediaplayer/mediaplayer.component';
import { SideBarComponent } from './components/sidebar/sidebar.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';



@NgModule({
  declarations: [
    SideBarComponent,
    MediaplayerComponent,
    HeaderuserComponent,
    CardPlayerComponent,
    SectionGenericComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarComponent,
    MediaplayerComponent,
    HeaderuserComponent,
    CardPlayerComponent,
    SectionGenericComponent
  ]
})
export class SharedModule { }
