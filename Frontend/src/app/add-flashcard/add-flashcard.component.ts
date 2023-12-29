import { Component } from '@angular/core';
import { FlashcardService } from '../flashcard.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Flashcard {
  id: number;
  question: string;
  answer: string;
  certaintyLevel: number;
  nextReviewDate: Date;
}

@Component({
  selector: 'app-add-flashcard',
  templateUrl: './add-flashcard.component.html',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
  styleUrls: ['./add-flashcard.component.css']
})
export class AddFlashcardComponent {
  flashcard: Flashcard = {
    id: Date.now(),
    question: '',
    answer: '',
    certaintyLevel: 1, // Valeur par défaut
    nextReviewDate: new Date(), // Date actuelle
  };

  constructor(private flashcardService: FlashcardService) {}

  onSubmit() {
    if (this.flashcard.question && this.flashcard.answer) {
      this.flashcardService.addFlashcard(this.flashcard).subscribe(
        response => {
          console.log('Flashcard ajoutée', response);
          this.resetForm(); // Réinitialiser le formulaire après l'ajout
        },
        error => console.error('Erreur lors de l’ajout de la flashcard', error)
      );
    }
  }

  resetForm() {
    this.flashcard = {
      id: Date.now(),
      question: '',
      answer: '',
      certaintyLevel: 1,
      nextReviewDate: new Date(),
    };
  }
}


