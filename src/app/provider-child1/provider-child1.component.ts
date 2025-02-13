import { Component, Injector, NgZone, OnInit } from '@angular/core';
import { ProviderService } from '../provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-child1',
  standalone: false,
  templateUrl: './provider-child1.component.html',
  styleUrl: './provider-child1.component.css'
})
export class ProviderChild1Component{
  provider_id : string = '';
  provider_phone : string = '';
  constructor(private providerService:ProviderService,private router: Router,
    private injector:Injector, public zone: NgZone
  ){ this.zone.run(() => {  this.router.navigate(['/create-provider']); });}

  providerDetails(){
    if(this.provider_id === '') return;
    this.providerService.getProviderById(this.provider_id)
    .subscribe(
      (response: any)=>{
        this.providerService.passResults({results: response})
        console.log('Data - ', response);
      // },(error)=>{
      //     if(error.status==404){
      //       alert("error");
      //     }
        });
  }
 
  // const ngZone = this.injector.get(NgZone);
  //   ngZone.run(
  //     () => {
  //       this.router.navigate(['/create-provider']);
  //     }
  //   );
  // ngOnInit(): void {
  //   const ngZone = this.injector.get(NgZone);
  //   ngZone.run(() => {
  //      this.router.navigate(['/create-provider'], { skipLocationChange: true });
  //   });
  // }
  // performNavigation(){
  //   this.router.navigate(['/create-provider']);
  // }
}
