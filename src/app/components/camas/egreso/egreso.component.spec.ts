import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresoComponent } from './egreso.component';

describe('EgresoComponent', () => {
  let component: EgresoComponent;
  let fixture: ComponentFixture<EgresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgresoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
