import { Component } from '@angular/core';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-sender',
  standalone: false,
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css'
})
export class SenderComponent {
constructor(private dataTransferService:DataTransferService){}
sendData(){
  const data = { message: 'Hello from Sender Component' };
  this.dataTransferService.changeData(data);
}
}
