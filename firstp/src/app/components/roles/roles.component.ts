import { APIResponseModel } from './../../model/class/interface/role';
import { HttpClient } from '@angular/common/http';
import { Component,inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/class/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})

export class RolesComponent implements OnInit {
  
  roleList: IRole[] = [];
  http = inject(HttpClient);
  
  ngOnInit(): void {
    this.getAllRoles();
  }
  
  getAllRoles() {
    this.http.get<APIResponseModel>("/api/ClientStrive/GetAllRoles")  // Remove extra `/api`
      .subscribe({
        next: (res) => {
          console.log("API Response:", res);
          this.roleList = res?.data || [];
          console.log(this.roleList)
        },
        error: (error) => {
          console.error("Error fetching roles:", error);
        }
      });
  }
  
  
  
  // string ,  number , boolean , date , object , array , null , undefined
  firstName: string = "hello mohsen";
  angularVersion = "version 18";

  version:number = 18;
  isActive : boolean = false;
  curentDate : Date = new Date();
  inputType:string = "radio";

  selectModel : string = '';
  radioSelect : string = '';
  
  showWelcome () {
    alert("welcome to angular")
  }
  showMessage(message: string) {
    alert(message)
  }

}
