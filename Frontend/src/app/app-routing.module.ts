import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";

import {BasicFlashcardComponent} from "./basic-flashcard/basic-flashcard.component";

// Définissez vos routes ici
const routes: Routes = [
  // Par exemple, la route pour le composant de connexion
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavBarComponent },
  { path: 'basic-flashcard', component: BasicFlashcardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
