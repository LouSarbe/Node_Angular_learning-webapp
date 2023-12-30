import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import {FlashcardListComponent} from "./flashcard-list/flashcard-list.component";
import {AddFlashcardComponent} from "./add-flashcard/add-flashcard.component";
import { HomeComponent } from './home/home.component';
import {FooterComponent} from "./footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavBarComponent,
    FlashcardListComponent,
    HttpClientModule,
    AddFlashcardComponent,
    FormsModule,
    HomeComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';
}
