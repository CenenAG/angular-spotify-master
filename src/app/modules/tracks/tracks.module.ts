import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { TracksPageComponent } from './pages/tracks-page/tracks-page.component';
import { TracksRoutingModule } from './tracks-routing.module';


@NgModule({
    imports: [
    CommonModule,
    TracksRoutingModule,
    TracksPageComponent
]
})
export class TracksModule { }
