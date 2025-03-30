import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [DatePipe,FormsModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  styles: {}={};
  show = true ; 

  users: string[]=['ali','reza','leila']
  userObj:any = [
    {
      id : 1,
      name : 'ali'
    },
    {
      id : 2,
      name : 'reza'
    },
    {
      id : 3,
      name : 'leila'
    },

  ]
  ngOnInit(): void {
    this.styles = {
      "color" : "red",
      "background-color": "green"
    }
  }

  currentDate: Date = new Date();
  name :string = "mohsen"
  welcome : string ="please enter"
  message : string = ""
  firstName = signal("Angular");

  changeWelcome(e : Event){
    if((<HTMLInputElement>e.target).value == ""){
      this.welcome = "please enter"
    }else
    this.welcome = "welcome " + (<HTMLInputElement>e.target).value
  }
  passWordF: string = "";
passWordS: string = "";

passwordOne(e: Event) {
  this.passWordF = (<HTMLInputElement>e.target).value;
  this.checkPasswordMatch();
}

passwordTwo(e: Event) {
  this.passWordS = (<HTMLInputElement>e.target).value;
  this.checkPasswordMatch();
}

checkPasswordMatch() {
  if (this.passWordF === "" && this.passWordS === "") {
    this.message = "";
  } else {
    this.message = this.passWordF === this.passWordS ? "match" : "not match";
  }
}

  change() {
    this.firstName.set("react.js")
  }
  onInputChange(e:Event){
    console.log(e)
    this.name = (<HTMLInputElement>e.target).value
  }

  addUsers(){
    this.userObj = [
      {
        id : 1,
        name : 'ali'
      },
      {
        id : 2,
        name : 'reza'
      },
      {
        id : 3,
        name : 'leila'
      },
      {
        id : 4,
        name : 'mohsen'
      },
      {
        id : 5,
        name : 'zahra'
      },
  
    ]
  }

  trackByUserId(index: number, user: { id: number; name: string }) {
    return user.id; // Track users by their unique ID
  }
  newUser : string = ""
  inputFunTwo(e : Event){
    this.newUser = (<HTMLInputElement>e.target).value
    console.log(this.newUser)
  }
  addingNew(){
    let newObj = {
      id : this.userObj.length+1,
      name : this.newUser
    }
    this.userObj = [...this.userObj,newObj]
  }

}
