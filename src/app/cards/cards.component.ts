import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [FormsModule], // FormsModule è necessario per ngModel
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  cards: any[] = [];
  filteredCards: any[] = [];
  searchTerm: string = '';
  decks: any[] = [];

  constructor(private http: HttpClient,  private router: Router) {}

  ngOnInit() {
    this.loadCards();
  }

  loadCards() {
    this.http.get<any>('https://api.magicthegathering.io/v1/cards').subscribe(
      (response) => {
        this.cards = response.cards.filter((card: any) => card.imageUrl);
        this.filteredCards = [...this.cards];
      },
      (error) => console.error('Errore nel caricamento delle carte:', error)
    );
  }

  createDeck() {
    if (this.filteredCards.length === 0) {
      alert('Nessuna carta selezionata per il mazzo!');
      return;
    }

    const deck = {
      name: 'Nuovo mazzo ' + (this.decks.length + 1),
      cards: this.filteredCards.map((card) => ({
        name: card.name,
        imageUrl: card.imageUrl,
      })),
    };

    this.decks.push(deck);
    localStorage.setItem('decks', JSON.stringify(this.decks));
    this.router.navigate(['/decks']);
  }

  searchCard() {
    if (this.searchTerm.trim() === '') {
      this.filteredCards = [...this.cards];
    } else {
      this.filteredCards = this.cards.filter((card) =>
        card.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
