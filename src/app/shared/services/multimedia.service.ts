import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TrackModel } from '../../core/models/tracks.model';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback: EventEmitter<any> = new EventEmitter<any>();

  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);
  public audio!: HTMLAudioElement;
  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00');
  public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject('-00:00');
  public playerStatus$: BehaviorSubject<string> = new BehaviorSubject('paused');
  public playerPercentage$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() {
    this.audio = new Audio();
    this.trackInfo$.subscribe(responseOk => {

      if (responseOk) {
        console.log(' pasa por el servicio ', responseOk);
        this.setAudio(responseOk);
      }
    });

    this.listenAllEvents();
  }

  private listenAllEvents(): void {
    this.audio.addEventListener('timeupdate', this.calculateTime, false);
    this.audio.addEventListener('playing', this.setPlayerStatus, false);
    this.audio.addEventListener('play', this.setPlayerStatus, false);
    this.audio.addEventListener('pause', this.setPlayerStatus, false);
    this.audio.addEventListener('ended', this.setPlayerStatus, false);
  }

  private setPlayerStatus = (state: any) => {
    console.log('setPlayerStatus', state);
    switch (state.type) {
      case 'playing':
        this.playerStatus$.next('playing');
        break;
      case 'play':
        this.playerStatus$.next('play');
        break;
      case 'ended':
        this.playerStatus$.next('ended');
        break;
      default:
        this.playerStatus$.next('paused');
        break;
    }
  }

  public toggledPlayer(): void {
    (this.audio.paused) ? this.audio.play() : this.audio.pause();
  }


  private calculateTime = () => {
    /*     console.log('calculateTime'); */
    const { currentTime, duration } = this.audio;
    /* console.table( [currentTime, duration]); */
    this.setTimeElapsed(currentTime);
    this.setRemaining(currentTime, duration);
    this.setPercentage(currentTime, duration);
  }

  private setPercentage(currentTime: number, duration: number): void {
    let percentage = (currentTime / duration) * 100;
    this.playerPercentage$.next(percentage)
  }


  private setTimeElapsed = (currentTime: number) => {
    let seconds = Math.floor(currentTime % 60);
    let minutes = Math.floor((currentTime / 60) % 60);

    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;

    const displayFormat = `${displayMinutes}:${displaySeconds}`;
    this.timeElapsed$.next(displayFormat);

  }

  private setRemaining = (currentTime: number, duration: number) => {
    let timeLeft = duration - currentTime;

    let seconds = Math.floor(timeLeft % 60);
    let minutes = Math.floor((timeLeft / 60) % 60);

    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;

    const displayFormat = `-${displayMinutes}:${displaySeconds}`;
    this.timeRemaining$.next(displayFormat);

  }

  private setAudio(track: TrackModel): void {
    this.audio.src = track.url;
    this.audio.play();
  }

  public seekAudio(percentage: number): void {
    const { duration } = this.audio;
    this.audio.currentTime = (duration * percentage) / 100;
  }
}
