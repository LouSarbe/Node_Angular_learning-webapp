import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {BasicFlashcardComponent} from "./basic-flashcard/basic-flashcard.component"; // Assurez-vous que le chemin est correct.

export const routes: Routes = [
  // ... autres routes si elles existent
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavBarComponent },
  { path: 'basic-flashcard', component: BasicFlashcardComponent },
  // ... autres routes
];
