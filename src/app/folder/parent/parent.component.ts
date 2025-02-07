import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
parentData: string = '';
childInput: string = '';
onButtonClick(){
  this.childInput = this.parentData;
}

childOutput:string='';
onChildOutput(data:any){
  this.childOutput = data;
}
}

