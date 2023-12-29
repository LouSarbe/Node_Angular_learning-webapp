// @ts-ignore
import express, { Express, Request, Response } from 'express';
// @ts-ignore
import cors from 'cors';

const app: Express = express();

app.use(cors());
app.use(express.json());

const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

interface Flashcard {
    id: number;
    question: string;
    answer: string;
    certaintyLevel: number; // Niveau de certitude (par exemple, de 1 à 5)
    nextReviewDate: Date; // Date de la prochaine révision
}

//on pourra regrouper les Flashcard dans decks (par matière/semestre/annéeà
interface Deck {
    id: number;
    name: string;
    flashcards: Flashcard[];
}


const flashcards: Flashcard[] = [
    { id: 1, question: 'Quelle est la capitale de la France ?', answer: 'Paris', certaintyLevel: 0, nextReviewDate: new Date() },
    { id: 2, question: 'En quelle année a débuté la Seconde Guerre mondiale ?', answer: '1939', certaintyLevel: 0, nextReviewDate: new Date() },
    // ... autres flashcards
];

const decks: Deck[] = [
    { id: 1, name: 'Histoire-Géo', flashcards: flashcards.slice(0, 5) },
    { id: 2, name: 'Mathématiques', flashcards: flashcards.slice(5) },
    // ... autres decks
];




/*
API Flashcards
 */
app.get('/flashcards', (req: Request, res: Response) => {
    res.json(flashcards);
});

app.post('/flashcards', (req: Request, res: Response) => {
    const { question, answer, certaintyLevel } = req.body;
    const newFlashcard: Flashcard = {
        id: Date.now(),
        question,
        answer,
        certaintyLevel,
        nextReviewDate: calculateNextReviewDate(certaintyLevel)
    };
    flashcards.push(newFlashcard);
    res.status(201).json(newFlashcard);
});
//mettre à jour le niveau de certitude d'une flashcard
app.put('/flashcards/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const { certaintyLevel } = req.body;
    const flashcard = flashcards.find(fc => fc.id === parseInt(id));

    if (flashcard) {
        flashcard.certaintyLevel = certaintyLevel;
        flashcard.nextReviewDate = calculateNextReviewDate(certaintyLevel);
        res.json(flashcard);
    } else {
        res.status(404).send('Flashcard not found');
    }
});

//récupérer une flashcard par son id :

app.get('/flashcards/:flashcardId', (req: Request, res: Response) => {
    const { flashcardId } = req.params;
    const flashcard = flashcards.find(fc => fc.id === parseInt(flashcardId));

    if (flashcard) {
        res.json(flashcard);
    } else {
        res.status(404).send('Flashcard not found');
    }
});

/*
Api Decks
 */
// Obtenir tous les decks
app.get('/decks', (req: Request, res: Response) => {
    res.json(decks);
});

// Ajouter un nouveau deck
app.post('/decks', (req: Request, res: Response) => {
    const { name, flashcards } = req.body;
    const newDeck = { id: Date.now(), name, flashcards };
    decks.push(newDeck);
    res.status(201).json(newDeck);
});

//ajouter une flashcard à un deck :

app.post('/decks/:deckId/flashcards/:flashcardId', (req: Request, res: Response) => {
    const { deckId, flashcardId } = req.params;

    const deck = decks.find(d => d.id === parseInt(deckId));
    const flashcard = flashcards.find(fc => fc.id === parseInt(flashcardId));

    if (deck && flashcard) {
        deck.flashcards.push(flashcard);
        res.status(200).json(deck);
    } else {
        res.status(404).send('Deck or Flashcard not found');
    }
});





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


function calculateNextReviewDate(certaintyLevel: number): Date {
    const now = new Date();
    switch (certaintyLevel) {
        case 1: // Pas sûr du tout
            return new Date(now.getTime() + 10 * 60000); // +10 minutes
        case 2: // Peu sûr
            return new Date(now.getTime() + 1 * 3600000); // +1 heure
        case 3: // Moyennement sûr
            return new Date(now.getTime() + 1 * 24 * 3600000); // +1 jour
        case 4: // Assez sûr
            return new Date(now.getTime() + 3 * 24 * 3600000); // +3 jours
        case 5: // Très sûr
            return new Date(now.getTime() + 7 * 24 * 3600000); // +7 jours
        default:
            return now;
    }
}
