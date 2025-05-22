// src/app/deck-post/deck-post.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deck-post',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Deck Post</h2>
    <div *ngFor="let card of deck">
      <img *ngIf="card.imageUrl" [src]="card.imageUrl" width="80">
      <strong>{{ card.name }}</strong>
    </div>
  `
})
export class DeckPostComponent {
  @Input() deck: any[] = [];
}
