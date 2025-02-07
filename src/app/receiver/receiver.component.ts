import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-receiver',
  standalone: false,
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.css'
})
export class ReceiverComponent implements OnInit{
  receivedData: any;
  constructor(private dataTransferService:DataTransferService){}
  ngOnInit(): void {
      this.dataTransferService.currentData.subscribe(data => {
        this.receivedData = data;
      })
  }

}
