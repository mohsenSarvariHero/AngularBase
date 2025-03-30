import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-stars',
  imports: [],
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css'
})
export class StarsComponent implements OnInit{

  @Input() rating : number = 3 
  @Output()  ratingSelected = new EventEmitter<number>();
  width : number = 90

  sendRating(){
    this.ratingSelected.emit(this.rating)
  }
  ngOnInit(): void {
    this.width = this.rating * 90 / 5
  }


}
