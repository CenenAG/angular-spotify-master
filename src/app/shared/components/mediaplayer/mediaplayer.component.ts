import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs'; //TODO: Programacion reactiva
import { MultimediaService } from '../../services/multimedia.service';

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.css']
})
export class MediaplayerComponent implements OnInit, OnDestroy {

  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('');
  listObservers$: Array<Subscription> = [];
  state: string = 'paused';
  constructor(public _multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observer1$ = this._multimediaService.playerStatus$
      .subscribe(status => { this.state = status; });
    this.listObservers$.push(observer1$);
  }

  ngOnDestroy(): void {
    console.log('destruccion componente mediaplayer', '💥💥💥💥💥');
    this.listObservers$.forEach((observer: Subscription) => observer.unsubscribe());
  }

  handlePosition(event: MouseEvent): void {
    const elNative:HTMLElement = this.progressBar.nativeElement;
    const {clientX} = event;
    const {x,width} = elNative.getBoundingClientRect();
    const clickX = clientX - x;

    const percentage = (clickX * 100) / width;
    this._multimediaService.seekAudio(percentage);
  }
}

