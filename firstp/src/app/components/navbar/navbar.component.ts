import { DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [DatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  currentDate: Date = new Date();

  firstName = signal("Angular");

  change() {
    this.firstName.set("react.js")
  }
}
