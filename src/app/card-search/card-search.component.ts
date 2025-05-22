// src/app/card-search/card-search.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MtgService } from '../services/mtg.service';

export interface Card {
  name: string;
  imageUrl?: string;
  [key: string]: any; // per altri campi che non definisci ora
}

@Component({
  selector: 'app-card-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./card-search.component.css'],
  templateUrl: './card-search.component.html'
})
export class CardSearchComponent {
  query = '';
  cards: Card[] = [];

  @Output() cardSelected = new EventEmitter<any>();

  constructor(private mtgService: MtgService) {}



 search(): void {
  if (!this.query) return;
  this.mtgService.searchCards(this.query).subscribe((data: any) => {
    this.cards = (data.cards || []).filter((card: any) => card.imageUrl);
  });
}



  selectCard(card: Card): void {
  this.cardSelected.emit(card);
}
}
