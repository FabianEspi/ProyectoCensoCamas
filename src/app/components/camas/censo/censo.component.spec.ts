import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CensoComponent } from './censo.component';

describe('CensoComponent', () => {
  let component: CensoComponent;
  let fixture: ComponentFixture<CensoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CensoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CensoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
