// @ts-ignore
import express, { Express, Request, Response } from 'express';
import cors from 'cors';

const app: Express = express();

app.use(cors());
app.use(express.json());

const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

interface Flashcard {
    id: number;
    question: string;
    answer: string;
}

const flashcards: Flashcard[] = [
    { id: 1, question: 'Question 1', answer: 'Réponse 1' }
    // ... autres flashcards
];

app.get('/flashcards', (req: Request, res: Response) => {
    res.json(flashcards);
});

app.post('/flashcards', (req: Request, res: Response) => {
    const flashcard: Flashcard = req.body;
    flashcards.push({ ...flashcard, id: Date.now() });
    res.status(201).json(flashcard);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
