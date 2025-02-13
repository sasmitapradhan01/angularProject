import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from "primeng/inputtext";

import { InputComponent } from "./folder/input/input.component";
import { TagModule } from "primeng/tag"; 
import { FooterComponent } from './folder/footer/footer.component';
import { ParentComponent } from './folder/parent/parent.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from "./folder/child/child.component";
import { SenderComponent } from './sender/sender.component';
import { ProviderChild1Component } from './provider-child1/provider-child1.component';
import { ProviderChild2Component } from './provider-child2/provider-child2.component';
import { HttpClientModule } from '@angular/common/http';
import { ProviderService } from './provider.service';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    FooterComponent,
    ParentComponent,
    ChildComponent,
    SenderComponent,
    ProviderChild1Component,
    ProviderChild2Component,
    AddProviderComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, BrowserAnimationsModule,
    ButtonModule,
    StepsModule,
    ToastModule,
    InputTextModule,
    TagModule,
    FormsModule,HttpClientModule,RouterModule,MenubarModule,CommonModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
