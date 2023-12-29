import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashcardService } from '../flashcard.service';
import { HttpClientModule } from '@angular/common/http';
import {BasicFlashcardComponent} from "../basic-flashcard/basic-flashcard.component";

interface Flashcard {
  id: number;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-flashcard-list',
  templateUrl: './flashcard-list.component.html',
  standalone: true,
  imports: [
    BasicFlashcardComponent,
    HttpClientModule,
    CommonModule,
  ],
  styleUrls: ['./flashcard-list.component.css']
})
export class FlashcardListComponent implements OnInit {
  flashcards: Flashcard[] = [];

  constructor(private flashcardService: FlashcardService) {}

  ngOnInit() {
    this.flashcardService.getFlashcards().subscribe(data => {
      this.flashcards = data;
    });
  }
}
