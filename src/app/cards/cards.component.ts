import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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

  constructor(private http: HttpClient) {}

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
