import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckBuilderComponent } from './deck-builder.component';

describe('DeckBuilderComponent', () => {
  let component: DeckBuilderComponent;
  let fixture: ComponentFixture<DeckBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeckBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeckBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
