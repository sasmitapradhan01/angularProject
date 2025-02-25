import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { CommonService } from './common.service';
import { MenuItem } from 'primeng/api';
@Component({
    selector: 'app-root',
    standalone: false,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
    items: MenuItem[] | undefined;
    // title = 'primeng-quickstart';

    // @ViewChild('charging') chargingElement!: ElementRef;

    // value: any;

    // starCount: number = 0;

    // maxStars: number = 5;

    // isAnimationRunning: boolean = false;

    // startAnimation(): void {
    //     if (this.isAnimationRunning) {
    //         return;
    //     }

    //     const intervalId = setInterval(() => {
    //         if (this.starCount < this.maxStars) {
    //             this.chargingElement.nativeElement.innerHTML += `
    //       <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
    //         <path d="M24.6176 9.69633C24.5627 9.52224 24.4599 9.36716 24.3208 9.24895C24.1817 9.13073 24.0121 9.05417 23.8314 9.02808L16.7296 7.99294L13.5455 1.55934C13.4549 1.40731 13.3264 1.28142 13.1725 1.194C13.0186 1.10657 12.8446 1.06061 12.6676 1.06061C12.4906 1.06061 12.3167 1.10657 12.1628 1.194C12.0089 1.28142 11.8804 1.40731 11.7897 1.55934L8.60569 7.99294L1.50384 9.02808C1.32318 9.05417 1.15356 9.13073 1.01448 9.24895C0.875402 9.36716 0.772516 9.52224 0.717658 9.69633C0.659093 9.86978 0.650142 10.0561 0.691814 10.2344C0.733487 10.4127 0.824125 10.5758 0.953513 10.7053L6.11611 15.7106L4.89753 22.7863C4.86664 22.9684 4.88705 23.1556 4.95647 23.3269C5.02589 23.4981 5.14159 23.6467 5.29062 23.7559C5.43989 23.8623 5.61592 23.9248 5.79884 23.9363C5.98176 23.9479 6.16427 23.9081 6.32576 23.8214L12.6676 20.4801L19.0226 23.8214C19.1632 23.8985 19.3209 23.9391 19.4812 23.9393C19.6874 23.937 19.8881 23.8731 20.0577 23.7559C20.2068 23.6467 20.3225 23.4981 20.3919 23.3269C20.4613 23.1556 20.4817 22.9684 20.4508 22.7863L19.2192 15.7106L24.3686 10.7053C24.5003 10.5772 24.5934 10.4147 24.6374 10.2364C24.6814 10.0581 24.6745 9.87097 24.6176 9.69633Z" fill="#F96F8A"/>
    //       </svg>
    //     `;
    //             this.starCount++;
    //         } else {
    //             clearInterval(intervalId);
    //             this.isAnimationRunning = false;
    //         }
    //     }, 1200);

    //     this.isAnimationRunning = true;
   // }
   childOutput:string='';
   constructor(private commonService:CommonService,private router: Router){}

   ngOnInit(): void {
       this.commonService.commonMessage.subscribe(m=>{
        this.childOutput = m;
       })

    }

}
