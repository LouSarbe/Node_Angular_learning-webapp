import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // Assurez-vous que le chemin est correct.
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms"; // Importez le LoginComponent

@NgModule({
  declarations: [
    // Déclarez le LoginComponent ici
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    LoginComponent,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
