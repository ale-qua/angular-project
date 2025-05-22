import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSearchComponent } from '../card-search/card-search.component';
import { DeckPostComponent } from '../deck-post/deck-post.component';

@Component({
  selector: 'app-deck-builder',
  standalone: true,
  imports: [CommonModule, CardSearchComponent, DeckPostComponent],
  styleUrls: ['./deck-builder.component.css'],
  templateUrl: './deck-builder.component.html'
})
export class DeckBuilderComponent {
  deck: any[] = [];

  @ViewChild('deckNameInput') deckNameInput!: ElementRef<HTMLInputElement>;

  addCardToDeck(card: any) {
    this.deck.push(card);
  }

  removeCard(card: any) {
    this.deck = this.deck.filter(c => c !== card);
  }

  saveDeck() {
    const deckName = this.deckNameInput.nativeElement.value.trim();

    if (!deckName) {
      alert('Inserisci un nome per il mazzo');
      return;
    }

    const savedDeck = {
      name: deckName,
      cards: this.deck
    };

    localStorage.setItem(`deck_${deckName}`, JSON.stringify(savedDeck));
    alert(`Mazzo "${deckName}" salvato con successo!`);
  }
}
