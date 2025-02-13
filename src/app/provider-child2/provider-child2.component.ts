import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../provider.service';
import { Provider } from '../provider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-child2',
  standalone: false,
  templateUrl: './provider-child2.component.html',
  styleUrl: './provider-child2.component.css'
})
export class ProviderChild2Component implements OnInit{

  results!: Provider;
  provider: Provider = new Provider();
  providerId:number=0;
  constructor(private providerService:ProviderService){}
  ngOnInit(): void {
      this.providerService.getPassedResults()
       .subscribe(
         (response) => {
           this.results = response.results;
           //this.results = Object.values(response);
          // this.results = response;
          this.provider = this.results;
           //let provider = new Provider(response.results.Provider_name);
          // console.log('Results',this.results);
          this.providerId = this.provider.id;
           console.log("pr"+this.provider.Provider_name);
           console.log("id"+this.providerId);
           //console.log(provider.Provider_name); 
         },(error)=>{
          if(error.status==404){
            alert("error");
          }
         })
  }

  saveProvider(){
    this.providerService.createProvider(this.provider).subscribe( data =>{
      console.log(data);
    },
    error => console.log(error));
  }

  updateProvider(){
    this.providerService.updateProvider(this.providerId, this.provider).subscribe( data =>{
      console.log(data);
    }
    , error => console.log(error));
  }
}
