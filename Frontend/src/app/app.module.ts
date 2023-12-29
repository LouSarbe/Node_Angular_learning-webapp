import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FlashcardListComponent } from './flashcard-list/flashcard-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppComponent,
    LoginComponent,
    NavBarComponent,
    FlashcardListComponent,
    AppComponent,
    FormsModule,
    // Ajoutez d'autres modules ici
  ],
  providers: [
    provideHttpClient(withFetch()),
  ],
})
export class AppModule { }
