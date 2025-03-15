import { APIResponseModel, IDesignation } from '../../model/class/interface/role';
import { MasterService } from './../../services/master.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {
  
  designationList : IDesignation[] = [];
  masterService = inject(MasterService);
  ngOnInit():void{
    this.masterService.getDesignations().subscribe((result:APIResponseModel)=>{
      this.designationList = result.date;
    },error =>{
      alert("error")
    })
  }
}
