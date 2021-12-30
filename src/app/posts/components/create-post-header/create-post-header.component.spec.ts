import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostHeaderComponent } from './create-post-header.component';

describe('CreatePostHeaderComponent', () => {
  let component: CreatePostHeaderComponent;
  let fixture: ComponentFixture<CreatePostHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePostHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
