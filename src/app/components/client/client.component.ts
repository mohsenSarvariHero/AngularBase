import { APIResponseModel } from './../../model/class/interface/role';
import { ClientService } from './../../services/client.service';
import { Component,inject,OnInit } from '@angular/core';
import { Client } from '../../model/class/client';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  clientObj: Client = new Client();

  city:string = ""
  clientService = inject(ClientService)
  ngOnInit(): void {
    this.loadClient
  }
  loadClient(){
    this.clientService.getAllClient().subscribe((res:APIResponseModel)=>{
      this.city = res.date
    })
  }
  onSaveClient(){
    debugger;
    this.clientService.addUpdate(this.clientObj).subscribe((res:APIResponseModel)=>{
      if(res.result){
        alert("client success")
        this.clientObj = new Client();
        this.loadClient
      }else{
        alert(res.message)
      }
    })
  }

}
