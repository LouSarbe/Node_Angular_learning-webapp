"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var express_1 = require("express");
// @ts-ignore
var cors_1 = require("cors");
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
var PORT = parseInt(process.env.PORT, 10) || 3000;
var flashcards = [
    { id: 1, question: 'Quelle est la capitale de la France ?', answer: 'Paris', certaintyLevel: 0, nextReviewDate: new Date() },
    { id: 2, question: 'En quelle année a débuté la Seconde Guerre mondiale ?', answer: '1939', certaintyLevel: 0, nextReviewDate: new Date() },
    // ... autres flashcards
];
var decks = [
    { id: 1, name: 'Histoire-Géo', flashcards: flashcards.slice(0, 5) },
    { id: 2, name: 'Mathématiques', flashcards: flashcards.slice(5) },
    // ... autres decks
];
/*
API Flashcards
 */
app.get('/flashcards', function (req, res) {
    res.json(flashcards);
});
app.post('/flashcards', function (req, res) {
    var _a = req.body, question = _a.question, answer = _a.answer, certaintyLevel = _a.certaintyLevel;
    var newFlashcard = {
        id: Date.now(),
        question: question,
        answer: answer,
        certaintyLevel: certaintyLevel,
        nextReviewDate: calculateNextReviewDate(certaintyLevel)
    };
    flashcards.push(newFlashcard);
    res.status(201).json(newFlashcard);
});
//mettre à jour le niveau de certitude d'une flashcard
app.put('/flashcards/:id', function (req, res) {
    var id = req.params.id;
    var certaintyLevel = req.body.certaintyLevel;
    var flashcard = flashcards.find(function (fc) { return fc.id === parseInt(id); });
    if (flashcard) {
        flashcard.certaintyLevel = certaintyLevel;
        flashcard.nextReviewDate = calculateNextReviewDate(certaintyLevel);
        res.json(flashcard);
    }
    else {
        res.status(404).send('Flashcard not found');
    }
});
//récupérer une flashcard par son id :
app.get('/flashcards/:flashcardId', function (req, res) {
    var flashcardId = req.params.flashcardId;
    var flashcard = flashcards.find(function (fc) { return fc.id === parseInt(flashcardId); });
    if (flashcard) {
        res.json(flashcard);
    }
    else {
        res.status(404).send('Flashcard not found');
    }
});
/*
Api Decks
 */
// Obtenir tous les decks
app.get('/decks', function (req, res) {
    res.json(decks);
});
// Ajouter un nouveau deck
app.post('/decks', function (req, res) {
    var _a = req.body, name = _a.name, flashcards = _a.flashcards;
    var newDeck = { id: Date.now(), name: name, flashcards: flashcards };
    decks.push(newDeck);
    res.status(201).json(newDeck);
});
//ajouter une flashcard à un deck :
app.post('/decks/:deckId/flashcards/:flashcardId', function (req, res) {
    var _a = req.params, deckId = _a.deckId, flashcardId = _a.flashcardId;
    var deck = decks.find(function (d) { return d.id === parseInt(deckId); });
    var flashcard = flashcards.find(function (fc) { return fc.id === parseInt(flashcardId); });
    if (deck && flashcard) {
        deck.flashcards.push(flashcard);
        res.status(200).json(deck);
    }
    else {
        res.status(404).send('Deck or Flashcard not found');
    }
});
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
function calculateNextReviewDate(certaintyLevel) {
    var now = new Date();
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
