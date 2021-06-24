import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasladoComponent } from './traslado.component';

describe('TrasladoComponent', () => {
  let component: TrasladoComponent;
  let fixture: ComponentFixture<TrasladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrasladoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrasladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
