import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {BasicFlashcardComponent} from "./basic-flashcard/basic-flashcard.component";
import {FlashcardListComponent} from "./flashcard-list/flashcard-list.component"; // Assurez-vous que le chemin est correct.

export const routes: Routes = [
  // ... autres routes si elles existent
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavBarComponent },
  { path: 'basic-flashcard', component: BasicFlashcardComponent },
  { path: 'flashcard-list', component: FlashcardListComponent },
  // ... autres routes
];
