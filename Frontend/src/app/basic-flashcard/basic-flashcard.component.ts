import { Component, Input } from '@angular/core';

// Définition du modèle Flashcard
interface Flashcard {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-basic-flashcard',
  templateUrl: './basic-flashcard.component.html',
  standalone: true,
  styleUrls: ['./basic-flashcard.component.css']
})
export class BasicFlashcardComponent {
  @Input() flashcard!: Flashcard; // Flashcard passée en tant que propriété
  isFlipped: boolean = false; // État pour savoir si la carte est retournée

  // Fonction pour basculer l'état de la carte
  flipCard(): void {
    this.isFlipped = !this.isFlipped;
  }
}
