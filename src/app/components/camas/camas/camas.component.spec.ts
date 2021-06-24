import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamasComponent } from './camas.component';

describe('CamasComponent', () => {
  let component: CamasComponent;
  let fixture: ComponentFixture<CamasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
