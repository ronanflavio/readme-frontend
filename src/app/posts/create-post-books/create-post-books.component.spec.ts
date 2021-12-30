import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostBooksComponent } from './create-post-books.component';

describe('CreatePostBooksComponent', () => {
  let component: CreatePostBooksComponent;
  let fixture: ComponentFixture<CreatePostBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePostBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
