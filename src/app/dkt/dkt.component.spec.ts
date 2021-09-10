import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DktComponent } from './dkt.component';

describe('DktComponent', () => {
  let component: DktComponent;
  let fixture: ComponentFixture<DktComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DktComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
