import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckPostComponent } from './deck-post.component';

describe('DeckPostComponent', () => {
  let component: DeckPostComponent;
  let fixture: ComponentFixture<DeckPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeckPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeckPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
