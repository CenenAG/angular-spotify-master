import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrackModel } from '../../../../core/models/tracks.model';
import { TrackService } from '../../services/track.service';
import { SectionGenericComponent } from '../../../../shared/components/section-generic/section-generic.component';

@Component({
    selector: 'app-tracks-page',
    templateUrl: './tracks-page.component.html',
    styleUrls: ['./tracks-page.component.css'],
    standalone: true,
    imports: [SectionGenericComponent]
})
export class TracksPageComponent implements OnInit, OnDestroy {

  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []
  listObservers$: Array<Subscription> = []

  constructor(private trackServise: TrackService) { }

  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
    this.loadDataAll()
    this.loadDataRandom()
  }

  async loadDataAll():Promise<any> {
    this.tracksTrending = await this.trackServise.getAlltracks$().toPromise()
   /*  console.log(this.tracksTrending) */

  }

  loadDataRandom() {
     this.trackServise.getAllRandom$()
      .subscribe((response: TrackModel[]) => {
        this.tracksRandom = response
      }
/*       , err=> console.log('error en la conexion ❤️❤️' + err) */
    ) 
  }
}
