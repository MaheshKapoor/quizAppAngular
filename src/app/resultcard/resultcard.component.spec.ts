import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResultcardComponent } from './resultcard.component';

describe('ResultcardComponent', () => {
  let component: ResultcardComponent;
  let fixture: ComponentFixture<ResultcardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
