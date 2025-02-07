import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from "primeng/inputtext";
import { AppRoutingModule } from './app-routing.module';
import { InputComponent } from "./folder/input/input.component";
import { TagModule } from "primeng/tag"; 
import { FooterComponent } from './folder/footer/footer.component';
import { ParentComponent } from './folder/parent/parent.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from "./folder/child/child.component";
import { SenderComponent } from './sender/sender.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    FooterComponent,
    ParentComponent,
    ChildComponent,
    SenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, BrowserAnimationsModule,
    ButtonModule,
    StepsModule,
    ToastModule,
    InputTextModule,
    TagModule,
    FormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
