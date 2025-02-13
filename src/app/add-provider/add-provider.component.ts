import { Component, OnInit } from '@angular/core';
import { Provider } from '../provider';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-add-provider',
  standalone: false,
  templateUrl: './add-provider.component.html',
  styleUrl: './add-provider.component.css'
})
export class AddProviderComponent implements OnInit {

  provider: Provider = new Provider();
  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
  }
  saveProvider(){
    this.providerService.createProvider(this.provider).subscribe( data =>{
      console.log(data);
    },
    error => console.log(error));
  }
  onSubmit(){
    console.log(this.provider);
    this.saveProvider();
  }
}
