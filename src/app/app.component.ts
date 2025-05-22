// src/app/app.component.ts
import { Component } from '@angular/core';
import { DeckBuilderComponent } from './deck-builder/deck-builder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DeckBuilderComponent],
  template: `<app-deck-builder />`
})
export class AppComponent {}
