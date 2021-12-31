import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSynopsisComponent } from './book-synopsis.component';

describe('BookSynopsisComponent', () => {
  let component: BookSynopsisComponent;
  let fixture: ComponentFixture<BookSynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSynopsisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
