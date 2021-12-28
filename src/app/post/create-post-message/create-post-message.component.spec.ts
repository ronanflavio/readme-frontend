import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostMessageComponent } from './create-post-message.component';

describe('CreatePostMessageComponent', () => {
  let component: CreatePostMessageComponent;
  let fixture: ComponentFixture<CreatePostMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePostMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
