import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { TrackModel } from '../../../core/models/tracks.model';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api

  constructor(private http: HttpClient) {

  }

  private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter((track: TrackModel) => track._id !== id)
      resolve(listTmp)
    })
  }

  getAlltracks$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
      .pipe(
        map(({ data }: any) => {
          return data
        })
      )
  }

  getAllRandom$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
      .pipe(
/*         tap(data => console.log('ok ok ok ok 💥', data)) , */
        mergeMap(({ data }: any) => this.skipById(data.reverse(), 3)),
/*         tap(data => console.log('ok ok ok ok =>❤️ ', data)), */
        catchError(err => {
          const {status, statusText} = err;
          console.log('error en la conexion ** ❤️❤️', [status, statusText])
          return []
        })
      )

    /* .pipe(mergeMap(({ data }: any) => this.skipById(data, 1)))  */


  }
}