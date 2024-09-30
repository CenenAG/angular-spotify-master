import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MediaplayerComponent } from '../../../../shared/components/mediaplayer/mediaplayer.component';
import { SideBarComponent } from '../../../../shared/components/sidebar/sidebar.component';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
    standalone: true,
    imports: [SideBarComponent, MediaplayerComponent, RouterOutlet]
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
