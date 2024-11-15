import { ComponentFixture, TestBed } from '@angular/core/testing';

import { USDDetailsComponent } from './usd-details.component';

describe('USDDetailsComponent', () => {
  let component: USDDetailsComponent;
  let fixture: ComponentFixture<USDDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [USDDetailsComponent]
    });
    fixture = TestBed.createComponent(USDDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
