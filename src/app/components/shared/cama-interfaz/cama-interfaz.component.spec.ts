import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamaInterfazComponent } from './cama-interfaz.component';

describe('CamaInterfazComponent', () => {
  let component: CamaInterfazComponent;
  let fixture: ComponentFixture<CamaInterfazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamaInterfazComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamaInterfazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
