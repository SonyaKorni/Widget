import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  city: string;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() messageEvent = new EventEmitter<string>();

  searchCity(event: any){
    this.city = event.target.value
    console.log(this.city)
    this.messageEvent.emit(this.city)

  }
}
