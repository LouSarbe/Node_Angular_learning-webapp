import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Flashcard {
  id: number;
  question: string;
  answer: string;
  certaintyLevel: number;
  nextReviewDate: Date;
}

interface Deck {
  id: number;
  name: string;
  flashcards: Flashcard[];
}

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getFlashcards(): Observable<Flashcard[]> {
    return this.http.get<Flashcard[]>(`${this.baseUrl}/flashcards`);
  }

  getFlashcardById(id: number): Observable<Flashcard> {
    return this.http.get<Flashcard>(`${this.baseUrl}/flashcards/${id}`);
  }

  addFlashcard(flashcard: Flashcard): Observable<Flashcard> {
    return this.http.post<Flashcard>(`${this.baseUrl}/flashcards`, flashcard);
  }

  updateFlashcard(id: number, certaintyLevel: number): Observable<Flashcard> {
    return this.http.put<Flashcard>(`${this.baseUrl}/flashcards/${id}`, { certaintyLevel });
  }

  getDecks(): Observable<Deck[]> {
    return this.http.get<Deck[]>(`${this.baseUrl}/decks`);
  }

  addDeck(deck: Deck): Observable<Deck> {
    return this.http.post<Deck>(`${this.baseUrl}/decks`, deck);
  }

  addFlashcardToDeck(deckId: number, flashcardId: number): Observable<Deck> {
    return this.http.post<Deck>(`${this.baseUrl}/decks/${deckId}/flashcards/${flashcardId}`, {});
  }
}
