import { Component, OnInit } from '@angular/core';
import { TrackModel } from '../../../core/models/tracks.model';

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.css']
})
export class MediaplayerComponent implements OnInit {
  public mockCover: TrackModel = {
    cover: 'https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg',
    album: 'One Love',
    name: 'David Guetta',
    url: 'https://www.youtube.com/watch?v=1y6smkh6c-0',
    _id: '1'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
