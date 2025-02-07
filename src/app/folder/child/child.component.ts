import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Input() childInput : string = '';

constructor(private commonService:CommonService){}

childData:string='';
@Output() childOutput = new EventEmitter();
onButtonClick(){
  this.childOutput.emit(this.childData);

  this.commonService.sendData(this.childData);

}
}
