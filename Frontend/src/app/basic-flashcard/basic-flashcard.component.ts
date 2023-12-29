import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { FlashcardService } from '../flashcard.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
export class BasicFlashcardComponent implements OnInit, OnDestroy {

  @Input() flashcardId!: number;
  flashcard: Flashcard | null = null;
  isFlipped: boolean = false;
  private unsubscribe$ = new Subject<void>();

  constructor(private flashcardService: FlashcardService) {}

  ngOnInit() {
    if (this.flashcardId) {
      this.flashcardService.getFlashcardById(this.flashcardId)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(
          data => this.flashcard = data,
          error => console.error('Erreur lors de la récupération de la flashcard', error)
        );
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


  flipCard(): void {
    this.isFlipped = !this.isFlipped;
    console.log("Carte retournée :", this.isFlipped); // Pour déboguer
  }

  // Vous pouvez ajouter d'autres méthodes au besoin
}
