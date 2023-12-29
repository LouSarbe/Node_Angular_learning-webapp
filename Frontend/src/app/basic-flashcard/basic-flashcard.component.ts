import { Component, Input, OnInit } from '@angular/core';
import { FlashcardService } from '../flashcard.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

interface Flashcard {
  id: number;
  question: string;
  answer: string;
  certaintyLevel: number;
  nextReviewDate: Date;
}

@Component({
  selector: 'app-basic-flashcard',
  templateUrl: './basic-flashcard.component.html',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
  ],
  styleUrls: ['./basic-flashcard.component.css']
})
export class BasicFlashcardComponent implements OnInit {

  @Input() flashcardId!: number;
  flashcard!: Flashcard;
  isFlipped: boolean = false;

  constructor(private flashcardService: FlashcardService) {}

  ngOnInit() {
    if (this.flashcardId) {
      this.flashcardService.getFlashcardById(this.flashcardId).subscribe(
        data => this.flashcard = data,
        error => console.error('Erreur lors de la récupération de la flashcard', error)
      );
    }
  }

  flipCard(): void {
    this.isFlipped = !this.isFlipped;
  }

  // Vous pouvez ajouter d'autres méthodes au besoin
}
