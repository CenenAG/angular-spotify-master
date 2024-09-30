import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule]
})
export class SearchComponent implements OnInit {
  @Output() callbackData: EventEmitter<any> = new EventEmitter()
  src: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  callSearch(termino:string): void {
    if (termino.length>=3) {
      this.callbackData.emit(termino)
      console.log('🤘🤘🤘🤘 llamar api htpp ',termino)
    }    
  }
}
