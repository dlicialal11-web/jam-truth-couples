import { useState } from 'react';

const decks = {
  song: ["Love / प्यार", "Rain / बारिश", "Night / रात", "Dance / नाच", "Dream / सपना"],
  truth: ["What's your favorite thing about your partner?", "What's your wildest fantasy?"],
  know: ["What's their favorite movie?", "What's their dream vacation spot?"],
  lyrics: ["Do you ever feel like a plastic bag... — Finish: Cause baby you're a firework"],
  wouldyou: ["Would you rather lose your voice or your hearing?"]
};

const deckTitles = {
  song: "🎵 Song Association",
  truth: "🕵️ Truth",
  know: "👯 Know Each Other",
  lyrics: "🎤 Finish the Lyrics",
  wouldyou: "❓ Would You Rather"
};

export default function App() {
  const [selectedDeck, setSelectedDeck] = useState(null);
  const [card, setCard] = useState(null);

  const drawCard = (deckName) => {
    const cards = decks[deckName];
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    setSelectedDeck(deckName);
    setCard(randomCard);
  };

  return (
    <div style={{ minHeight: '100vh', padding: '2rem', textAlign: 'center', background: 'linear-gradient(to right, #f43f5e, #f97316)', color: 'white' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 'bold' }}>Jam & Truth for Couples 💕</h1>
      <div>
        {Object.keys(decks).map(deck => (
          <button key={deck} onClick={() => drawCard(deck)} style={{ margin: '0.5rem', padding: '0.5rem 1rem', background: 'white', color: 'black', borderRadius: '8px' }}>
            {deckTitles[deck]}
          </button>
        ))}
      </div>
      {card && (
        <div style={{ marginTop: '2rem', background: 'white', color: 'black', padding: '1.5rem', borderRadius: '1rem', maxWidth: '90%', margin: '2rem auto' }}>
          <h2>{deckTitles[selectedDeck]}</h2>
          <p style={{ fontSize: '1.1rem', fontStyle: 'italic' }}>{card}</p>
        </div>
      )}
    </div>
  );
}
