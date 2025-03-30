import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MasterComponent } from './components/master/master.component';
import { StarsComponent } from './components/stars/stars.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [StarsComponent,RouterOutlet,NavbarComponent,MasterComponent,RouterLink,RouterLinkActive,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularFirst';
  stars: number[] = [1.5, 3 , 2.5 , 4 , 3.5 , 2]
  onRatingSelected(rating : number){
    console.log(`the rating is ${rating}`)
  }
}
